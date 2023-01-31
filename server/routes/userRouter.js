const Router = require("express");
const router = new Router();
const userConroller = require("../controllers/userControllers");
const authMiddleWare = require("../middleware/authMiddleWare");

router.post("/registration", userConroller.registration);
router.post("/login", userConroller.login);
router.get("/auth", authMiddleWare, userConroller.check);
module.exports = router;
