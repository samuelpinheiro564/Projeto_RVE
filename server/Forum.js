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


app.post("/forum", async (req, res) => {
    const { IdRVE, IDCampoTexto } = req.body;
    try {
        const result = await pool.query(
            "INSERT INTO Forum (IdRVE, IDCampoTexto) VALUES ($1, $2) RETURNING *",
            [IdRVE, IDCampoTexto]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
);

app.get("/forum", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM Forum");
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
);


app.get("/forum/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query("SELECT * FROM Forum WHERE Id = $1", [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Registro não encontrado" });
        }
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
);



app.put("/forum/:id", async (req, res) => {
    const { id } = req.params;
    const { IdRVE, IDCampoTexto } = req.body;
    try {
        const result = await pool.query(
            "UPDATE Forum SET IdRVE = $1, IDCampoTexto = $2 WHERE Id = $3 RETURNING *",
            [IdRVE, IDCampoTexto, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Registro não encontrado" });
        }
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
);



app.delete("/forum/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query("DELETE FROM Forum WHERE Id = $1 RETURNING *", [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Registro não encontrado" });
        }
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
);



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
