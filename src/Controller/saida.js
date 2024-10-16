const pool = require('../config/dbConfig');  

async function createSaidaRecord(req, res) {  
    const {  
        nomealuno,  
        curso,  
        datasaida,  
        horasaida,  
        turma,  
        alunora,  
        maioridade,  
        assinaturaanaq,  
        assinaturaprof  
    } = req.body;  

    // Verifica se a data foi fornecida  
    if (!datasaida) {  
        return res.status(400).json({ error: "Data de saída não pode estar vazia." });  
    }  

    // Verifica se a data é uma string válida  
    const datePattern = /^\d{4}-\d{2}-\d{2}$/; // Formato YYYY-MM-DD  
    if (!datePattern.test(datasaida)) {  
        return res.status(400).json({ error: "Data de saída deve estar no formato YYYY-MM-DD." });  
    }  

    const isMaioridade = typeof maioridade === 'string' ? maioridade === 'true' : maioridade;  

    console.log(req.body);   
    
    try {  
        const result = await pool.query(  
            `INSERT INTO Saida (nomealuno, curso, datasaida, horasaida, turma, alunora, maioridade, assinaturaanaq, assinaturaprof) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,  
            [nomealuno, curso, datasaida, horasaida, turma, alunora, isMaioridade, assinaturaanaq, assinaturaprof]  
        );  
        res.status(201).json(result.rows[0]);  
    } catch (error) {  
        console.error(error);  
        res.status(500).json({ error: "Internal Server Error" });  
    }  
}  

async function getSaidaRecords(req, res) {  
    try {  
        const result = await pool.query("SELECT * FROM Saida");  
        res.status(200).json(result.rows);  
    } catch (error) {  
        console.error(error);  
        res.status(500).json({ error: "Internal Server Error" });  
    }  
}  

async function getSaidaRecordById(req, res) {  
    const { id } = req.params;  
    try {  
        const { rows } = await pool.query("SELECT * FROM Saida WHERE id = $1", [id]);  
        res.json(rows);  
    } catch (error) {  
        console.error(error);  
        res.status(500).json({ error: "Internal Server Error" });  
    }  
}  

async function updateSaidaRecord(req, res) {  
    const { id } = req.params;  
    const {  
        nomealuno,  
        curso,  
        datasaida,  
        horasaida,  
        turma,  
        alunora,  
        maioridade,  
        assinaturaanaq,  
        assinaturaprof  
    } = req.body;  

    // Validação de dados atualizados, especialmente a data  
    if (!datasaida) {  
        return res.status(400).json({ error: "Data de saída não pode estar vazia." });  
    }  

    const datePattern = /^\d{4}-\d{2}-\d{2}$/; // Formato YYYY-MM-DD  
    if (!datePattern.test(datasaida)) {  
        return res.status(400).json({ error: "Data de saída deve estar no formato YYYY-MM-DD." });  
    }  

    try {  
        await pool.query(  
            "UPDATE Saida SET nomealuno = $1, curso = $2, datasaida = $3, horasaida = $4, turma = $5, alunora = $6, maioridade = $7, assinaturaanaq = $8, assinaturaprof = $9 WHERE id = $10",  
            [nomealuno, curso, datasaida, horasaida, turma, alunora, maioridade, assinaturaanaq, assinaturaprof, id]  
        );  
        res.json({ message: "Saida atualizada" });  
    } catch (error) {  
        console.error(error);  
        res.status(500).json({ error: "Internal Server Error" });  
    }  


}  

async function deleteSaidaRecord(req, res) {  
    const { id } = req.params;  
    try {  
        await pool.query("DELETE FROM Saida WHERE id = $1", [id]);  
        res.json({ message: "Saida deletada" });  
    } catch (error) {  
        console.error(error);  
        res.status(500).json({ error: "Internal Server Error" });  
    }
}

module.exports = {  
    createSaidaRecord,  
    getSaidaRecords,  
    getSaidaRecordById,  
    updateSaidaRecord  ,
    deleteSaidaRecord
};