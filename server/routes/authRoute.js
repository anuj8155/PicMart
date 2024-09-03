const router = require('express').Router();
const { login,signup } = require("../controllers/authControllers");
const {verify} = require("../middlewares/verifyToken")

router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
