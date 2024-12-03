const pool = require("../config/dbConfig");

async function GetAllRves(req, res) {
  try {
    const { nifsusuarios } = req.params;
    const result = await pool.query(
      "SELECT * FROM rves WHERE $1 = ANY(nifsusuarios) ORDER BY data DESC, hora DESC",
      [nifsusuarios]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}



async function GetBYIDRVE(req, res) {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM rves WHERE id = $1 ", [id]);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function CreateRve(req, res) {
  const {
    id,
    nifautor,
    nifsusuarios,
    estudante,
    curso,
    turma,
    data,
    hora,
    motivo,
    orientacoesestudante,
    descricaoocorrido,
    dificuldades,
    presenca,
    elogios,
    assinaturas,
    numberusers,
  } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO rves (id,nifautor, nifsusuarios, estudante, curso, turma, data, hora, motivo, orientacoesestudante, descricaoocorrido, dificuldades, presenca, elogios, assinaturas, numberusers) " +
        "VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15,$16) RETURNING *",
      [
        id,
        nifautor,
        nifsusuarios,
        estudante,
        curso,
        turma,
        data,
        hora,
        motivo,
        orientacoesestudante,
        descricaoocorrido,
        dificuldades,
        presenca,
        elogios,
        assinaturas,
        numberusers,
      ]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function EditRve(req, res) {
  const { id } = req.params; // Corrigido para pegar o ID corretamente
  const {
    nifautor,
    nifsusuarios,
    estudante,
    curso,
    turma,
    data,
    hora,
    motivo,
    orientacoesestudante,
    descricaoocorrido,
    assinaturas,
    dificuldades,
    presenca,
    elogios,
    numberusers,
  } = req.body;

  try {
    const response = await pool.query(
      "UPDATE rves SET nifautor = $1, nifsusuarios = $2, estudante = $3, curso = $4, turma = $5, data = $6, hora = $7, motivo = $8, " +
        "orientacoesestudante = $9, descricaoocorrido = $10, assinaturas = $11, " +
        "dificuldades = $12, presenca = $13, elogios = $14, numberusers = $15 WHERE id = $16",
      [
        nifautor,
        nifsusuarios,
        estudante,
        curso,
        turma,
        data,
        hora,
        motivo,
        orientacoesestudante,
        descricaoocorrido,
        assinaturas,
        dificuldades,
        presenca,
        elogios,
        numberusers,
        id,
      ]
    );
    res.json("RVE Updated Successfully");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function rveCompleta(req, res) {
  try {
    const { nifsusuarios } = req.params;
    const result = await pool.query(
      "SELECT * FROM rves WHERE $1 = ANY(nifsusuarios) ORDER BY data DESC, hora DESC",
      [nifsusuarios]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function deleteRve(req, res) {
  const { id } = req.params; // Corrigido para pegar o ID corretamente
  try {
    await pool.query("DELETE FROM rves WHERE id = $1", [id]);
    res.json(`RVE ${id} deleted Successfully`);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function rveEstudante(req, res) {
  const { nome, nifsusuarios } = req.params;
  try {
    const result = await pool.query(
      "SELECT * FROM rves WHERE Estudante ILIKE $1 AND nifsusuarios = $2",
      [`%${nome}%`, nifsusuarios]
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Erro ao buscar RVEs pelo nome do estudante:", error);
    res
      .status(500)
      .json({ error: "Erro ao buscar RVEs pelo nome do estudante." });
  }
}

async function rveUltimaCriada(req, res) {
  const { nifsusuarios } = req.params;
  try {
    const result = await pool.query(
      "SELECT * FROM rves WHERE nifsusuarios = $1 ORDER BY Data DESC, Hora DESC",
      [nifsusuarios]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Erro ao ordenar RVEs por data e hora mais recente:", error);
    res
      .status(500)
      .json({ error: "Erro ao ordenar RVEs por data e hora mais recente." });
  }
}

async function rveTurma(req, res) {
  const { turma, nifsusuarios } = req.params;
  try {
    const result = await pool.query(
      "SELECT * FROM rves WHERE turma ILIKE $1 AND nifsusuarios = $2",
      [`%${turma}%`, nifsusuarios]
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Erro ao buscar RVEs pela turma:", error);
    res.status(500).json({ error: "Erro ao buscar RVEs pela turma." });
  }
}

async function rveCurso(req, res) {
  const { curso, nifsusuarios } = req.params;
  try {
    const result = await pool.query(
      "SELECT * FROM rves WHERE curso ILIKE $1 AND nifsusuarios = $2",
      [`%${curso}%`, nifsusuarios]
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Erro ao buscar RVEs pelo curso:", error);
    res.status(500).json({ error: "Erro ao buscar RVEs pelo curso." });
  }
}

async function rveSemAssinatura(req, res) {
  const { assinatura } = req.params; // Adicionando `nifusuarios` como parâmetro
  try {
    const result = await pool.query(
      `SELECT *  FROM rves WHERE array_position(assinaturas, $1) IS NULL  `, // Verifica se `nifusuarios` corresponde
      [assinatura]
    );

    res.json(result.rows);
  } catch (error) {
    console.error("Erro ao buscar RVEs sem a assinatura específica:", error);
    res
      .status(500)
      .json({ error: "Erro ao buscar RVEs sem a assinatura específica." });
  }
}

async function assinarRve(req, res) {
  const { assinatura, id } = req.params;
  try {
    const result = await pool.query(
      "UPDATE rves SET assinaturas = array_append(assinaturas, $1) WHERE id = $2 RETURNING *",
      [assinatura, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Erro ao assinar RVE:", error);
    res.status(500).json({ error: "Erro ao assinar RVE." });
  }
}
async function rveCriadaautor(req, res) {
  try {
    const { nifautor } = req.params;
    const result = await pool.query(
      "SELECT * FROM rves WHERE nifautor = $1 ORDER BY data DESC, hora DESC",
      [nifautor]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getAllautor(req, res) {
  try {
    const result = await pool.query("SELECT * FROM rves");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
module.exports = {
  rveUltimaCriada,
  rveTurma,
  rveCurso,
  GetAllRves,
  CreateRve,
  EditRve,
  deleteRve,
  GetBYIDRVE,
  rveCompleta,
  rveEstudante,
  rveSemAssinatura,
  assinarRve,
  rveCriadaautor,
  getAllautor
};
