const pool = require('../config/dbConfig');  

async function createSaidaProfessorRecord(req, res) {  
    const {  
        nomeprofessor,  
        curso,  
        datasaida,  
        horasaida,  
        turma,  
        professorra,  
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
            `INSERT INTO Saida (nomeprofessor, curso, datasaida, horasaida, turma, professorra , maioridade, justificativa, assinaturaAnaq, assinaturaProf) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9,  $10) RETURNING *`,  

            [nomeprofessor, curso, datasaida, horasaida, turma, professorra, maioridade,justificativa, assinaturaAnaq, assinaturaProf]  
        );  
        res.status(201).json(result.rows[0]);  
    } catch (error) {  
        console.error(error);  
        res.status(500).json({ error: "Internal Server Error" });  
    }  
}  

async function createSaidaProfessorRecord(req, res) {
    const { nomeprofessor, curso, datasaida, horasaida, turma, professorra , maioridade, justificativa, assinaturaAnaq, assinaturaProf } = req.body;
    try {
        const result = await pool.query(
          `INSERT INTO Saida (nomeprofessor, curso, datasaida, horasaida, turma, professorra, maioridade, justificativa, assinaturaAnaq, assinaturaProf) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,  
[nomeprofessor, curso, datasaida, horasaida, turma, professorra, maioridade, justificativa, assinaturaAnaq, assinaturaProf]  
        );
        res.status(201).json(result.rows[0]);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }

}


async function getSaidaProfessorRecords(req, res) {  
    try {  
        const result = await pool.query("SELECT * FROM Saida");  
        res.status(200).json(result.rows);  
    } catch (error) {  
        console.error(error);  
        res.status(500).json({ error: "Internal Server Error" });  
    }  
}  

async function getSaidaProfessorRecordById(req, res) {  
    const { id } = req.params;  
    try {  
        const { rows } = await pool.query("SELECT * FROM Saida WHERE id = $1", [id]);  
        res.json(rows);  
    } catch (error) {  
        console.error(error);  
        res.status(500).json({ error: "Internal Server Error" });  
    }  
}  

async function updateSaidaProfessorRecord(req, res) {  
    const { id } = req.params;  
    const {  
        nomeprofessor,  
        curso,  
        datasaida,  
        horasaida,  
        turma,  
        professorra,  
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
            "UPDATE Saida SET nomeprofessor = $1, curso = $2, datasaida = $3, horasaida = $4, turma = $5, professorra = $6, maioridade = $7,justificativa = $8,assinaturaAnaq = $9, assinaturaProf = $10 WHERE id = $11",  
            [nomeprofessor, curso, datasaida, horasaida, turma, professorra, maioridade,justificativa, assinaturaAnaq, assinaturaProf, id]  
        );  
        res.json({ message: "Saida atualizada" });  
    } catch (error) {  
        console.error(error);  
        res.status(500).json({ error: "Internal Server Error" });  
    }  


}  

async function deleteSaidaProfessorRecord(req, res) {  
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
    createSaidaProfessorRecord,  
    getSaidaProfessorRecords,  
    getSaidaProfessorRecordById,  
    updateSaidaProfessorRecord  ,
    deleteSaidaProfessorRecord
};