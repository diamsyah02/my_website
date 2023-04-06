import { serialize } from "cookie"
import { NextApiRequest, NextApiResponse } from "next";
import { sign, verify } from 'jsonwebtoken'

export const setCookieAdmin = (res: NextApiResponse, token: string) => {
    const serialised = serialize('async_await', token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
    });
    res.setHeader("Set-Cookie", serialised)
}

export const getCookieAdmin = (req: NextApiRequest) => {
    const { cookies } = req
    return cookies.async_await
}

export const clearCookieAdmin = (res: NextApiResponse) => {
    const serialised = serialize('async_await', '', {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: -1,
        path: "/",
    });
    res.setHeader("Set-Cookie", serialised);
}

export const setTokenAdmin = (username: string) => {
    const token = sign(
        {
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, // 30 days
            username: username,
        },
        process.env.SECRET,
        {
            algorithm: 'HS256'
        }
    );
    return token
}

export const verifyAuthenticationAdmin = (req: NextApiRequest) => {
    const { headers } = req
    let jwt: any = headers.authorization?.split(' ')
    if (jwt?.length! > 0) {
        const decode = verify(jwt[1], process.env.SECRET)
        if (Object.keys(decode).length !== 0) return true
        return false
    }
    return false
}

export const verifyAuthorization = (req: NextApiRequest) => {
    const { headers } = req
    let token: any = headers.authorization?.split(' ')
    if (token?.length! > 0) {
        if(token[1] === process.env.SECRET) return true
        return false
    }
    return false
}