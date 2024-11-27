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

    // Validações  
    if (telefone.length > 19) {  
        return res.status(400).json({ error: "O telefone deve ter no máximo 19 caracteres." });  
    }  


    try {  
        await pool.query(  
            "INSERT INTO Usuarios (nif, nome, email, senha, telefone, tipo) VALUES ($1, $2, $3, $4, $5, $6)",  
            [nif, nome, email, senha, telefone, tipo]  
        );  
        res.json({ message: "Usuário criado" });  
    } catch (error) {  
        if(nif ==nif ){
            res.status(400).json({ error: "Usuário já cadastrado" });
        }  
        else{
        console.error('Erro ao criar usuário:', error);  
        res.status(500).json({ error: "Erro ao criar usuário" });  
        }
}
}
async function fetchUsuariosPorRVE(req, res) {
    try {
        const {id} = req.params;
        const query = `
            SELECT 
                rves.Id AS RVE_Id,
                Usuarios.Nif AS Usuario_Nif,
                Usuarios.Nome AS Usuario_Nome
            FROM 
                rves
            JOIN 
                forum ON rves.Id = forum.IdRVE
            JOIN 
                Usuarios ON  forum.Nif = Usuarios.Nif
            WHERE 
                rves.Id = $1
            ORDER BY 
                rves.Id;
        `;
        const result = await pool.query(query, [id]);
        return res.json(result.rows);
    } catch (err) {
        console.error('Erro ao buscar usuários por RVE:', err);
        return res.status(500).json({ error: 'Erro ao buscar usuários por RVE' });
    }
}

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
        const { nif,senha } = req.params;  
        const { rows } = await pool.query("SELECT * FROM Usuarios WHERE nif = $1 AND senha = $2", [nif,senha]);  // Corrigido para Usuarios  
        res.json(rows);  
    } catch (error) {  
        console.error(error);  
        res.status(500).json({ error: "Internal Server Error" });  
    }  
}  


async function UserName(req, res)  {  
    try {  
        const { nome } = req.params;  
        const { rows } = await pool.query("SELECT * FROM Usuarios WHERE nome = $1", [nome]);  // Corrigido para Usuarios  
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
    Login,
fetchUsuariosPorRVE,
    UserName

}