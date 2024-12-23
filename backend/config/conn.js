import mongoose from "mongoose";

async function main() {
    try {
        await mongoose.connect(process.env.CONNECTIONSTRING);
        console.log("Database connected"); 
    } catch (error) {
        console.log("Error", error.message);        
    }
}

main();

export default mongoose;