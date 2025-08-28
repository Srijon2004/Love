const mongoose = require("mongoose");

const girlfriendSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  photo: {
    type: String, // can be URL (Cloudinary, S3, etc.) or base64
    default: "",
  },
  details: {
    type: String,
    default: "",
  },
});

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true,  trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    girlfriend: {
      type: girlfriendSchema,
      default: null, // initially no girlfriend details
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
