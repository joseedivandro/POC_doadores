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
}

export default DoadorService;
