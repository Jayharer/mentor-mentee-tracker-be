const express = require("express")
const mongoose = require("mongoose")
var cors = require('cors')

const userRoutes = require("./src/api/userRroutes")
const adminRoutes = require("./src/api/adminRoutes")
const mentorRoutes = require("./src/api/mentorRoutes")

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
    var server_port = process.env.PORT || 80;
    var server_host = process.env.YOUR_HOST || '0.0.0.0';
    app.listen(server_port, server_host, () => {
        console.log("Server is running at port ", server_port);
    });

    app.use(userRoutes)
    app.use(adminRoutes)
    app.use(mentorRoutes)

});


app.get("/", (req, res) => {
    res.send('<p> Hello Api </p>')
})
