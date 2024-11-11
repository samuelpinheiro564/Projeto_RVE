const pool = require('../config/dbConfig');

async function CreateCampoTexto(req, res) {
    const { id,IdRVE,data,hora,nifUsuario,campotexto } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO CampoTexto (id,IdRVE,data,hora,nifUsuario,campotexto) VALUES ($1, $2,$3,$4,$5,$6) RETURNING *',
            [id,IdRVE,data,hora,nifUsuario,campotexto]
        );
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
async function GetAllCampoTexto(req, res) {
    try {
        const result = await pool.query('SELECT * FROM CampoTexto');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
async function getCampostextoRve(req, res) {
    const idrve = parseInt(req.params);
    const response = await pool.query("SELECT ct.Id, ct.nifUsuario,ct.CampoTexto FROM  Forum f JOIN CampoTexto ct ON f.IdCampoTexto = ct.Id WHERE  f.IdRVE = $1;", [idrve]);
    res.json(response.rows);
}

async function getCampoTextoByRve(req, res) {
    const {IdRVE} = req.params
    const response = await pool.query("SELECT * FROM CampoTexto WHERE IdRVE = $1", [IdRVE]);
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
    CreateCampoTexto,
    GetAllCampoTexto,
    getCampoTextoByRve,
    updateCampoTexto,
    deleteCampoTexto,
    getCampostextoRve
};
