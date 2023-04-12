import { BASE_URL } from "./constant"

// for FE
export const getDataFE = async (url: string) => {
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

export const getData = async (param: string, token: string) => {
    try {
        const requestOptions: RequestInit = {
            method: 'GET',
            headers: authHeader(token)
        };
        return await (await fetch(`${BASE_URL}/api/${param}`, requestOptions)).json();
    } catch(e) {
        console.log(e)
    }
}

export const postData = async (param: string, token: string, body: any) => {
    try {
        const requestOptions: RequestInit = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: authHeader(token)
        }
        return await(await fetch(`${BASE_URL}/api/${param}`, requestOptions)).json()
    } catch(e) {
        console.log(e)
    }
}

export const putData = async (param: string, token: string, body: any, id: number) => {
    try {
        const requestOptions: RequestInit = {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: authHeader(token)
        }
        return await(await fetch(`${BASE_URL}/api/${param}?id=${id}`, requestOptions)).json()
    } catch(e) {
        console.log(e)
    }
}

export const deleteData = async (param: string, token: string, id: number) => {
    try {
        const requestOptions: RequestInit = {
            method: 'DELETE',
            headers: authHeader(token)
        }
        return await(await fetch(`${BASE_URL}/api/${param}?id=${id}`, requestOptions)).json()
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