const mongoose=require("mongoose");
const express=require("express");
const dotenv=require("dotenv");
// const cors=require("cors");
const treeRoute=require("./routes/trees");
// const userRoute=require("./routes/user");


const app=express();

dotenv.config();

const port=process.env.PORT || 8000;

app.get("/",(req,res)=>{
    res.send("This is a recipe site")
 })

// app.use(cors())

mongoose.connect (process.env.MONGO_URI)

.then(()=>{app.listen(port, ()=>{
    console.log(`The Database is successfully connected and server running at port: ${port}`)
})})

.catch (err =>{
    console.log(err)
})



app.use(express.json())

app.use("/api/trees", treeRoute)
// app.use("/api/user", userRoute)






