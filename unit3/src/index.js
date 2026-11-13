
import connectToDB from "./db/dbConnection.js";
import app from "./app.js";
import 'dotenv/config';

connectToDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running on PORT : ${process.env.PORT}`, );
    })
})
.catch((error)=>console.log("MONGODB CONNECTION FAILED:", error));


//! IIFE Function
/*
(async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(connectionInstance.connection.host);
        
        // app.on()

        app.listen(process.env.PORT || 8000, ()=>{
            console.log(`Server is running on PORT : ${PORT}`);
        })
    } catch (error) {
        console.error("connect failed!!!", error);
        throw error
    }
})();
*/