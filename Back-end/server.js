import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()
app.use(express.json()) // Middleware para interpretar JSON no corpo das requisições
app.use(cors())

// Criar usuário
app.post('/usuarios', async (req, res) => {
    try {
        // Cria um novo usuário no banco de dados com os dados enviados no corpo da requisição
        const newUser = await prisma.user.create({
            data: {
                email: req.body.email,
                name: req.body.name,
                age: String(req.body.age) // Convertendo a idade para string
            }
        });
        res.status(201).json(newUser) // Retorna o usuário criado com status 201 (Criado)
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar usuário", details: error.message })
    }
})

// Listar usuários
app.get('/usuarios', async (req, res) => {
    try {
        // Busca todos os usuários cadastrados no banco de dados
        const users = await prisma.user.findMany()
        res.status(200).json(users) // Retorna a lista de usuários com status 200 (OK)
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar usuários", details: error.message })
    }
})

// Atualizar usuário
app.put('/usuarios/:id', async (req, res) => {
    try {
        const { id } = req.params;
        // Atualiza os dados do usuário com o ID fornecido na URL
        const updatedUser = await prisma.user.update({
            where: { id: Number(id) }, // Converte o ID para número antes de atualizar
            data: {
                email: req.body.email,
                name: req.body.name,
                age: String(req.body.age)
            }
        });
        res.status(200).json(updatedUser) // Retorna o usuário atualizado com status 200 (OK)
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar usuário", details: error.message })
    }
})

// Deletar usuário
app.delete('/usuarios/:id', async (req, res) => {
    try {
        const { id } = req.params;
        // Exclui o usuário com o ID fornecido na URL
        await prisma.user.delete({
            where: { id: Number(id) } // Converte o ID para número antes de deletar
        });
        res.status(200).json({ message: "Usuário deletado com sucesso" }) // Retorna mensagem de sucesso
    } catch (error) {
        res.status(500).json({ error: "Erro ao deletar usuário", details: error.message })
    }
})




/*
    Login BD

    nome: adm
    senha: MdYlk5WLZzXYB5KG

*/

