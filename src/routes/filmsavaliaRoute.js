const express = require("express");
// Atribui configuração de roteamento a variável
const router = express.Router();
const multer = require ("multer");
const filmsavaliaController = require("../controllers/filmsavaliaController");


// GET http://localhost:3000/filmslist
router.get("/filmsavalia", filmsavaliaController.index2);

// GET http://localhost:3000/filmslist
router.get("/", filmsavaliaController.index2);


const authController = require("../controllers/AuthController");

const isAuth = require("../middlewares/auth")
const isGuest = require("../middlewares/guest")

router.get("/login",isGuest, authController.login);
router.post("/login", isGuest, authController.auth);

router.get("/register",isGuest, authController.register);
router.post("/register", isGuest, authController.create);

router.post("/logout", isAuth, authController.logout);

module.exports = router;