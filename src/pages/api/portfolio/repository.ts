import prisma from "@/helpers/prisma_client";
import PortfolioEntity from "./entity";

let result: any;

export const repo_get = async () => {
    try {
        result = await prisma.portofolio.findMany()
    } catch(e) {
        result = e
    }
    return result
}

export const repo_get_by_id = async (id: number) => {
    try {
        result = await prisma.portofolio.findUnique({
            where: {
                id: id
            }
        })
    } catch(e) {
        result = e
    }
    return result
}

export const repo_post = async (data: PortfolioEntity) => {
    try {
        result = await prisma.portofolio.create({
            data: data
        })
    } catch(e){
        result = e
    }
    return result
}

export const repo_put = async (id: number, data: PortfolioEntity) => {
    try {
        result = await prisma.portofolio.update({
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
        result = await prisma.portofolio.delete({
            where: {
                id: id
            }
        })
    } catch(e) {
        result = e
    }
    return result
}