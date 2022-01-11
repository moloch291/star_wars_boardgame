const pool = require("./databaseHandler/pool");
const express = require('express');
const path = require("path");
const port = 8000;
const bodyParser = require('body-parser');
// Init app:
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Init:
app.listen(port, () => {
    console.log(`May the force be with you... Always! (On port ${port}.)`);
});

// ROUTES:
// Create user:
app.post("/registration", async (req, res) => {
        const response = await pool.registrationQuery(
            req.body["username"], req.body["email"], req.body["password"]
        );
        if (response === "Success!") res.json({success: "true"});
        else {
            const errorDetail = response["detail"].includes("already exists") ?
                                "Email already in use!" : "Database error...";
            res.json({
                success: "false",
                details: `${errorDetail}`
            });
        }
    }
)