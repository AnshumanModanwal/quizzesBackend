const express = require("express");
const routes = require("./Routes/routes")
require("dotenv").config();
const database = require("./Config/Database");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser());
PORT = process.env.PORT || 4000


//database connect
database.connect();

//routes
app.use('/', routes);


app.get("/", (req,res) =>{
    return res.json({
        success:true,
        message:"Your server is up and running...."
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})