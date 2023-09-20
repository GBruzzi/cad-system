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


export const addUser = (req, res) => {
  const q =
    "INSERT INTO usuarios(`name`, `email`, `phone`, `data_nascimento`) VALUES(?)";

  const values = [
    req.body.name,
    req.body.email,
    req.body.phone,
    req.body.data_nascimento,
  ];

  client.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário criado com sucesso.");
  });
};

export const updateUser = (req, res) => {
  const q =
    "UPDATE usuarios SET `name` = ?, `email` = ?, `phone` = ?, `data_nascimento` = ? WHERE `id` = ?";

  const values = [
    req.body.name,
    req.body.email,
    req.body.phone,
    req.body.data_nascimento,
  ];

  client.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário atualizado com sucesso.");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM usuarios WHERE `id` = ?";

  client.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário deletado com sucesso.");
  });
};