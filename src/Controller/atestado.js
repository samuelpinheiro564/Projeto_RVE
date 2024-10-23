const pool = require('../config/dbConfig');  

async function createAtestado(req, res) {  
    const {  
        aluno,curso,turma,ra,data_inicial,data_final,justificativa,imagem,cid
    } = req.body;  

    try {  
        const result = await pool.query(  
            "INSERT INTO atestados (aluno,curso,turma,ra,data_inicial,data_final,justificativa,imagem,cid) VALUES ($1, $2, $3, $4, $5, $6, $7, $8,$9) RETURNING *",  
            [aluno,curso,turma,ra,data_inicial,data_final,justificativa,imagem,cid]  
        );  
        res.status(201).json(result.rows[0]);  
    } catch (err) {  
        res.status(500).json({ error: err.message });  
    }  
}  

async function getAtestados(req, res) {  
    try {  
        const result = await pool.query("SELECT * FROM atestados");  
        res.status(200).json(result.rows);  
    } catch (err) {  
        res.status(500).json({ error: err.message });  
    }  
}  

async function getAtestadoById(req, res) {  
    const { id } = req.params;  
    try {  
        const result = await pool.query("SELECT * FROM atestados WHERE id = $1", [id]);  
        if (result.rows.length === 0) {  
            return res.status(404).json({ error: "Atestado not found" });  
        }  
        res.status(200).json(result.rows[0]);  
    } catch (err) {  
        res.status(500).json({ error: err.message });  
    }  
}  

async function updateAtestado(req, res) {  
    const { id } = req.params;  
    const {  
        aluno,  
        curso,  
        turma,  
        imagem,  
        ra,  
        cid,  
        data_inicial,  
        data_final  
    } = req.body;  

    try {  
        const result = await pool.query(  
            "UPDATE atestados SET aluno = $1, curso = $2, turma = $3, imagem = $4, ra = $5, cid = $6, data_inicial = $7, data_final = $8 WHERE id = $9 RETURNING *",  
            [aluno, curso, turma, imagem, ra, cid, data_inicial, data_final, id]  
        );  
        if (result.rows.length === 0) {  
            return res.status(404).json({ error: "Atestado not found" });  
        }  
        res.status(200).json(result.rows[0]);  
    } catch (err) {  
        res.status(500).json({ error: err.message });  
    }  
}  

async function deleteAtestado(req, res) {  
    const { id } = req.params;  
    try {  
        const result = await pool.query("DELETE FROM atestados WHERE id = $1 RETURNING *", [id]);  
        if (result.rows.length === 0) {  
            return res.status(404).json({ error: "Atestado not found" });  
        }  
        res.status(200).json({ message: "Atestado deleted successfully" });  
    } catch (err) {  
        res.status(500).json({ error: err.message });  
    }  
}  

module.exports = {  
    createAtestado,  
    getAtestados,  
    getAtestadoById,  
    updateAtestado,  
    deleteAtestado  
};