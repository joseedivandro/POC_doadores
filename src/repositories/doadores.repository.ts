import { Pool, QueryResult } from 'pg';

class DoadorRepository {
  constructor(private pool: Pool) {}

  async cadastrarDoador(nome: string, idade: number, sexo: string, tipoSanguineo: string, dataDoacao: Date) {
    const query = 'INSERT INTO donation (nome, idade, sexo, tipo_sanguineo, data_doacao) VALUES ($1, $2, $3, $4, $5)';
    const values = [nome, idade, sexo, tipoSanguineo, dataDoacao];

    await this.pool.query(query, values);
  }

  async obterDoadores(): Promise<QueryResult> {
    const query = 'SELECT id, nome, idade, sexo, tipo_sanguineo, data_doacao FROM donation';

    return this.pool.query(query);
  }
}

export default DoadorRepository;

