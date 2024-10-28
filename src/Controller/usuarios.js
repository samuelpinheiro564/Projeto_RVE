const pool = require('../config/dbConfig');

async function AllUser(req, res)  {
try {
    const { rows } = await pool.query("SELECT * FROM Usuarios");
    res.json(rows);
}
catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
}
};

async function CreateUser (req, res)  {
    const {nif,nome,email,senha,telefone,tipo} = req.body;
    await pool.query(
        "INSERT INTO Usuarios (nif,nome,email,senha,telefone,tipo) VALUES ($1,$2,$3,$4,$5,$6)",
        [nif,nome,email,senha,telefone,tipo]
    );
    res.json({ message: "Usuario criado" });
};

 async function AtualizaUser (req, res)  {
    const { nif } = req.params;
    const { nome, email, senha,telefone,tipo} = req.body;
    await pool.query(
        "UPDATE Usuarios SET nome = $1, email = $2, senha = $3, telefone = $4, tipo = $5 WHERE nif = $6",
        [nome, email, senha, telefone, tipo, nif]
    );
    res.json({ message: "Usuario atualizado" });
};

async function DeleteUSer (req, res)  {
    const { nif } = req.params;
    await pool.query("DELETE FROM Usuarios WHERE nif = $1", [nif]);
    res.json({ message: "Usuario deletado" });
};
async function Login(req, res) {  
    try {  
        const { nif } = req.params;  
        const { rows } = await pool.query("SELECT * FROM usuarios WHERE nif = $1", [nif]);  
        
        // Verificar se o array rows está vazio  
        if (rows.length === 0) {  
            // Retornar uma resposta indicando que nenhum usuário foi encontrado  
            return res.status(404).json({ message: "Usuário não encontrado" });  
        }  

        // Retornar os dados do usuário se encontrado  
        res.json(rows);  
    } catch (error) {  
        console.error(error);  
        // Retornar uma resposta de erro genérica  
        res.status(500).json({ message: "Ocorreu um erro no servidor" });  
    }  
}  
module.exports = {
    DeleteUSer,
    AtualizaUser,
    CreateUser,
    AllUser,
    Login
}