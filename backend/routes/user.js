const express = require("express");
const auth = require("../middleware/auth");
const User = require("../models/User");

const router = express.Router();

// Save girlfriend details (authenticated)
router.post("/girlfriend", auth, async (req, res) => {
  try {
    const { name, photo, details } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Girlfriend name is required" });
    }

    // Find user
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Update or insert girlfriend data
    user.girlfriend = {
      name,
      photo: photo || "",
      details: details || "",
    };

    await user.save();

    res.status(200).json({
      success: true,
      message: "Girlfriend details saved successfully ✅",
      data: {
        userId: user._id,       
        username: user.username,
        girlfriend: user.girlfriend,
      },
    });
  } catch (err) {
    console.error("Error saving girlfriend:", err.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Get girlfriend details by username (public)
router.get("/propose/:username", async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username }).select("girlfriend username");
    if (!user || !user.girlfriend || !user.girlfriend.name)
      return res
        .status(404)
        .json({ message: "No proposal found for this user" });
    res.json({ username: user.username, girlfriend: user.girlfriend });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

module.exports = router; // only once at the end
