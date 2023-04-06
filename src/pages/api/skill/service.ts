import { WebResponse } from "@/helpers/web_response"
import SkillEntity from "./entity"
import { repo_delete, repo_get, repo_get_by_id, repo_post, repo_put } from "./repository"

export const getDataForFE = async () => {
    const result = await repo_get()
    return WebResponse({ statusCode: 200, message: 'Get data success', data: result })
}

export const getData = async () => {
    const result = await repo_get()
    return WebResponse({ statusCode: 200, message: 'Get data success', data: result })
}

export const getDataByID = async (id: number) => {
    const result = await repo_get_by_id(id)
    return WebResponse({ statusCode: 200, message: 'Get data success', data: result })
}

export const postData = async (data: SkillEntity) => {
    const result = await repo_post(data)
    if(typeof result === 'object' && Object.keys(result).length > 1) return WebResponse({ statusCode: 200, message: 'Post data success', data: result })
    return WebResponse({ statusCode: 400, message: 'Post data failed', data: [] })
}

export const putData = async (id: number, data: SkillEntity) => {
    const result = await repo_put(id, data)
    if(typeof result === 'object' && Object.keys(result).length > 1 ) return WebResponse({ statusCode: 200, message: 'Put data success', data: result })
    return WebResponse({ statusCode: 400, message: 'Put data failed', data: result })
}

export const deleteData = async (id: number) => {
    const result = await repo_delete(id)
    if(result) return WebResponse({ statusCode: 200, message: 'Delete data success', data: result })
    return WebResponse({ statusCode: 400, message: 'Delete data failed', data: [] })
}