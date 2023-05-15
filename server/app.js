const express = require("express");
const cookieParser = require("cookie-parser");
const env = require("dotenv").config();
const mongoose = require("mongoose");

// Routes
const homeView = require("./routes/index")

//Creating Server
const app = express();
//Setting Templating View Engine
app.set("view engine", "ejs");
//app.set("views", "views");
app.use(express.static("public"));
// Using Cookie Parser
app.use(cookieParser());

//Defining Port
const port = process.env.PORT || 3000;
const uri = process.env.DB_URI;

//Connecting DB with Server
mongoose
    .connect(uri)
    .then((result) => {
        app.listen(port, () => {
            console.log(
                `Server Has Been Started on ${port} & DB is Connected Successfully`
            );
        });
    })
    .catch((err) => {
        console.log(`DB Connection Error ${err}`);
    });

app.use('/', homeView)