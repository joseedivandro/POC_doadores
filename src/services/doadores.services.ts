import { Pool } from 'pg';
import DoadorRepository from '../repositories/doadores.repository';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'donation',
  password: '159753',
  port: 5432,
});

const doadorRepository = new DoadorRepository(pool);

class DoadorService {
  async cadastrarDoador(nome: string, idade: number, sexo: string, tipoSanguineo: string, dataDoacao: Date) {
    
    
    await doadorRepository.cadastrarDoador(nome, idade, sexo, tipoSanguineo, dataDoacao);
  }

  async obterDoadores() {
    return doadorRepository.obterDoadores();
  }


async editarDoador(id: string, nome: string, idade: number, sexo: string, tipoSanguineo: string, dataDoacao: Date) {
  // Verificar se o doador existe
  const doadorExistente = await doadorRepository.obterDoadorPorId(id);
  if (!doadorExistente) {
    throw new Error('Doador não encontrado');
  }

  // Atualizar os dados do doador
  await doadorRepository.editarDoador(id, nome, idade, sexo, tipoSanguineo, dataDoacao);
}

async excluirDoador(id: string) {
  // Verificar se o doador existe
  const doadorExistente = await doadorRepository.obterDoadorPorId(id);
  if (!doadorExistente) {
    throw new Error('Doador não encontrado');
  }

  // Excluir o doador
  await doadorRepository.excluirDoador(id);
}


}


export default DoadorService;
