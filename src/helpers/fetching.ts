import { BASE_URL } from "./constant"

// for FE
export const getData = async (url: string) => {
    try {
        const requestOptions: RequestInit = {
            method: 'GET',
            headers: authHeader(process.env.SECRET)
        };
        return await (await fetch(`${BASE_URL}/api/${url}?param=fe`, requestOptions)).json();
    } catch(e) {
        console.log(e)
    }
}

// for admin
export const auth = async (param: string, body: any) => {
    try {
        const requestOptions: RequestInit = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: authHeader('')
        }
        return await(await fetch(`${BASE_URL}/api/auth?param=${param}`, requestOptions)).json()
    } catch(e) {
        console.log(e)
    }
}

function authHeader(token: string) {
    let headers: HeadersInit = new Headers()
    headers.set('Content-Type', 'application/json')
    if(token !== '') headers.set('authorization', `Bearer ${token}`)
    return headers
}