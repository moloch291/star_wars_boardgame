require('dotenv').config();

const Pool = require("pg").Pool;
const pool = new Pool({
    user: process.env.DB_USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.HOST_NAME,
    port: process.env.PORT
});

module.exports.registrationQuery = async function (newUsername, newEmail, newPassword) {
    try {
        await pool.query(
            "INSERT INTO profile (username, email, password) VALUES ($1, $2, $3)",
            [newUsername, newEmail, newPassword]
        );
        return "Success!";
    } catch (error) {
        return error;
    }
}