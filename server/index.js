import app from "./app.js";
import dotenv from 'dotenv'
import connectToDb from "./config/db.js";

dotenv.config()

const PORT = 3000

const startServer = async () => {
    try {
        await connectToDb();        

        app.listen(PORT, () => {
            console.log(`Server is listening at port: http://localhost:${PORT}`);
        })
    } catch (error) {
        console.log("Failed to start server...!");
    }
}

startServer()