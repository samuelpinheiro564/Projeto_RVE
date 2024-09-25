const pool = require('../config/dbConfig');

app.get("/usuarios", async (req, res) => {
    const { rows } = await pool.query("SELECT * FROM Usuario");
    res.json(rows);
});

app.post("/usuarios", async (req, res) => {
    const { Nome, Email, Senha, Telefone, Tipo } = req.body;
    await pool.query(
        "INSERT INTO Usuario (Nome, Email, Senha, Telefone, Tipo) VALUES ($1, $2, $3, $4, $5)",
        [Nome, Email, Senha, Telefone, Tipo]
    );
    res.json({ message: "Usuario criado" });
});

app.put("/usuarios/:id", async (req, res) => {
    const { id } = req.params;
    const { Nome, Email, Senha, Telefone, Tipo } = req.body;
    await pool.query(
        "UPDATE Usuario SET Nome = $1, Email = $2, Senha = $3, Telefone = $4, Tipo = $5 WHERE id = $6",
        [Nome, Email, Senha, Telefone, Tipo, id]
    );
    res.json({ message: "Usuario atualizado" });
});

app.delete("/usuarios/:id", async (req, res) => {
    const { id } = req.params;
    await pool.query("DELETE FROM Usuario WHERE id = $1", [id]);
    res.json({ message: "Usuario deletado" });
}
);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});