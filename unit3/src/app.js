import express from "express";
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({limit: "50mb"}));
app.use(express.static("public"));
app.use(cookieParser());


// import routes
import userRoutes from "./routes/user.routes.js"

// routes declaration
app.use("/users", userRoutes);


// localhost:8080/users
// localhost:8080/users/register

export default app;