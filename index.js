const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")


const app = express()

mongoose.connect(
    "mongodb+srv://sumanthvenkata:sumanth@empmgmtcluster.ua1xgzh.mongodb.net/?retryWrites=true&w=majority&appName=empmgmtcluster"
).then(()=>app.listen(3000,()=> console.log("Connected to db") ))

app.use(express.json());

app.use(cors())

const router = require("./routers/student.routers.js")
app.use("/students", router)
