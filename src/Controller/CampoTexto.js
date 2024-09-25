const pool = require('../config/dbConfig');

async function createCampoTexto(req, res) {
    const { niftextodocente, texto, assinado } = req.body;
    const response = await pool.query(
        "INSERT INTO CampoTexto (niftextodocente, texto, assinado) VALUES ($1, $2, $3)",
        [niftextodocente, texto, assinado]
    );
    res.json({
        message: "CampoTexto Added successfully",
        body: {
            CampoTexto: { niftextodocente, texto, assinado }
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
    const { niftextodocente, texto, assinado } = req.body;

    const response = await pool.query(
        "UPDATE CampoTexto SET niftextodocente = $1, texto = $2, assinado = $3 WHERE Id = $4",
        [niftextodocente, texto, assinado, Id]
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

module.exports = {
    createCampoTexto,
    getCampoTexto,
    getCampoTextoById,
    updateCampoTexto,
    deleteCampoTexto
};
