import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profilepic: {
    type: String,
  },
  coverpic: {
    type: String,
  },
  razorpayID: {
    type: String,
  },
  RazorPaySecret: {
    type: String,
  }
 

} , {timestamps: true});

export default mongoose.models.User || model("User", UserSchema);
