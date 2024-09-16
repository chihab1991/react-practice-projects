const express = require("express");
const {
	authUser,
	registerUser,
	getUserProfile,
	logoutUser,
} = require("../controllers/userController");

const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.post("/profile", protect, getUserProfile);

module.exports = router;
