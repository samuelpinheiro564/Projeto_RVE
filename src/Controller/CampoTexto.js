const pool = require('../config/dbConfig');

async function CreateCampoTexto(req, res) {
    const {idrve,data,hora,nomeusuario,nifusuario,campotexto} = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO CampoTexto (idrve,data,hora,nomeusuario,nifusuario,campotexto) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *',
            [idrve,data,hora,nomeusuario,nifusuario,campotexto]
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

async function getCampoTextoByRve(req, res) {
        try{
            const {idrve} = req.params
            const response = await pool.query("SELECT * FROM CampoTexto WHERE idrve = $1", [idrve]);
            res.json(response.rows);
        }catch(err){
            res.status(500).json({ error: err.message });
            if(err.message == "Cannot read property 'rows' of undefined"){
                res.status(404).json({ error: "CampoTexto não encontrado" });
            }
        }
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
};
