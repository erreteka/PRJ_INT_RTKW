const express = require("express");
// Atribui configuração de roteamento a variável
const router = express.Router();
const multer = require ("multer");
const filmController = require("../controllers/filmController");

// GET http://localhost:3000/film/
router.get("/", filmController.index);

 

router.get("/create", filmController.create);
router.post("/create", filmController.store);
 
// // GET http://localhost:3000/film/show
// router.get("/show", filmController.show);

//GET http://localhost:3000/film/create
// router.get("/create", filmController.create);

// POST http://localhost:3000/film/create
// router.post("/create", filmController.store);

 

// // GET http://localhost:3000/film/edit/1
// router.get("/edit/:id", filmController.edit);
router.get("/edit/:id", filmController.edit);

 

// // PUT http://localhost:3000/film/edit/1
// router.put("/edit/:id", filmController.update);
router.put("/edit/:id", filmController.update);
 
// // GET http://localhost:3000/film/delete/1
// router.get("/delete/:id", filmController.delete);
router.get("/delete/:id", filmController.delete);
router.delete("/delete/:id", filmController.destroy);

// // DELETE http://localhost:3000/film/delete/1
// router.delete("/delete/:id", filmController.destroy);

// // GET http://localhost:3000/film/1
// router.get("/:id", filmController.show);
router.get("/:id", filmController.findAll);

// // GET http://localhost:3000/filmsavalia
// router.get("/filmsavalia", filmController.edit);

// // PUT http://localhost:3000/filmsavalia
// router.put("/filmsavalia", filmController.update);






const authController = require("../controllers/AuthController");

const isAuth = require("../middlewares/auth")
const isGuest = require("../middlewares/guest")

router.get("/login",isGuest, authController.login);
router.post("/login", isGuest, authController.auth);

router.get("/register",isGuest, authController.register);
router.post("/register", isGuest, authController.create);

router.post("/logout", isAuth, authController.logout);

module.exports = router;