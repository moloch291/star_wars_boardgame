const express = require('express');
const favicon = require('express-favicon');
// const unirest = require("unirest");
const path = require("path");
const port = 8000;
const htmlFilePrefix = "/../frontend/public/";

const app = express();
app.set('views', __dirname + htmlFilePrefix);
app.use(favicon(__dirname + "/../frontend/public/img/favicon_deathStar.png"));
app.use("/public", express.static(path.join(__dirname + "/../frontend/public")));


app.get("/", (req, res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, htmlFilePrefix)
    });
});

app.listen(port, () => {
    console.log(`May the force be with you... Always! (On port ${port}.)`);
});