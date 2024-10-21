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
        justificativa,
        assinaturaAnaq,  
        assinaturaProf  
    } = req.body;  

    if (!datasaida) {  
        return res.status(400).json({ error: "Data de saída não pode estar vazia." });  
    }  

    const datePattern = /^\d{4}-\d{2}-\d{2}$/; 
    if (!datePattern.test(datasaida)) {  
        return res.status(400).json({ error: "Data de saída deve estar no formato YYYY-MM-DD." });  
    }  

    const isMaioridade = typeof maioridade === 'string' ? maioridade === 'true' : maioridade;  

    console.log(req.body);   
    
    try {  
        const result = await pool.query(  
            `INSERT INTO Saida (nomealuno, curso, datasaida, horasaida, turma, alunora , maioridade, justificativa, assinaturaAnaq, assinaturaProf) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9,  $10) RETURNING *`,  

            [nomealuno, curso, datasaida, horasaida, turma, alunora, maioridade,justificativa, assinaturaAnaq, assinaturaProf]  
        );  
        res.status(201).json(result.rows[0]);  
    } catch (error) {  
        console.error(error);  
        res.status(500).json({ error: "Internal Server Error" });  
    }  
}  

async function createSaidaRecord(req, res) {
    const { nomealuno, curso, datasaida, horasaida, turma, alunora , maioridade, justificativa, assinaturaAnaq, assinaturaProf } = req.body;
    try {
        const result = await pool.query(
          `INSERT INTO Saida (nomealuno, curso, datasaida, horasaida, turma, alunora, maioridade, justificativa, assinaturaAnaq, assinaturaProf) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,  
[nomealuno, curso, datasaida, horasaida, turma, alunora, maioridade, justificativa, assinaturaAnaq, assinaturaProf]  
        );
        res.status(201).json(result.rows[0]);
    }
    catch (error) {
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
        justificativa,
        assinaturaAnaq,  
        assinaturaProf  
    } = req.body;  

    if (!datasaida) {  
        return res.status(400).json({ error: "Data de saída não pode estar vazia." });  
    }  

    const datePattern = /^\d{4}-\d{2}-\d{2}$/;   
    if (!datePattern.test(datasaida)) {  
        return res.status(400).json({ error: "Data de saída deve estar no formato YYYY-MM-DD." });  
    }  

    try {  
        await pool.query(  
            "UPDATE Saida SET nomealuno = $1, curso = $2, datasaida = $3, horasaida = $4, turma = $5, alunora = $6, maioridade = $7,justificativa = $8,assinaturaAnaq = $9, assinaturaProf = $10 WHERE id = $11",  
            [nomealuno, curso, datasaida, horasaida, turma, alunora, maioridade,justificativa, assinaturaAnaq, assinaturaProf, id]  
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