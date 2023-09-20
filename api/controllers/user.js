import client from "../database/db.js";

export const getUsers = async (_, res) => {
  try {
    const q = 'SELECT * FROM usuarios';
    const result = await client.query(q);
    const users = result.rows; // Apenas os dados dos usuários

    return res.status(200).json(users);
  } catch (error) {
    console.error('Erro ao consultar o banco de dados:', error);
    return res.status(500).json({ error: 'Erro ao consultar o banco de dados.' });
  }
};


export const addUser = async (req, res) => {
  try {

    const q =
      "INSERT INTO usuarios(name, email, phone, data_nascimento) VALUES($1, $2, $3, $4)";

    const values = [
      req.body.name,
      req.body.email,
      req.body.phone,
      req.body.data_nascimento,
    ];

    // Use o cliente PostgreSQL para executar a consulta
    await client.query(q, values);

    return res.status(200).json("Usuário criado com sucesso.");
  } catch (err) {
    console.error("Erro ao adicionar usuário:", err);
    return res.status(500).json("Ocorreu um erro ao adicionar o usuário.");
  }
};


export const updateUser = async (req, res) => {
  try {

    const q =
      "UPDATE usuarios SET name = $1, email = $2, phone = $3, data_nascimento = $4 WHERE id = $5";

    const values = [
      req.body.name,
      req.body.email,
      req.body.phone,
      req.body.data_nascimento,
      req.params.id,
    ];

    // Use o cliente PostgreSQL para executar a consulta
    await client.query(q, values);

    return res.status(200).json("Usuário atualizado com sucesso.");
  } catch (err) {
    console.error("Erro ao atualizar usuário:", err);
    return res.status(500).json("Ocorreu um erro ao atualizar o usuário.");
  }
};


export const deleteUser = async (req, res) => {
  try {
    const q = "DELETE FROM usuarios WHERE id = $1";

    const values = [req.params.id];

    // Usar o cliente PostgreSQL para executar a consulta
    await client.query(q, values);

    return res.status(200).json("Usuário deletado com sucesso.");
  } catch (err) {
    console.error("Erro ao deletar usuário:", err);
    return res.status(500).json("Ocorreu um erro ao deletar o usuário.");
  }
};
