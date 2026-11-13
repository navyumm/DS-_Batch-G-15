import express from "express";
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({limit: "50mb"}));
app.use(express.static("public"));
app.use(cookieParser());

export default app;