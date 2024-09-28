"use server";

import Razorpay from "razorpay";
import Payment from "@/models/payment";
import User from "@/models/User";
import connectDB from "@/db/connectDb";


export const initiate = async (amount, to_username, paymentform) => {
  await connectDB();

  //fetch the secret of the user who is getting the payment
  let user = await User.findOne({ username: to_username });
  const secret = user.RazorPaySecret;
  const key_id = user.razorpayID;

  var instance = new Razorpay({
    key_id:key_id,
    key_secret: secret,
  });

  let options = {
    amount: Number.parseInt(amount),
    currency: "INR",
  };
  let x = await instance.orders.create(options);

  await Payment.create({
    oid: x.id,
    amount: amount / 100,
    to_user: to_username,
    name: paymentform.name,
    message: paymentform.message,
  });

  return x;
};

export const fetchuser = async (username) => {
  await connectDB();
  let u = await User.findOne({ username: username });
  let user = u.toObject({ flattenObjectIds: true });
  return user;
};

export const fetchpayments = async (username) => {
  await connectDB();
  //find all payments sorted by decreasing order of amount
  let p = await Payment.find({ to_user: username, done: true })
    .sort({ amount: -1 })
    .lean();
  return p;
};

export const updateProfile = async (data) => {
  await connectDB();
  let oldusername = await User.findOne({ email: data.email }).lean();
  let user = await User.findOneAndUpdate({ email: data.email }, data, {
    new: true,
  }).lean();
  user.message = "Profile updated successfully";

  await Payment.updateMany(
    { to_user: oldusername.username },{ to_user: user.username })

  return user;
};
