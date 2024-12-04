const express = require("express")
const app = express()
const connectDB = require("./database/dbConfig") //! connect to database
require("dotenv").config()
const blogRoutes = require("./routes/blogRoutes") //! blog routes
const cors = require("cors");

const port = process.env.PORT

//? connect to database
connectDB()

//? cors
app.use(cors({
    origin: "http://localhost:3001",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["Content-Type", "Authorization"],
}))

//? middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//? routes
app.use("/api/blogs", blogRoutes)

app.listen(port, (req, res) => {    
    console.log(`app listening on port ${port}`)
})

