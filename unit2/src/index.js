// const express = require("express");
import express from "express"
const app = express(); // create server
const port = 8080;

const hello = (req, res)=>{
    res.send("helloo class")
}

app.get("/", hello)


app.get("/home", (req, res)=>{
    res.send("this is our home page")
})






app.listen(port, ()=>{
    console.log(`server is running on PORT : ${port}`);
}) // start server

