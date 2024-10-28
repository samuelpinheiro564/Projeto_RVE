const pool = require('../config/dbConfig');

async function GetAllRves(req, res) {
    try {
        const result = await pool.query('SELECT * FROM RVES');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function GettRveBYId(req, res) {
    try {
        const NifAutor = parseInt(req.params.NifAutor);
        const result = await pool.query('SELECT * FROM RVES WHERE NifAutor=$1', [NifAutor]);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}



async function CreateRve(req, res) {
    const {autor, estudante, curso, turma, data, hora, motivo, orientacoesestudante, descricaoocorrido, docentesenvolvidos, assinaturas, dificuldades,  presenca} = req.body;
    try {
        const result = await pool.query(
            'insert into rves (autor, estudante, curso, turma, data, hora, motivo, orientacoesestudante, descricaoocorrido, docentesenvolvidos, assinaturas,dificuldades, presenca) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) returning *',
            [autor, estudante, curso, turma, data, hora, motivo, orientacoesestudante, descricaoocorrido, docentesenvolvidos, assinaturas, dificuldades, presenca]
        );
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function EditRve(req, res) {
    const Id = parseInt(req.params.Id);
    const { Autor, Estudante, Curso, Turma, Data, Hora, Motivo, OrientacoesEstudante, DescricaoOcorrido, DocentesEnvolvidos, Assinaturas, Elogios, Dificuldades, AssinaturasBoolean, Presenca } = req.body;

    const response = await pool.query(
        "UPDATE RVES SET Autor = $1, Estudante = $2, Curso = $3, Turma = $4, Data = $5, Hora = $6, Motivo = $7, OrientacoesEstudante = $8, DescricaoOcorrido = $9, DocentesEnvolvidos = $10, Assinaturas = $11, Elogios = $12, Dificuldades = $13, AssinaturasBoolean = $14, Presenca = $15 WHERE Id = $16",
        [Autor, Estudante, Curso, Turma, Data, Hora, Motivo, OrientacoesEstudante, DescricaoOcorrido, DocentesEnvolvidos, Assinaturas, Elogios, Dificuldades, AssinaturasBoolean, Presenca, Id]
    );
    res.json("RVE Updated Successfully");
}

async function deleteRve(req, res) {
    const Id = parseInt(req.params.Id);
    await pool.query("DELETE FROM RVES where Id = $1", [
        Id
    ]);
    res.json(`RVE ${Id} deleted Successfully`);
}

module.exports = {  
    GetAllRves,
    CreateRve,
    EditRve,
    deleteRve,
    GettRveBYId
};

