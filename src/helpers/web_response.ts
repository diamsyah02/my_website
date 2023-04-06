export type WebResponseEntity = {
    statusCode: number,
    message: string,
    data: any
}

export const WebResponse = (param: WebResponseEntity) => {
    return param
}