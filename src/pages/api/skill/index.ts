import { verifyAuthenticationAdmin, verifyAuthorization } from "@/helpers/authentication";
import { WebResponseEntity } from "@/helpers/web_response";
import { NextApiRequest, NextApiResponse } from "next";
import { deleteData, getData, getDataByID, getDataForFE, postData, putData } from "./service";

let result: WebResponseEntity = {
    statusCode: 401,
    message: `Token invalid!`,
    data: []
}

const Handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { method, query, body } = req
    if(Object.keys(query).length !== 0 && query.param === 'fe' && method === 'GET') {
        if(verifyAuthorization(req)) result = await getDataForFE() 
    } else {
        if(verifyAuthenticationAdmin(req)) {
            if(Object.keys(query).length !== 0 && query.id !== null) {
                const id = query?.id ?? 0
                if(method === 'GET') result = await getDataByID(+id)
                if(method === 'PUT') result = await putData(+id, body)
                if(method === 'DELETE') result = await deleteData(+id)
            } else {
                if(method === 'GET') result = await getData()
                if(method === 'POST') result = await postData(body)
            }
        }
    }
    res.status(result.statusCode).send(result)
}

export default Handler