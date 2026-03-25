const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ================= SIGNUP =================
exports.signup = (req, res) => {
  const { name, email, password } = req.body;

  const hashed = bcrypt.hashSync(password, 10);

  const sql = "INSERT INTO users1 (name, email, password) VALUES (?, ?, ?)";

  db.query(sql, [name, email, hashed], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json({ message: "User registered " });
  });
};

// ================= LOGIN =================
exports.login = (req, res) => {
  const { email, password } = req.body;

  db.query("SELECT * FROM users1 WHERE email = ?", [email], (err, result) => {
    if (err) return res.status(500).json(err);

    if (result.length === 0) {
      return res.status(400).json({ message: "User not found" });
    }

    const user = result[0];

    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Wrong password" });
    }

    const token = jwt.sign({ id: user.id }, "secret", {
      expiresIn: "1d",
    });

    res.json({ message: "Login successful ", token });
  });
};

 
exports.forgotPassword = (req, res) => {
  const { email } = req.body;

  const otp = Math.floor(1000 + Math.random() * 9000).toString();
 const expiry = new Date().toISOString().slice(0, 19).replace("T", " ");

  console.log("Generated OTP:", otp); 

  const sql = "UPDATE users1 SET otp=?, otp_expiry=? WHERE email=?";

  db.query(sql, [otp, expiry, email], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "OTP sent", otp });
  });
};

// ================= VERIFY OTP =================
exports.verifyOtp = (req, res) => {
  const { email, otp } = req.body;

  db.query("SELECT * FROM users1 WHERE email=?", [email], (err, result) => {
    if (err) return res.status(500).json(err);

    const user = result[0];

  if (!user || user.otp !== otp || new Date(user.otp_expiry) < new Date()) {
  return res.status(400).json({ message: "Invalid OTP " });
}

    res.json({ message: "OTP verified " });
  });
};

// ================= RESET PASSWORD =================
exports.resetPassword = (req, res) => {
  const { email, password } = req.body;

  const hashed = bcrypt.hashSync(password, 10);

  const sql =
    "UPDATE users1 SET password=?, otp=NULL, otp_expiry=NULL WHERE email=?";

  db.query(sql, [hashed, email], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Password updated " });
  });
};