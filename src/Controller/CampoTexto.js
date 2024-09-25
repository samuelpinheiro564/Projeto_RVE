const pool = require('../config/dbConfig');

async function createCampoTexto(req, res) {
    const { NifTextoDocente, Texto, Assinado } = req.body;
    const response = await pool.query(
        "INSERT INTO CampoTexto (NifTextoDocente, Texto, Assinado) VALUES ($1, $2, $3)",
        [NifTextoDocente, Texto, Assinado]
    );
    res.json({
        message: "CampoTexto Added successfully",
        body: {
            CampoTexto: { NifTextoDocente, Texto, Assinado }
        },
    });
}

async function getCampoTexto(req, res) {
    const response = await pool.query("SELECT * FROM CampoTexto");
    res.status(200).json(response.rows);
}

async function getCampoTextoById(req, res) {
    const Id = parseInt(req.params.Id);
    const response = await pool.query("SELECT * FROM CampoTexto WHERE Id = $1", [Id]);
    res.json(response.rows);
}

async function updateCampoTexto(req, res) {
    const Id = parseInt(req.params.Id);
    const { NifTextoDocente, Texto, Assinado } = req.body;

    const response = await pool.query(
        "UPDATE CampoTexto SET NifTextoDocente = $1, Texto = $2, Assinado = $3 WHERE Id = $4",
        [NifTextoDocente, Texto, Assinado, Id]
    );
    res.json("CampoTexto Updated Successfully");
}


async function deleteCampoTexto(req, res) {
    const Id = parseInt(req.params.Id);
    await pool.query("DELETE FROM CampoTexto where Id = $1", [
        Id
    ]);
    res.json(`CampoTexto ${Id} deleted Successfully`);
}


app.post("/CampoTexto", createCampoTexto);
app.get("/CampoTexto", getCampoTexto);
app.get("/CampoTexto/:Id", getCampoTextoById);
app.put("/CampoTexto/:Id", updateCampoTexto);
app.delete("/CampoTexto/:Id", deleteCampoTexto);



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});