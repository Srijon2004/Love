// const express = require("express");
// const auth = require("../middleware/auth");
// const User = require("../models/User");

// const router = express.Router();

// // Save girlfriend details (authenticated)
// router.post("/girlfriend", auth, async (req, res) => {
//   try {
//     const { name, photo, details } = req.body;

//     if (!name) {
//       return res.status(400).json({ message: "Girlfriend name is required" });
//     }

//     // Find user
//     const user = await User.findById(req.user.id);
//     if (!user) return res.status(404).json({ message: "User not found" });

//     // Update or insert girlfriend data
//     user.girlfriend = {
//       name,
//       photo: photo || "",
//       details: details || "",
//     };

//     await user.save();

//     res.status(200).json({
//       success: true,
//       message: "Girlfriend details saved successfully ✅",
//       data: {
//         userId: user._id,       
//         username: user.username,
//         girlfriend: user.girlfriend,
//       },
//     });
//   } catch (err) {
//     console.error("Error saving girlfriend:", err.message);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// });

// // Get girlfriend details by username (public)
// router.get("/propose/:username", async (req, res) => {
//   try {
//     const { username } = req.params;
//     const user = await User.findOne({ username }).select("girlfriend username");
//     if (!user || !user.girlfriend || !user.girlfriend.name)
//       return res
//         .status(404)
//         .json({ message: "No proposal found for this user" });
//     res.json({ username: user.username, girlfriend: user.girlfriend });
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Server error");
//   }
// });

// module.exports = router; // only once at the end























// const express = require("express");
// const auth = require("../middleware/auth");
// const User = require("../models/User");

// const router = express.Router();

// // ----------------------------
// // Add a new girlfriend link
// // ----------------------------
// router.post("/girlfriend", auth, async (req, res) => {
//   try {
//     const { name, photo, details } = req.body;

//     if (!name) {
//       return res.status(400).json({ message: "Girlfriend name is required" });
//     }

//     // Find user
//     const user = await User.findById(req.user.id);
//     if (!user) return res.status(404).json({ message: "User not found" });

//     // Create new girlfriend object
//     const newGirlfriend = {
//       name,
//       photo: photo || "",
//       details: details || "",
//     };

//     // Add to user's girlfriends array
//     user.girlfriends.push(newGirlfriend);
//     await user.save();

//     res.status(201).json({
//       success: true,
//       message: "Girlfriend link added successfully ✅",
//       data: {
//         userId: user._id,
//         username: user.username,
//         girlfriend: newGirlfriend,
//       },
//     });
//   } catch (err) {
//     console.error("Error saving girlfriend:", err.message);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// });

// // ----------------------------
// // Get all girlfriend links by username (public)
// // ----------------------------
// router.get("/propose/:username", async (req, res) => {
//   try {
//     const { username } = req.params;
//     const user = await User.findOne({ username }).select("girlfriends username");

//     if (!user || user.girlfriends.length === 0) {
//       return res.status(404).json({ message: "No proposals found for this user" });
//     }

//     res.json({ username: user.username, girlfriends: user.girlfriends });
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Server error");
//   }
// });



// // 












// // Get a specific girlfriend by ID
// router.get("/propose/:username/:girlfriendId", async (req, res) => {
//   try {
//     const { username, girlfriendId } = req.params;
//     const user = await User.findOne({ username }).select("girlfriends username");

//     if (!user || !user.girlfriends || user.girlfriends.length === 0) {
//       return res.status(404).json({ message: "No proposals found for this user" });
//     }

//     const gf = user.girlfriends.id(girlfriendId); // find by _id
//     if (!gf) return res.status(404).json({ message: "Girlfriend not found" });

//     res.json({ username: user.username, girlfriend: gf });
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Server error");
//   }
// });
// module.exports = router;



















const express = require("express");
const auth = require("../middleware/auth");
const User = require("../models/User");

const router = express.Router();

// Add a new girlfriend
router.post("/girlfriend", auth, async (req, res) => {
  try {
    const { name, photo, details } = req.body;
    if (!name) return res.status(400).json({ message: "Girlfriend name is required" });

    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    const newGirlfriend = { name, photo: photo || "", details: details || "" };
    user.girlfriends.push(newGirlfriend);
    await user.save();

    // Return the newly added girlfriend including its _id
    const addedGirlfriend = user.girlfriends[user.girlfriends.length - 1];

    res.status(201).json({
      success: true,
      message: "Girlfriend link added successfully ✅",
      data: {
        userId: user._id,
        username: user.username,
        girlfriend: addedGirlfriend,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Get all girlfriends by username
router.get("/propose/:username", async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username }).select("girlfriends username");

    if (!user || user.girlfriends.length === 0) {
      return res.status(404).json({ message: "No proposals found for this user" });
    }

    res.json({ username: user.username, girlfriends: user.girlfriends });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// Get a single girlfriend by ID (for unique link)
// In user.js
router.get("/propose/:username/:girlfriendId", async (req, res) => {
  try {
    const { username, girlfriendId } = req.params;
    const user = await User.findOne({ username }).select("girlfriends username");

    if (!user) return res.status(404).json({ message: "User not found" });

    const gf = user.girlfriends.id(girlfriendId);
    if (!gf) return res.status(404).json({ message: "Girlfriend not found" });

    res.json({ username: user.username, girlfriend: gf });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

module.exports = router;
