import { prisma } from "../../prisma/client";

export class RepositoryFuncionarios{
    async buscarTodos(){
        return prisma.funcionarios.findMany();
    }

    async buscarPorId(id: number){
        return prisma.funcionarios.findUnique({
            where: {
                id: id
            },
        });
    }

    async buscarPorUsuario(usuario: string){
        return prisma.funcionarios.findUnique({
            where: {
                usuario: usuario
            }
        });
    }
}