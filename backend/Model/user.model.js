import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  cardData: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
export const User = mongoose.model("User", userSchema);
