import { Request, Response } from "express";
import { RepositoryFuncionarios } from "../repositories/repositoryFuncionarios";
import { AuthService } from "../services/authService";

const repositoryFuncionarios = new RepositoryFuncionarios();
const authService = new AuthService(repositoryFuncionarios);

export class AuthController{
    async login(req: Request, res: Response){
        try{
            const { usuario, senha } = req.body;
            const funcionario = await authService.login(usuario, senha);

            return res.status(200).json(funcionario);
        } catch(erro){
            return res.status(401).json({
                mensagem: "Usuário ou senha inválidos",
            });
        }
    }
}