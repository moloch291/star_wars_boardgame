const express = require('express');
const unirest = require("unirest");
const path = require("path");
const app = express();
const port = 3000;
const htmlFilePrefix = "/../app/templates/";


app.get("/", (req, res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, '../templates/')
    });
});

app.listen(port, () => {
    console.log(`Initial app listening at localhost, on port ${port}`);
});