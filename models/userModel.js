const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    age: {
      type: Number,
    },
    // Agrega aquí los demás campos que necesites
  },
  { versionKey: false }
);

const User = mongoose.model("users", userSchema);

module.exports = User;
