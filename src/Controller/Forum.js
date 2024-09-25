const pool = require('../config/dbConfig');

async function createForum(req, res) {
    const { idrve, idcampotexto } = req.body;
    const response = await pool.query(
        "INSERT INTO Forum (idrve, idcampotexto) VALUES ($1, $2)",
        [idrve, idcampotexto]
    );
    res.json({
        message: "Forum Added successfully",
        body: {
            Forum: { idrve, idcampotexto }
        },
    });
}

async function getForum(req, res) {
    const response = await pool.query("SELECT * FROM Forum");
    res.status(200).json(response.rows);
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
    createForum,
    getForum,
    getForumById,
    updateForum,
    deleteForum
};
