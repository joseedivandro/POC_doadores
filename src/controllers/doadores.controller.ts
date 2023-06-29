import { Request, Response } from 'express';
import DoadorService from '../services/doadores.services'

const doadorService = new DoadorService();


export async function cadastrarDoador(req: Request, res: Response) {
  try {
    const { nome, idade, sexo, tipoSanguineo, dataDoacao } = req.body;


    await doadorService.cadastrarDoador(nome, idade, sexo, tipoSanguineo, dataDoacao);

    res.status(201).send('Doador cadastrado com sucesso!');
  } catch (err) {
    console.error('Erro ao cadastrar doador:', err);
    res.status(500).send('Erro ao cadastrar doador');
  }
}

export async function obterDoadores(req: Request, res: Response) {
  try {
    const doadores = await doadorService.obterDoadores();

    res.status(200).json(doadores.rows);
  } catch (err) {
    console.error('Erro ao obter doadores:', err);
    res.status(500).send('Erro ao obter doadores');
  }
}

export async function editarDoador(req: Request, res: Response) {
  const { id } = req.params;
  const { nome, idade, sexo, tipoSanguineo, dataDoacao } = req.body;

  try {
    await doadorService.editarDoador(id, nome, idade, sexo, tipoSanguineo, dataDoacao);
    res.status(200).send('Doador editado com sucesso!');
  } catch (err) {
    console.error('Erro ao editar doador:', err);
    res.status(500).send('Erro ao editar doador');
  }
}

export async function excluirDoador(req: Request, res: Response) {
  const { id } = req.params;

  try {
    await doadorService.excluirDoador(id);
    res.status(200).send('Doador excluído com sucesso!');
  } catch (err) {
    console.error('Erro ao excluir doador:', err);
    res.status(500).send('Erro ao excluir doador');
  }
}