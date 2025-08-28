const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// Signup
// router.post("/signup", async (req, res) => {
//   try {
//     const { username, email, password } = req.body;
//     if (!username || !email || !password)
//       return res.status(400).json({ message: "All fields required" });
//     let user = await User.findOne({ email });
//     if (user) return res.status(400).json({ message: "User already exists" });

//     const salt = await bcrypt.genSalt(10);
//     const hashed = await bcrypt.hash(password, salt);

//     user = new User({ username, email, password: hashed });
//     await user.save();

//     const payload = { user: { id: user.id, username: user.username } };
//     const token = jwt.sign(payload, process.env.JWT_SECRET, {
//       expiresIn: "7d",
//     });

//     res
//       .cookie("token", token, { httpOnly: true, sameSite: "lax" })
//       .json({ username: user.username, email: user.email });
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Server error");
//   }
// });

router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password)
      return res.status(400).json({ message: "All fields required" });

    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    user = new User({ username, email, password: hashed });
    await user.save();

    const payload = { user: { id: user.id, username: user.username } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // Send ID in response
    res
      .cookie("token", token, { httpOnly: true, sameSite: "lax" })
      .json({ id: user._id, username: user.username, email: user.email });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});




// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: "All fields required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const payload = { user: { id: user.id, username: user.username } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res
      .cookie("token", token, { httpOnly: true, sameSite: "lax" })
      .json({ username: user.username, email: user.email });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// Logout
router.post("/logout", (req, res) => {
  res.clearCookie("token").json({ message: "Logged out" });
});












// Google Signup
router.post("/google-signup", async (req, res) => {
  try {
    const { name, email, googleId, photo } = req.body;
    if (!email || !googleId) {
      return res.status(400).json({ message: "Email and Google ID required" });
    }

    // Check if user exists by googleId
    let user = await User.findOne({ googleId });

    if (!user) {
      // Create new Google user
      user = new User({
        username: name,
        email,
        googleId,
        photo,
      });
      await user.save();
    }

    // Create JWT
    const payload = { user: { id: user.id, username: user.username } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res
      .cookie("token", token, { httpOnly: true, sameSite: "lax" })
      .json({ id: user._id, username: user.username, email: user.email, photo: user.photo });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Google signup failed" });
  }
});

// Google Login
router.post("/google-login", async (req, res) => {
  try {
    const { email, googleId } = req.body;
    if (!email || !googleId) {
      return res.status(400).json({ message: "Email and Google ID required" });
    }

    // Find user
    const user = await User.findOne({ email, googleId });
    if (!user) return res.status(400).json({ message: "User not found" });

    // Create JWT
    const payload = { user: { id: user.id, username: user.username } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res
      .cookie("token", token, { httpOnly: true, sameSite: "lax" })
      .json({ id: user._id, username: user.username, email: user.email, photo: user.photo });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Google login failed" });
  }
});















module.exports = router;
