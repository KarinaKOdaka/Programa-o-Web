const express = require("express");

const router = express.Router();

const authMiddleware = require(
    "../middleware/authMiddleware"
);

const {
    listarJogos,
    buscarJogo,
    criarJogo,
    editarJogo,
    excluirJogo
} = require("../controllers/jogoController");

router.get("/", listarJogos);

router.get("/:id", buscarJogo);

router.post(
    "/",
    authMiddleware,
    criarJogo
);

router.put(
    "/:id",
    authMiddleware,
    editarJogo
);

router.delete(
    "/:id",
    authMiddleware,
    excluirJogo
);

module.exports = router;