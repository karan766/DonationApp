"use client";
import React, { useEffect } from "react";
import Script from "next/script";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { fetchuser, fetchpayments, initiate } from "@/actions/useractions";
import { useSearchParams } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { notFound } from "next/navigation";

const PaymentPage = ({ params }) => {

  const [currentUser, setcurrentUser] = useState({});
  const [payments, setpayments] = useState([]);
  const SearchParams = useSearchParams();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();
  const router = useRouter();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (SearchParams.get("paymentdone") === "true") {
      toast("Thanks for the donation.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
    router.replace(`/${params.username}`);
  }, []);

  const onSubmit = async (data) => {
    await pay(Number.parseInt(data.amount * 100), data);
  };

  const getData = async () => {
    let u = await fetchuser(params.username);
    setcurrentUser(u);
    let dbpayments = await fetchpayments(params.username);
    setpayments(dbpayments);
  };

  const pay = async (amount, data) => {
    try {
      let a = await initiate(amount, params.username, data);
      let orderId = a.id;

      var options = {
        key: currentUser.razorpayID, // Enter the Key ID generated from the Dashboard
        amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Collection-project", //your business name
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
        prefill: {
          //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
          name: "Gaurav Kumar", //your customer's name
          email: "gaurav.kumar@example.com",
          contact: "9000090000", //Provide the customer's phone number for better conversion rates
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var rzp1 = new Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />

      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

      <div className="cover relative mb-24">
        <img
          src={currentUser.coverpic}
          alt="image"
          className="md:object-cover md:w-full md:h-full md:aspect-auto aspect-auto object-cover"
        />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-20 aspect-square h-36 w-36">
          <img
            src={currentUser.profilepic}
            alt="image"
            className="aspect-square  rounded-xl border-2 border-white  h-36 w-36"
          />
        </div>
      </div>
      <div className="info flex flex-col justify-center items-center gap-3 ">
        <div className="username font-bold tracking-wide text-3xl">
          <h1>{params.username}</h1>
        </div>
        <div className="text-slate-400">
          Lets help {params.username} to get Collection.
        </div>
        <div className="text-slate-400">
          {payments.length} Donations . {currentUser.name} has raised ₹
          {payments.reduce((a, b) => a + b.amount, 0)} raised
        </div>

        <div className="payment flex gap-3  md:w-[80%] mt-10 flex-col md:flex-row ">
          <div className="text-white supporters w-4/5 md:w-1/2 bg-gradient-to-r from-slate-500 to-slate-800  rounded-lg p-10 mb-10 ml-10 md:ml-base ">
            {/* Show  list of all the supporters as a leaderboard */}
            <h2 className="text-2xl font-bold my-5 ">Supporters</h2>

            <ul className="mx-4 text-lg overflow-x-hidden overflow-y-scroll max-h-[60vh]">
              {payments.length == 0 && <li>No one has donated yet</li>}
              {payments.map((p, i) => {
                return (
                  <li className="my-4 flex gap-2 item-center " key={p.oid}>
                    <img
                      className="aspect-square w-10 h-10"
                      src="panda.png"
                      alt="avtar"
                    />
                    <span>
                      {p.name} donated{" "}
                      <span className="font-bold">{p.amount} </span> with a
                      message {p.message}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="text-white p-10 makePayment w-4/5 md:w-1/2 bg-gradient-to-r from-slate-500 to-slate-800  rounded-lg mb-10 ml-10 md:ml-base">
            <h2 className="text-2xl font-bold my-5 ">Make a Payment</h2>
            <form
              action=""
              onSubmit={handleSubmit(onSubmit)}
              className="w-full flex flex-col justify-center items-center gap-2 mb-8"
            >
              <input
                type="text"
                className="w-full h-10 border border-white/50 px-4 py-2 rounded-xl bg-slate-500 text-lg"
                placeholder="Enter Name"
                {...register("name", {
                  required: { value: true, message: "Name is required" },
                  pattern: {
                    value: /^[A-Za-z\s]+$/i,
                    message: "Name should only contain alphabets",
                  },
                })}
              />
              {errors.name && (
                <span className="text-red-600">{errors.name.message}</span>
              )}
              <input
                type="text"
                className="w-full h-10 border border-white/50 px-4 py-2 rounded-xl bg-slate-500 text-lg"
                placeholder="Enter Message"
                {...register("message")}
              />
              <input
                type="text"
                className="w-full h-10 border border-white/50 px-4 py-2 rounded-xl bg-slate-500 text-lg"
                placeholder="Enter Amount"
                {...register("amount", {
                  required: { value: true, message: "Amount is required" },
                  pattern: {
                    value: /^[0-9]+$/i,
                    message: "Amount should only contain numbers",
                  },
                })}
              />
              {errors.amount && (
                <span className="text-red-600">{errors.amount.message}</span>
              )}
              <input
                type="submit"
                disabled={isSubmitting}
                value={isSubmitting ? "Donating..." : "Donate"}
                className={`text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 w-full ${
                  isSubmitting ? "cursor-not-allowed" : "cursor-pointer"
                }`}
              />
            </form>
            {/* Or choose from these amounts*/}
            <div className="flex gap-2 mt-5">
              <button
                className="p-3 rounded-lg bg-gradient-to-r from-slate-500 to-slate-800  "
                onClick={() => pay(10 * 100)}
              >
                Pay ₹10
              </button>
              <button
                className="p-3 rounded-lg bg-gradient-to-r from-slate-500 to-slate-800  "
                onClick={() => pay(2000)}
              >
                Pay ₹20
              </button>
              <button
                className="p-3 rounded-lg bg-gradient-to-r from-slate-500 to-slate-800  "
                onClick={() => pay(10000)}
              >
                Pay ₹100
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
