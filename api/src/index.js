const express = require("express");
const mongoose = require('mongoose');

const {PORT, MONGO_DB, HOST} = require("./configuration/index")
const router = require("./routers/user");

const app = express();
app.use(router);

mongoose.connect(MONGO_DB)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is listening ${PORT} on host ${HOST}`);
        })
    })
    .catch((error) => {
        console.log("Connection error", error);
    });