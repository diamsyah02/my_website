import prisma from "@/helpers/prisma_client";
import VisitorEntity from "./entity";

let result: any;

export const repo_get = async () => {
    try {
        result = await prisma.profile.findMany()
    } catch(e) {
        result = e
    }
    return result
}

export const repo_get_by_id = async (id: number) => {
    try {
        result = await prisma.profile.findUnique({
            where: {
                id: id
            }
        })
    } catch(e) {
        result = e
    }
    return result
}

export const repo_post = async (data: VisitorEntity) => {
    try {
        result = await prisma.profile.create({
            data: data
        })
    } catch(e){
        result = e
    }
    return result
}

export const repo_put = async (id: number, data: VisitorEntity) => {
    try {
        result = await prisma.profile.update({
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
        result = await prisma.profile.delete({
            where: {
                id: id
            }
        })
    } catch(e) {
        result = e
    }
    return result
}