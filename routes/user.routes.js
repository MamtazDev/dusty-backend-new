const express = require("express");
const {
  registerUser,
  loginUser,
  getAllUser,
  deleteUser,
  getUser,
} = require("../controller/user.controller");
const { isAuth } = require("../utils/middleware");
const { sendEmail } = require("../utils/auth");

const router = express.Router();
router.post("/signup", registerUser);
router.post("/login", loginUser);
router.get("/", getAllUser);
// router.post("/sendEmail", sendEmail);
router.delete("/delete/:id", isAuth, deleteUser);
router.get("/:id", isAuth, getUser);

module.exports = router;
