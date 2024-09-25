const pool = require('../config/dbConfig');


async function createSaidaRecord(req, res) {
    const { NomeALuno, Curso, DataSaida, HoraSaida, Turma, AlunoRA, MaiorIdade, LiberadoSec, AssinaturaAnaq, AssinaturaProf } = req.body;
    try {
        const result = await pool.query(
            `INSERT INTO Saida (NomeALuno, Curso, DataSaida, HoraSaida, Turma, AlunoRA, MaiorIdade, LiberadoSec, AssinaturaAnaq, AssinaturaProf)  VALUES ($1, $2, $3, $4, $5, $6, $ 7, $8, $9, $10) RETURNING *`,
            [NomeALuno, Curso, DataSaida, HoraSaida, Turma, AlunoRA, MaiorIdade, LiberadoSec, AssinaturaAnaq, AssinaturaProf]
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
        const result = await pool.query("SELECT * FROM Saida WHERE Id = $1", [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Record not found" });
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

async function updateSaidaRecord(req, res) {
    const { id } = req.params;
    const { NomeALuno, Curso, DataSaida, HoraSaida, Turma, AlunoRA, MaiorIdade, LiberadoSec , AssinaturaAnaq, AssinaturaProf } = req.body;
    try {
        const result = await pool.query(
            `UPDATE Saida SET NomeALuno = $1, Curso = $2, DataSaida = $3, HoraSaida = $4, Turma = $5, AlunoRA = $6, MaiorIdade = $7, LiberadoSec = $8, AssinaturaAnaq = $9, AssinaturaProf = $10 WHERE Id = $11 RETURNING *`,
            [NomeALuno, Curso, DataSaida, HoraSaida, Turma, AlunoRA, MaiorIdade, LiberadoSec, AssinaturaAnaq, AssinaturaProf, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Record not found" });
        }
        res.status(200).json(result.rows[0]);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

app.post("/saida", createSaidaRecord);
app.get("/saida", getSaidaRecords);
app.get("/saida/:id", getSaidaRecordById);
app.put("/saida/:id", updateSaidaRecord);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
