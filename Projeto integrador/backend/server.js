require("dotenv").config();

const express =
    require("express");

const cors =
    require("cors");

const conectarBanco =
    require("./config/db");

const jogoRoutes =
    require("./routes/jogoRoutes");

const authRoutes =
    require("./routes/authRoutes");

const errorHandler =
    require("./middleware/errorHandler");

const app =
    express();

conectarBanco();

app.use(cors());

app.use(express.json());

app.use(
    "/api/jogos",
    jogoRoutes
);

app.use(
    "/api/auth",
    authRoutes
);

app.get("/", (req, res) => {

    res.send("API funcionando");

});

app.use(errorHandler);

const PORT =
    process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(
        `Servidor rodando na porta ${PORT}`
    );

});