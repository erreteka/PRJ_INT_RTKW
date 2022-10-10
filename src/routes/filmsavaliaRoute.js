const express = require("express");
// Atribui configuração de roteamento a variável
const router = express.Router();
const multer = require ("multer");
const filmsavaliaController = require("../controllers/filmsavaliaController");


// GET http://localhost:3000/filmsavalia/
router.get("/", filmsavaliaController.index);


// router.get("/edit/:id", filmsavaliaController.edit);
router.get("/:id", filmsavaliaController.edit);

 

// // PUT http://localhost:3000/filmsavalia/1
// router.put("/edit/:id", filmsavaliaController.update);
router.put("/:id", filmsavaliaController.update);

 
module.exports = router;