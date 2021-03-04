
const mongoose = require("mongoose");

require("dotenv").config({path: "variables.env"})

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Mongoose.Promise = global.Promise;
mongoose.connection.on("error", (error) => {
    console.error("Erro: " + error.message);
})
mongoose.connection.on("connected", () => {
    console.error("Deu certo");
})

require("./models/Post");

const app = require("./app");
app.set("port", process.env.PORT);
const server = app.listen(app.get("port"), () => {
    console.log("Servido rodando na porta: " + server.address().port)
});