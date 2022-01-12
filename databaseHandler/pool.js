require('dotenv').config();
console.log()
const Pool = require("pg").Pool;
const pool = new Pool({
    user: process.env.PSQL_USERNAME,
    password: process.env.PSQL_PASSWORD,
    database: process.env.PSQL_DB_NAME,
    host: process.env.PSQL_HOST,
    port: process.env.PSQL_PORT
});

module.exports.registrationQuery = async function (newUsername, newEmail, newPassword) {
    try {
        await pool.query(
            "INSERT INTO profile (username, email, password, side_id) VALUES ($1, $2, $3, 0);",
            [newUsername, newEmail, newPassword]
        );
        return "Success!";
    } catch (error) {
        return error;
    }
};

module.exports.queryUserData = async function (idToSearch) {
    try {
        return await pool.query(
            "SELECT * FROM profile WHERE id = $1;",
            [idToSearch]
        );
    } catch (error) {
        return error;
    }
};