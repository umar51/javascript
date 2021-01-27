//code for server response, express package has made this code very short

require("dotenv").config();

const express = require("express"); //its using express package that needs to be installed
const app = express();
const port = process.env.PORT; //using .env to hide sensitive data

app.get("/",(req,res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})