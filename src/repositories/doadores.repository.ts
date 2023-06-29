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

  async editarDoador(id: string, nome: string, idade: number, sexo: string, tipoSanguineo: string, dataDoacao: Date) {
    const query = 'UPDATE donation SET nome = $1, idade = $2, sexo = $3, tipo_sanguineo = $4, data_doacao = $5 WHERE id = $6';
    const values = [nome, idade, sexo, tipoSanguineo, dataDoacao, id];

    await this.pool.query(query, values);
  }

  async excluirDoador(id: string) {
    const query = 'DELETE FROM donation WHERE id = $1';
    const values = [id];

    await this.pool.query(query, values);
  }
  async obterDoadorPorId(id: string) {
    const query = 'SELECT * FROM donation WHERE id = $1';
    const values = [id];

    const { rows } = await this.pool.query(query, values);
    return rows[0];
  }

}

export default DoadorRepository;

