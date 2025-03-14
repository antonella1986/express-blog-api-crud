const express = require("express");
const router = express.Router();

//index
router.get("/", (req, res) => {
    res.send("Lista dei post");
});

//show
router.get("/:id", (req, res) => {
    res.send(`Dettagli del post con id: ${req.params.id}`);
});

//store
router.post("/", (req, res) => {
    res.send("Creazione nuovo post");
});

//update
router.put("/:id", (req, res) => {
    res.send(`Modifica totale del post con id: ${req.params.id}`);
});

//modify
router.patch("/:id", (req, res) => {
    res.send(`Modifica parziale del post con id: ${req.params.id}`);
});

//delete
router.delete("/:id", (req, res) => {
    res.send(`Eliminazione del post con id: ${req.params.id}`);
});

module.exports = router;