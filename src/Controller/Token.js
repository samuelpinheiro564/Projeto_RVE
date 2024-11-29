const pool = require('../config/dbConfig');

async function login(req, res) {
    const user = { nif: req.body.id, name: req.body.name };
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    await pool.query('INSERT INTO refresh_tokens (token, user_nif) VALUES ($1, $2)', [refreshToken, user.nif]);
    res.json({ accessToken, refreshToken });
}

async function refreshToken(req, res) {
    const { token } = req.body;
    if (!token) return res.sendStatus(401);

    const result = await pool.query('SELECT * FROM refresh_tokens WHERE token = $1', [token]);
    if (result.rowCount === 0) return res.sendStatus(403);

    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        const accessToken = generateAccessToken({ id: user.id, name: user.name });
        res.json({ accessToken });
    });
}


module.exports = {  
    login,
    refreshToken
};