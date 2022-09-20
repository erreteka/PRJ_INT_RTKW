const express = require("express");
const router = express.Router();
const authController = require("../controllers/AuthController");
const isAuth = require("../middlewares/auth")
const isGuest = require("../middlewares/guest")

router.get("/login",isGuest, authController.login);
router.post("/login", isGuest, authController.auth);

router.get("/register",isGuest, authController.register);
router.post("/register", isGuest, authController.create);

router.get("/admin",isGuest, authController.register);
router.post("/admin", isGuest, authController.create);

router.post("/logout", isAuth, authController.logout);

router.get("/teste", isAuth, (req, res) => {
    res.send("area restrita");
});



module.exports = router;