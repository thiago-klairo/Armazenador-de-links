const Link = require("./models/Link")
const express = require("express")
const app = express();
const path = require("path")
const mongoose = require("mongoose");
const linkRoute = require("./routes/linkRoutes")
mongoose.connect("mongodb://localhost/newLinks", { useNewUrlParser: true, useUnifiedTopology: true })

let db = mongoose.connection;
db.on("error", () => { console.log("ocorreu um erro") })
db.once("open", () => {
    console.log("Banco carregado")
})

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "templates"))

app.use("/", linkRoute)

app.listen(3000, () => {
    console.log("SERVER IS RUNNING")
})

