const pool = require('../config/dbConfig');

async function CreateForum(req, res) {
    const { Data, IdRVE, IdCampoTexto } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO Forum (Data, IdRVE, IdCampoTexto) VALUES ($1, $2, $3) RETURNING *',
            [Data, IdRVE, IdCampoTexto]
        );
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


async function GetAllForum(req, res) {
    try {
        const result = await pool.query('SELECT * FROM Forum');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
async function getForumById(req, res) {
    const id = parseInt(req.params.id);
    const response = await pool.query("SELECT * FROM Forum WHERE Id = $1", [id]);
    res.json(response.rows);
}

async function updateForum(req, res) {
    const id = parseInt(req.params.id);
    const { idrve, idcampotexto } = req.body;

    const response = await pool.query(
        "UPDATE Forum SET IdRVE = $1, IDCampoTexto = $2 WHERE Id = $3",
        [idrve, idcampotexto, id]
    );
    res.json("Forum Updated Successfully");
}

async function deleteForum(req, res) {
    const id = parseInt(req.params.id);
    await pool.query("DELETE FROM Forum where Id = $1", [
        id
    ]);
    res.json(`Forum ${id} deleted Successfully`);
}

module.exports = {
 CreateForum,
    GetAllForum,
    getForumById,
    updateForum,
    deleteForum
};
