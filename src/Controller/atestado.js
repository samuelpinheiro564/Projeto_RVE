const pool = require('../config/dbConfig');

const createAtestado = async (req, res) => {
    const { nome_aluno, turma, curso, data_inicial, data_final, imagem, cid } = req.body;
  
    try {
      const result = await pool.query(
        `INSERT INTO atestado (nome_aluno, turma, curso, data_inicial, data_final, imagem, cid) 
        VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
        [nome_aluno, turma, curso, data_inicial, data_final, imagem, cid]
      );
  
      res.status(201).json(result.rows[0]);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao criar atestado' });
    }
  };
  
async function getAtestados(req, res) {
    try {
        const result = await pool.query("SELECT * FROM atestado");
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function getAtestadoById(req, res) {
    const { id } = req.params;
    try {
        const result = await pool.query("SELECT * FROM atestado WHERE id = $1", [id]);
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
        nome_aluno, turma, curso, data_inicial, data_final, imagem,cid
    } = req.body;

    try {
        const result = await pool.query(
            "UPDATE atestado SET anome_aluno = $1, turma = $2, curso = $3, data_inicial = $4, data_final = $5, imagem = $6, cid = $7 WHERE id = $8 RETURNING *",
            [nome_aluno, turma, curso, data_inicial, data_final, imagem,cid,id]
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
        const result = await pool.query("DELETE FROM atestado WHERE id = $1 RETURNING *", [id]);
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