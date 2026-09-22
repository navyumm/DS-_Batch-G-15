const express = require('express');
// import express from 'express';
const app = express()
const port = 3000


// routes
app.get('/api/random-user', (req, res) => {
    const users = [
        { id: 1, name: "Alice", age: 24, city: "Delhi" },
        { id: 2, name: "Bob", age: 31, city: "Mumbai" },
        { id: 3, name: "Charlie", age: 27, city: "Pune" },
        { id: 4, name: "Diana", age: 22, city: "Jaipur" },
        { id: 5, name: "Ethan", age: 35, city: "Bangalore" }
      ];
    res.send(users)
})

app.get('/', (req, res) => {
    res.send('<h1>Hello Edixo</h1>')
})

// app.get("/navyum", (req, res) => {
//     res.send("<h1>Hello Navyum</h1>")
// })

// app.get("/otp-verification", (req, res) => {
//     res.send("<h1>56465</h1>")
// })

// app.get("/nodemon", (req, res) => {
//     res.send("<h1>Nodemon is running</h1>")
// })

// google.com/
// google.com/navyum
// google.com/navyum/setting


// app.get("route", (err, req, res, next)=>{})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})