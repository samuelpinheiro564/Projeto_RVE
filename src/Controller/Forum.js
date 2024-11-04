const pool = require('../config/dbConfig');

async function CreateRve(req, res) {
    const {id_rve,usuario_nif } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO rve_usuarios (id_rve,usuario_nif) VALUES ($1, $2) RETURNING *',
            [id_rve,usuario_nif]
        );
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function getAllRveByIdRve(req, res) {
    const {id_rve} = req.params;
    const response = await pool.query("SELECT * FROM rve_usuarios WHERE id_rve = $1", [id_rve]);
    res.json(response.rows);
}

module.exports = {
CreateRve,
 getAllRveByIdRve
};
