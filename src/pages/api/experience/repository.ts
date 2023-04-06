import prisma from "@/helpers/prisma_client";
import ExperieinceEntity from "./entity";

let result: any;

export const repo_get = async () => {
    try {
        result = await prisma.pengalaman.findMany()
    } catch(e) {
        result = e
    }
    return result
}

export const repo_get_by_id = async (id: number) => {
    try {
        result = await prisma.pengalaman.findUnique({
            where: {
                id: id
            }
        })
    } catch(e) {
        result = e
    }
    return result
}

export const repo_post = async (data: ExperieinceEntity) => {
    try {
        result = await prisma.pengalaman.create({
            data: data
        })
    } catch(e){
        result = e
    }
    return result
}

export const repo_put = async (id: number, data: ExperieinceEntity) => {
    try {
        result = await prisma.pengalaman.update({
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
        result = await prisma.pengalaman.delete({
            where: {
                id: id
            }
        })
    } catch(e) {
        result = e
    }
    return result
}