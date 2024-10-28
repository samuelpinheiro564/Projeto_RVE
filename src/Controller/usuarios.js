const pool = require('../config/dbConfig');  

async function AllUsers(req, res)  {  // Corrigido para AllUsers  
    try {  
        const { rows } = await pool.query("SELECT * FROM Usuarios");  
        res.json(rows);  
    }  
    catch (error) {  
        console.error(error);  
        res.status(500).json({ error: "Internal Server Error" });  
    }  
};  

async function CreateUser(req, res) {  
    const { nif, nome, email, senha, telefone, tipo } = req.body;  

    console.log('Dados recebidos:', { nif, nome, email, senha, telefone, tipo });  

    try {  
        await pool.query(  
            "INSERT INTO Usuarios (nif, nome, email, senha, telefone, tipo) VALUES ($1, $2, $3, $4, $5, $6)",  
            [nif, nome, email, senha, telefone, tipo]  
        );  
        res.json({ message: "Usuário criado" });  
    } catch (error) {  
        console.error('Erro ao criar usuário:', error);  
        res.status(500).json({ error: "Erro ao criar usuário" });  
    }  
};

async function AtualizaUser(req, res) {
    const { nif } = req.params;
    const { nome, email, senha, telefone, tipo } = req.body;

    console.log('Dados recebidos:', { nif, nome, email, senha, telefone, tipo });

    try {
        await pool.query(
            "UPDATE Usuarios SET nome = $1, email = $2, senha = $3, telefone = $4, tipo = $5 WHERE nif = $6",
            [nome, email, senha, telefone, tipo, nif]
        );
        res.json({ message: "Usuário atualizado" });
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
        res.status(500).json({ error: "Erro ao atualizar usuário" });
    }
}



async function DeleteUser(req, res) {
    const { nif } = req.params;

    console.log('Dados recebidos:', { nif });

    try {
        await pool.query(
            "DELETE FROM Usuarios WHERE nif = $1",
            [nif]
        );
        res.json({ message: "Usuário deletado" });
    } catch (error) {
        console.error('Erro ao deletar usuário:', error);
        res.status(500).json({ error: "Erro ao deletar usuário" });
    }
}



async function Login(req, res)  {  
    try {  
        const { nif } = req.params;  
        const { rows } = await pool.query("SELECT * FROM Usuarios WHERE nif = $1", [nif]);  // Corrigido para Usuarios  
        res.json(rows);  
    } catch (error) {  
        console.error(error);  
        res.status(500).json({ error: "Internal Server Error" });  
    }  
}  

module.exports = {  
    DeleteUser,  
    AtualizaUser,  
    CreateUser,  
    AllUsers,   
    Login  
}