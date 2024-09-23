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



app.post("/CampoTexto", async (req, res) => {
    const { NifTextoDocente, Texto, Assinado } = req.body;
    try {
        const result = await pool.query(
            "INSERT INTO CampoTexto (NifTextoDocente, Texto, Assinado) VALUES ($1, $2, $3) RETURNING *",
            [NifTextoDocente, Texto, Assinado]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
);


app.get("/CampoTexto", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM CampoTexto");
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.get("/CampoTexto/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query("SELECT * FROM CampoTexto WHERE Id = $1", [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Registro não encontrado" });
        }
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
);


app.put("/CampoTexto/:id", async (req, res) => {
    const { id } = req.params;
    const { NifTextoDocente, Texto, Assinado } = req.body;
    try {
        const result = await pool.query(
            "UPDATE CampoTexto SET NifTextoDocente = $1, Texto = $2, Assinado = $3 WHERE Id = $4 RETURNING *",
            [NifTextoDocente, Texto, Assinado, id]
        );
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
);


app.delete("/CampoTexto/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query("DELETE FROM CampoTexto WHERE Id = $1", [id]);
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});