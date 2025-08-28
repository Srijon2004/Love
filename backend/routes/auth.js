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


router.post("/google", async (req, res) => {
  try {
    const { idToken } = req.body;
    
    // Verify the ID token with Firebase Admin
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const { name, email } = decodedToken;

    // Check if user already exists
    let user = await User.findOne({ email });

    // If user doesn't exist, create a new one
    if (!user) {
      // For Google-signed-up users, you can generate a random password or leave it empty
      // as they won't use it to log in.
      const tempPassword = Math.random().toString(36).slice(-8);
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(tempPassword, salt);
      
      user = new User({
        username: name,
        email,
        password: hashedPassword, // A placeholder password
      });
      await user.save();
    }

    // Create a JWT for your application
    const payload = { user: { id: user.id, username: user.username } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res
      .cookie("token", token, { httpOnly: true, sameSite: "lax" })
      .json({ token, username: user.username, email: user.email });

  } catch (error) {
    console.error("Google auth error", error);
    res.status(401).json({ message: "Google authentication failed." });
  }
});











module.exports = router;
