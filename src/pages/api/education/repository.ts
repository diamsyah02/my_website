import prisma from "@/helpers/prisma_client";
import EducationEntity from "./entity";

let result: any;

export const repo_get = async () => {
    try {
        result = await prisma.pendidikan.findMany()
    } catch(e) {
        result = e
    }
    return result
}

export const repo_get_by_id = async (id: number) => {
    try {
        result = await prisma.pendidikan.findUnique({
            where: {
                id: id
            }
        })
    } catch(e) {
        result = e
    }
    return result
}

export const repo_post = async (data: EducationEntity) => {
    try {
        result = await prisma.pendidikan.create({
            data: data
        })
    } catch(e){
        result = e
    }
    return result
}

export const repo_put = async (id: number, data: EducationEntity) => {
    try {
        result = await prisma.pendidikan.update({
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
        result = await prisma.pendidikan.delete({
            where: {
                id: id
            }
        })
    } catch(e) {
        result = e
    }
    return result
}