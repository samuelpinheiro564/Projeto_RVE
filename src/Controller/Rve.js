const pool = require('../config/dbConfig');


async function createRveRecord(req, res) {
    const {autor,estudante,curso,turma,data,hora,motivo,orientacoesEstudante ,descricaoOcorrido,docentesEnvolvidos,assinaturas,elogios,dificuldades,presenca} = req.body;
    try {
        const result = await pool.query(
            `INSERT INTO rves (autor,estudante,curso,turma,data,hora,motivo,orientacoesestudante,descricaoOcorrido,docentesEnvolvidos,assinaturas,elogios,dificuldades,presenca)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *`,
            [autor,estudante,curso,turma,data,hora,motivo,orientacoesEstudante,descricaoOcorrido,docentesEnvolvidos,assinaturas,elogios,dificuldades,presenca]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
async function getRveRecords(req, res) {
    try {
        const result = await pool.query("SELECT * FROM rves");
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

async function getRveRecordById(req, res) {
    const { id } = req.params;
    try {
        const result = await pool.query("SELECT * FROM rves WHERE Id = $1", [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Record not found" });
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

async function updateRveRecord(req, res) {
    const { id } = req.params;
    const { autor, estudante, curso, turma, data, hora, motivo, orientacoesEstudante, descricaoOcorrido, docentesEnvolvidos, assinaturas, elogios, dificuldades, presenca } = req.body;
    try {
        const result = await pool.query(
            `UPDATE rves SET autor = $1, estudante = $2, curso = $3, turma = $4, data = $5, hora = $6, motivo = $7, orientacoesEstudante = $8, descricaoOcorrido = $9, docentesEnvolvidos = $10, assinaturas = $11, elogios = $12, dificuldades = $13, presenca = $14 WHERE id = $15 RETURNING *`,
            [autor, estudante, curso, turma, data, hora, motivo, orientacoesEstudante, descricaoOcorrido, docentesEnvolvidos, assinaturas, elogios, dificuldades, presenca, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Record not found" });
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

async function deleteRveRecord(req, res) {
    const { id } = req.params;
    try {
        const result = await pool.query("DELETE FROM rves WHERE Id = $1 RETURNING *", [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Record not found" });
        }
        res.status(200).json({ message: "Record deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = {
    createRveRecord,
    getRveRecords,
    getRveRecordById,
    updateRveRecord,
    deleteRveRecord
};