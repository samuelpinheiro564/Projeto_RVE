const pool = require('../config/dbConfig');

async function GetAllRves(req, res) {
    try {
        const result = await pool.query('SELECT * FROM rves');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function GetBYIDRVE(req, res) {
    try {
        const {id} = req.params;
        const result = await pool.query('SELECT * FROM rves WHERE id = $1', [id]);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function CreateRve(req, res) {
    const {id,nifautor, estudante, curso, turma, data, hora, motivo, orientacoesestudante, 
        descricaoocorrido, dificuldades, presenca,elogios, assinaturas,numberusers} = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO rves (id,nifautor, estudante, curso, turma, data, hora, motivo, orientacoesestudante, descricaoocorrido, dificuldades, presenca,elogios, assinaturas,numberusers) ' +
            'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12,$13,$14,$15) RETURNING *',
            [id,nifautor, estudante, curso, turma, 
                data, hora, motivo, orientacoesestudante,
                 descricaoocorrido, dificuldades, presenca,elogios,
                   assinaturas,numberusers]
        );
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function EditRve(req, res) {
    const { id } = req.params;  // Corrigido para pegar o ID corretamente
    const { nifautor, estudante, curso, turma, data, hora, motivo, orientacoesestudante, descricaoocorrido,
        assinaturas, dificuldades, presenca, elogios ,numberusers } = req.body;

    try {
        const response = await pool.query(
            "UPDATE rves SET nifautor = $1, estudante = $2, curso = $3, turma = $4, data = $5, hora = $6, motivo = $7, " +
            "orientacoesestudante = $8, descricaoocorrido = $9,   assinaturas = $11, " +
            "dificuldades = $12, presenca = $13 , elogios = $14 , numberusers = $15 WHERE id = $16",
            [nifautor, estudante, curso, turma, data, hora, motivo, orientacoesestudante, descricaoocorrido,
                 assinaturas, dificuldades, presenca, elogios ,numberusers,  id]
        );
        res.json("RVE Updated Successfully");
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
async function rveCompleta(req, res) {
    try {
        const {id} = req.params;
        const result = await pool.query('SELECT * FROM rves WHERE numberusers = array_length(assinaturas, 1) ORDER BY data DESC, hora DESC');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }}

async function deleteRve(req, res) {
    const { id } = req.params;  // Corrigido para pegar o ID corretamente
    try {
        await pool.query("DELETE FROM rves WHERE id = $1", [id]);
        res.json(`RVE ${id} deleted Successfully`);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {  
    GetAllRves,
    CreateRve,
    EditRve,
    deleteRve,
    GetBYIDRVE,
    rveCompleta
};
