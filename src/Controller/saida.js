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

app.post("/saida", async (req, res) => {
    const { NomeAluno, Curso, DataSaida, HoraSaida, Turma, AlunoRA, MaiorIdade, LiberadoSec, AssinaturaAnaq, AssinaturaProf } = req.body;
    try {
        const result = await pool.query(
            "INSERT INTO Saida (NomeAluno, Curso, DataSaida, HoraSaida, Turma, AlunoRA, MaiorIdade, LiberadoSec, AssinaturaAnaq, AssinaturaProf) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
            [NomeAluno, Curso, DataSaida, HoraSaida, Turma, AlunoRA, MaiorIdade, LiberadoSec, AssinaturaAnaq, AssinaturaProf]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get("/saida", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM Saida");
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get("/saida/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query("SELECT * FROM Saida WHERE id = $1", [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Item not found" });
        }
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put("/saida/:id", async (req, res) => {
    const { id } = req.params;
    const { NomeAluno, Curso, DataSaida, HoraSaida, Turma, AlunoRA, MaiorIdade, LiberadoSec, AssinaturaAnaq, AssinaturaProf } = req.body;
    try {
        const result = await pool.query(
            "UPDATE Saida SET NomeAluno = $1, Curso = $2, DataSaida = $3, HoraSaida = $4, Turma = $5, AlunoRA = $6, MaiorIdade = $7, LiberadoSec = $8, AssinaturaAnaq = $9, AssinaturaProf = $10 WHERE id = $11 RETURNING *",
            [NomeAluno, Curso, DataSaida, HoraSaida, Turma, AlunoRA, MaiorIdade, LiberadoSec, AssinaturaAnaq, AssinaturaProf, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Item not found" });
        }
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete("/saida/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query("DELETE FROM Saida WHERE id = $1 RETURNING *", [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Item not found" });
        }
        res.status(200).json({ message: "Item deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
