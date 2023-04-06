import prisma from "@/helpers/prisma_client";
import SkillEntity from "./entity";

let result: any;

export const repo_get = async () => {
    try {
        result = await prisma.kemampuan.findMany()
    } catch(e) {
        result = e
    }
    return result
}

export const repo_get_by_id = async (id: number) => {
    try {
        result = await prisma.kemampuan.findUnique({
            where: {
                id: id
            }
        })
    } catch(e) {
        result = e
    }
    return result
}

export const repo_post = async (data: SkillEntity) => {
    try {
        result = await prisma.kemampuan.create({
            data: data
        })
    } catch(e){
        result = e
    }
    return result
}

export const repo_put = async (id: number, data: SkillEntity) => {
    try {
        result = await prisma.kemampuan.update({
            where: {
                id: id
            },
            data: data
        })
    } catch(e) {
        result = e
    }
    return result
}

export const repo_delete = async (id: number) => {
    try {
        result = await prisma.kemampuan.delete({
            where: {
                id: id
            }
        })
    } catch(e) {
        result = e
    }
    return result
}