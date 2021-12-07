const express = require("express")
const mongoose = require("mongoose")
var cors = require('cors')

const userRoutes = require("./src/api/userRroutes")

const app = express()
app.use(express.json());
app.use(cors())

// connect to mongodb
const DBURI = 'mongodb+srv://jay:jay123@pesto.xyeoq.mongodb.net/pestodb?retryWrites=true&w=majority'
mongoose.connect(DBURI);

//check connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
    //listen on port 5000
    app.listen(5000, () => {
        console.log("Server is running at port 5000");
    });
    app.use(userRoutes)

});


app.get("/", (req, res) => {
    res.send('<p> Hello Api </p>')
})
