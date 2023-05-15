const express = require("express");
const cookieParser = require("cookie-parser");
const env = require("dotenv");
const homeView = require("./routes/index")
//Creating Server
const app = express();
//Setting Templating View Engine
app.set("view engine", "ejs");
//app.set("views", "views");
app.use(express.static("public"));
// Using Cookie Parser
app.use(cookieParser());
// Configuring dotenv
env.config();

//Defining Port
const port = process.env.PORT || 3000;

// Listening 
app.listen(port, () => {
    console.log(
        `Server Has Been Started on ${port}`
    );
});

app.use('/', homeView)