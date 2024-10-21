const pool = require('../config/dbConfig');

async function CreateCampoTexto(req, res) {
    const { id,nifusuario,campotexto } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO CampoTexto (id,nifusuario,campotexto) VALUES ($1, $2,$3) RETURNING *',
            [id,nifusuario,campotexto]
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
    const IdRVE = parseInt(req.params.IdRVE);
    const response = await pool.query("SELECT ct.Id, ct.nifUsuario,ct.CampoTexto FROM  Forum f JOIN CampoTexto ct ON f.IdCampoTexto = ct.Id WHERE  f.IdRVE = $1;", [IdRVE]);
    res.json(response.rows);
}

async function getCampoTextoById(req, res) {
    const id = parseInt(req.params.id);
    const response = await pool.query("SELECT * FROM CampoTexto WHERE Id = $1", [id]);
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
    getCampoTextoById,
    updateCampoTexto,
    deleteCampoTexto,
    getCampostextoRve
};
