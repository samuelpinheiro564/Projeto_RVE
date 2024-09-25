const pool = require('../config/dbConfig');


async function createForum(req, res) {
    const { IdRVE, IDCampoTexto } = req.body;
    const response = await pool.query(
        "INSERT INTO Forum (IdRVE, IDCampoTexto) VALUES ($1, $2)",
        [IdRVE, IDCampoTexto]
    );
    res.json({
        message: "Forum Added successfully",
        body: {
            Forum: { IdRVE, IDCampoTexto }
        },
    });
}

async function getForum(req, res) {
    const response = await pool.query("SELECT * FROM Forum");
    res.status(200).json(response.rows);
}

async function getForumById(req, res) {
    const Id = parseInt(req.params.Id);
    const response = await pool.query("SELECT * FROM Forum WHERE Id = $1", [Id]);
    res.json(response.rows);
}

async function updateForum(req, res) {
    const Id = parseInt(req.params.Id);
    const { IdRVE, IDCampoTexto } = req.body;

    const response = await pool.query(
        "UPDATE Forum SET IdRVE = $1, IDCampoTexto = $2 WHERE Id = $3",
        [IdRVE, IDCampoTexto, Id]
    );
    res.json("Forum Updated Successfully");
}



async function deleteForum(req, res) {
    const Id = parseInt(req.params.Id);
    await pool.query("DELETE FROM Forum where Id = $1", [
        Id
    ]);
    res.json(`Forum ${Id} deleted Successfully`);
}

app.post("/Forum", createForum);
app.get("/Forum", getForum);
app.get("/Forum/:Id", getForumById);
app.put("/Forum/:Id", updateForum);
app.delete("/Forum/:Id", deleteForum);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
