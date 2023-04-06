import { verifyAuthenticationAdmin, verifyAuthorization } from "@/helpers/authentication";
import { WebResponseEntity } from "@/helpers/web_response";
import { NextApiRequest, NextApiResponse } from "next";
import { deleteData, getData, getDataByID, getDataForFE, login, logout, postData, putData } from "./service";

let result: WebResponseEntity = {
    statusCode: 401,
    message: `Token invalid!`,
    data: []
}

const Handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { query, body } = req
    console.log(body)
    if(query.param === 'login') result = login(body.username, body.password, res)
    if(query.param === 'logout') result = logout(req, res)
    res.status(result.statusCode).send(result)
}

export default Handler