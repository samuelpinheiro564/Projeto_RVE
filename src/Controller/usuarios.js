const pool = require('../config/dbConfig');

async function AllUser(req, res)  {
    const { rows } = await pool.query("SELECT * FROM Usuarios");
    res.json(rows);
};

async function CreateUser (req, res)  {
    const { Nome, Email, Senha, Telefone, Tipo } = req.body;
    await pool.query(
        "INSERT INTO Usuarios (Nome, Email, Senha, Telefone, Tipo) VALUES ($1, $2, $3, $4, $5)",
        [Nome, Email, Senha, Telefone, Tipo]
    );
    res.json({ message: "Usuario criado" });
};

 async function AtualizaUser (req, res)  {
    const { id } = req.params;
    const { Nome, Email, Senha, Telefone, Tipo } = req.body;
    await pool.query(
        "UPDATE Usuario SET Nome = $1, Email = $2, Senha = $3, Telefone = $4, Tipo = $5 WHERE id = $6",
        [Nome, Email, Senha, Telefone, Tipo, id]
    );
    res.json({ message: "Usuario atualizado" });
};

async function DeleteUSer (req, res)  {
    const { id } = req.params;
    await pool.query("DELETE FROM Usuario WHERE id = $1", [id]);
    res.json({ message: "Usuario deletado" });
};
async function GetUserById (req, res)  {
    const { id } = req.params;
    const { rows } = await pool.query("SELECT * FROM Usuario WHERE id = $1", [id]);
    res.json(rows);
}

module.exports = {
    DeleteUSer,
    AtualizaUser,
    CreateUser,
    AllUser,
    GetUserById
}