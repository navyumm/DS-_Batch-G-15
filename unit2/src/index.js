// const express = require("express");
import express from "express"
import todoRoutes from "./routes/todo.routes.js"
const app = express(); // create server


const port = 8080;


app.use("/api/v1/todo", todoRoutes);


app.listen(port, ()=>{
    console.log(`server is running on PORT : ${port}`);
}) // start server

