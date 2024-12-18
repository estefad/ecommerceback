import mongoose from "mongoose";

export const connectMongoDB = async ()=>{
    mongoose.connect(
        "mongodb+srv://stefanadominguez:Ei%40LcGhfVg6Pj6K@cluster0.vt1df.mongodb.net/mongoAtlas",
    )
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err));
    
} 