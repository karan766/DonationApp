import Image from "next/image";
import React from "react";
import PaymentPage from "@/components/PaymentPage";
import { notFound } from "next/navigation";
import connectDB from "@/db/connectDb";
import User from "@/models/User";

const page = async ({ params }) => {
  const checkUser = async () => {
    await connectDB()
  let u = await User.findOne({username: params.username})
  if(!u) {
    return notFound()
}
}
await checkUser()


  return (
    <>
      <PaymentPage params={params}/>
    </>
  );
}

export default page;
