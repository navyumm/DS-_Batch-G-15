import express from "express";
const app = express();


app.use((req, res, next)=>{
    console.log("first middleware");
    next()
})

app.use((req, res, next)=>{
    console.log("second middleware");
    next()
})

app.get("/", (req, res)=>{
    res.send("hiiiiii")
})



app.listen(8080, ()=>{
    console.log(`server is running`);
})