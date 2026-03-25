const express = require("express");
const router = express.Router();

const {
  signup,
  login,
  forgotPassword,
  verifyOtp,
  resetPassword,
} = require("../controllers/authController");

// TEST
router.get("/test", (req, res) => {
  res.send("Auth working ✅");
});

// SIGNUP
router.post("/signup", signup);

// LOGIN
router.post("/login", login);

// FORGOT PASSWORD
router.post("/forgot-password", forgotPassword);

// VERIFY OTP
router.post("/verify-otp", verifyOtp);

// RESET PASSWORD
router.post("/reset-password", resetPassword);

module.exports = router;
