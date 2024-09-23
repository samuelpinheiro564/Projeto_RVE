const express = require("express");
const { Pool } = require("pg");

const app = express();
const PORT = 3000;

app.use(express.json());

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "RVE",
    password: "ds564",
    port: 4040,
});



async function createRveRecord(req, res) {
    const { Autor, Estudante, Curso, Turma, Data, Hora, Motivo, OrientaçõesEstudante, DescricaoOcorrido, DocentesEnvolvidos, Assinaturas, Elogios, Dificuldades, Presença } = req.body;
    try {
        const result = await pool.query(
            `INSERT INTO RVE (Autor, Estudante, Curso, Turma, Data, Hora, Motivo, OrientaçõesEstudante, DescricaoOcorrido, DocentesEnvolvidos, Assinaturas, Elogios, Dificuldades, Presença)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *`,
            [Autor, Estudante, Curso, Turma, Data, Hora, Motivo, OrientaçõesEstudante, DescricaoOcorrido, DocentesEnvolvidos, Assinaturas, Elogios, Dificuldades, Presença]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
async function getRveRecords(req, res) {
    try {
        const result = await pool.query("SELECT * FROM RVE");
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

async function getRveRecordById(req, res) {
    const { id } = req.params;
    try {
        const result = await pool.query("SELECT * FROM RVE WHERE Id = $1", [id]);
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
    const { Autor, Estudante, Curso, Turma, Data, Hora, Motivo, OrientaçõesEstudante, DescricaoOcorrido, DocentesEnvolvidos, Assinaturas, Elogios, Dificuldades, Presença } = req.body;
    try {
        const result = await pool.query(
            `UPDATE RVE SET Autor = $1, Estudante = $2, Curso = $3, Turma = $4, Data = $5, Hora = $6, Motivo = $7, OrientaçõesEstudante = $8, DescricaoOcorrido = $9, DocentesEnvolvidos = $10, Assinaturas = $11, Elogios = $12, Dificuldades = $13, Presença = $14 WHERE Id = $15 RETURNING *`,
            [Autor, Estudante, Curso, Turma, Data, Hora, Motivo, OrientaçõesEstudante, DescricaoOcorrido, DocentesEnvolvidos, Assinaturas, Elogios, Dificuldades, Presença, id]
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
        const result = await pool.query("DELETE FROM RVE WHERE Id = $1 RETURNING *", [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Record not found" });
        }
        res.status(200).json({ message: "Record deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

app.get("/rve", getRveRecords);
app.get("/rve/:id", getRveRecordById);
app.put("/rve/:id", updateRveRecord);
app.delete("/rve/:id", deleteRveRecord);
app.post("/rve", createRveRecord);

app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`);
});
