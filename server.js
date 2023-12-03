const database = require("./config/database")
const express = require("express")
const app = express()
const dotenv = require("dotenv")
const http = require("http").createServer(app)
const userRoute =require("./routes/userRoute")

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/",userRoute)

dotenv.config({path:"./config/config.env"})
database()



http.listen(process.env.PORT,()=>{
    console.log(`server started ${process.env.PORT}`)
})