import prisma from "@/helpers/prisma_client";
import ContactEntity from "./entity";

let result: any;

export const repo_get = async () => {
    try {
        result = await prisma.kontak.findMany()
    } catch(e) {
        result = e
    }
    return result
}

export const repo_get_by_id = async (id: number) => {
    try {
        result = await prisma.kontak.findUnique({
            where: {
                id: id
            }
        })
    } catch(e) {
        result = e
    }
    return result
}

export const repo_post = async (data: ContactEntity) => {
    try {
        result = await prisma.kontak.create({
            data: data
        })
    } catch(e){
        result = e
    }
    return result
}

export const repo_put = async (id: number, data: ContactEntity) => {
    try {
        result = await prisma.kontak.update({
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
        result = await prisma.kontak.delete({
            where: {
                id: id
            }
        })
    } catch(e) {
        result = e
    }
    return result
}