import bcrypt from "bcrypt";
import { RepositoryFuncionarios } from "../repositories/repositoryFuncionarios";

export class AuthService{
    constructor(
        private repositoryFuncionarios: RepositoryFuncionarios
    ){}

    async login(usuario: string, senha: string){
        const funcionario = await this.repositoryFuncionarios.buscarPorUsuario(usuario);

        if(!funcionario){
            throw new Error("Usuário ou senha inválidos");
        }

        const senhaValida = await bcrypt.compare(senha, funcionario.senha_hash);

        if(!senhaValida){
            throw new Error("Usuário ou senha inválidos");
        }

        return{
            id: funcionario.id,
            usuario: funcionario.usuario,
            nome: funcionario.nome,
            tipo: funcionario.tipo,
            departamentoId: funcionario.departamento_id
        }
    }
}