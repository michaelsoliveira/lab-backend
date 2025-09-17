import prisma from '../prisma/client';

type UpsertUser = {
    email?: string;
    username?: string;
    password?: string;
}

export async function list() {
    return prisma.user.findMany({ orderBy: { username: 'asc' } });
}

export async function getById(id: string) {
    return prisma.user.findUnique({ where: { id } });
}

export async function getByEmail(email: string) {
    return prisma.user.findUnique({ where: { email } });
}

export async function create(data: { 
    email: string; username?: string; password: string; 
}) {
    return prisma.user.create({ data });
}

export async function update(id: string, data: UpsertUser) {
    return prisma.user.update({
        where: { id },
        data,
    });
}

export async function remove(id: string) {
    return prisma.user.delete({ where: { id } });
}