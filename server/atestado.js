



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

app.post("/atestados", async (req, res) => {
    const { NomeAluno, Curso, Turma, ImagemAtestado, RA, CID, DataInicio, DataFim, AssinaturaAnaq, AssinaturaProf1, AssinaturaProf2, AssinaturaProf3, AssinaturaProf4 } = req.body;
    try {
        const result = await pool.query(
            "INSERT INTO Atestado (NomeAluno, Curso, Turma, ImagemAtestado, RA, CID, DataInicio, DataFim, AssinaturaAnaq, AssinaturaProf1, AssinaturaProf2, AssinaturaProf3, AssinaturaProf4) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *",
            [NomeAluno, Curso, Turma, ImagemAtestado, RA, CID, DataInicio, DataFim, AssinaturaAnaq, AssinaturaProf1, AssinaturaProf2, AssinaturaProf3, AssinaturaProf4]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get("/atestados", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM Atestado");
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get("/atestados/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query("SELECT * FROM Atestado WHERE Id = $1", [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Atestado not found" });
        }
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put("/atestados/:id", async (req, res) => {
    const { id } = req.params;
    const { NomeAluno, Curso, Turma, ImagemAtestado, RA, CID, DataInicio, DataFim, AssinaturaAnaq, AssinaturaProf1, AssinaturaProf2, AssinaturaProf3, AssinaturaProf4 } = req.body;
    try {
        const result = await pool.query(
            "UPDATE Atestado SET NomeAluno = $1, Curso = $2, Turma = $3, ImagemAtestado = $4, RA = $5, CID = $6, DataInicio = $7, DataFim = $8, AssinaturaAnaq = $9, AssinaturaProf1 = $10, AssinaturaProf2 = $11, AssinaturaProf3 = $12, AssinaturaProf4 = $13 WHERE Id = $14 RETURNING *",
            [NomeAluno, Curso, Turma, ImagemAtestado, RA, CID, DataInicio, DataFim, AssinaturaAnaq, AssinaturaProf1, AssinaturaProf2, AssinaturaProf3, AssinaturaProf4, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Atestado not found" });
        }
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete("/atestados/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query("DELETE FROM Atestado WHERE Id = $1 RETURNING *", [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Atestado not found" });
        }
        res.status(200).json({ message: "Atestado deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
