import connectDB from "./db/db.js";
import 'dotenv/config';

connectDB()


//! IIFE Function
/*
(async()=>{
    try {
        const connectionDB = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n mongoDB connected ${connectionDB.connection.host}`);

        app.on("error", (error)=>{
            console.log("ERROR", error);
            throw error     
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listing on PORT : ${PORT}`);  
        })
        
    } catch (error) {
        console.error("connect failed!!!", error);
        process.exit(1)
    }
})();
*/