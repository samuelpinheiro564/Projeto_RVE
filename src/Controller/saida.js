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
        assinaturaanaq,  
        assinaturaprof  
    } = req.body;  

    if (!datasaida) {  
        return res.status(400).json({ error: "Data de saída não pode estar vazia." });  
    }  

    const isMaioridade = typeof maioridade === 'string' ? maioridade === 'true' : maioridade;  

    console.log(req.body);   
    
    try {  
        const result = await pool.query(  
            `INSERT INTO Saida (nomealuno, curso, datasaida, horasaida, turma, alunora, maioridade, justificativa, assinaturaanaq, assinaturaprof) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,  
            [nomealuno, curso, datasaida, horasaida, turma, alunora, maioridade, justificativa, assinaturaanaq, assinaturaprof]  
        );  
        res.status(201).json(result.rows[0]);  
    } catch (error) {  
        console.error(error);  
        res.status(500).json({ error: "Internal Server Error" });  
    }  
}  

async function getAllSaidas(req, res) {  
    try {  
        const result = await pool.query(
            "SELECT * FROM Saida ");  
        res.status(200).json(result.rows);  
    } catch (error) {  
        console.error(error);  
        res.status(500).json({ error: "Internal Server Error" });  
    }  
}  

async function getUltimasSaidas(req, res) {
    try {
        const result = await pool.query("SELECT * FROM Saida ORDER BY datasaida DESC, horasaida DESC");
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

async function getPrimeirasSaidas(req, res) {
    try {
        const result = await pool.query("SELECT * FROM Saida ORDER BY datasaida ASC, horasaida ASC");
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}



async function getUltimaSaida(req, res) {
    try {
        const result = await pool.query("SELECT * FROM Saida WHERE nomealuno IS NOT NULL AND curso IS NOT NULL AND datasaida IS NOT NULL AND horasaida IS NOT NULL AND alunora IS NOT NULL AND justificativa IS NOT NULL AND maioridade IS NOT NULL AND assinaturaanaq IS NOT NULL AND assinaturaprof IS NOT NULL ORDER BY datasaida DESC, horasaida DESC LIMIT 1");
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
        assinaturaanaq,  
        assinaturaprof  
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
            "UPDATE Saida SET nomealuno = $1, curso = $2, datasaida = $3, horasaida = $4, turma = $5, alunora = $6, maioridade = $7, justificativa = $8, assinaturaanaq = $9, assinaturaprof = $10 WHERE id = $11",  
            [nomealuno, curso, datasaida, horasaida, turma, alunora, maioridade, justificativa, assinaturaanaq, assinaturaprof, id]  
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
async function MenorIdade(req, res) {
        const result = await pool.query("SELECT * FROM Saida WHERE maioridade = false AND (assinaturaprof IS NULL OR assinaturaanaq IS NULL)");
        res.status(200).json(result.rows);
}
async function postAssinaturaAnaq(req, res) {
    try {
        const { id } = req.params;
        const { assinaturaanaq } = req.body; // Desestruture diretamente do objeto
        const result = await pool.query("UPDATE Saida SET assinaturaanaq = $1 WHERE id = $2", [assinaturaanaq, id]);
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}


async function postAssinaturaProf(req, res) {
    try {
        const {id} = req.params;
        const [assinaturaProf] = req.body;
        const result = await pool.query("UPDATE assinaturaProf SET assinaturaProf = $1 WHERE id = $2", [assinaturaProf, id]);
    }catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }}

module.exports = {  
    postAssinaturaProf,
    postAssinaturaAnaq,
    createSaidaRecord,
    MenorIdade, 
    getUltimasSaidas, 
    getAllSaidas,  
    getSaidaRecordById,  
    updateSaidaRecord,
    deleteSaidaRecord,
    getPrimeirasSaidas,
    getUltimaSaida
}
