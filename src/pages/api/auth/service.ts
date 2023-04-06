import { WebResponse } from "@/helpers/web_response"
import { setTokenAdmin, getCookieAdmin, clearCookieAdmin, setCookieAdmin } from "@/helpers/authentication"
import { NextApiRequest, NextApiResponse } from "next"

export const login = (username: string, password: string, res: NextApiResponse) => {
    if(username === process.env.USERNAME && password === process.env.PASSWORD) {
        const token = setTokenAdmin(username)
        setCookieAdmin(res, token)
        return WebResponse({ statusCode: 200, message: `Login successfully`, data: token })
    }
    return WebResponse({ statusCode: 400, message: `Login unsuccessfully`, data: [] })
}

export const logout = (req: NextApiRequest, res: NextApiResponse) => {
    if(!getCookieAdmin(req)) return WebResponse({ statusCode: 401, message: `You are already not login`, data: [] })
    clearCookieAdmin(res)
    return WebResponse({statusCode: 200, message: `Successfuly logout!`, data: []})
}