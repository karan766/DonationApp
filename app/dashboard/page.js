"use client";
import React, { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";
import { useForm } from "react-hook-form";
import {fetchuser, updateProfile} from "@/actions/useractions"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from "react-toastify";

const Page = () => {
  const { data: session, update} = useSession();
  const[form, setform] = useState({})
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();

  //  const onSubmit = (data) => console.log(data);

  useEffect(() => {
   
    if (!session) {
      router.push("/login");
    }
    else{
      getData()
    }
  }, [session, router]);

  const getData = async () => {
    let u = await fetchuser(session.user.name)
    setValue("name", u.name)
    setValue("email", u.email)
    setValue("username", u.username)
    setValue("profilepic", u.profilepic)
    setValue("coverpic", u.coverpic)
    setValue("razorpayID", u.razorpayID)
    setValue("RazorPaySecret", u.RazorPaySecret)
    setform(u)
  }

  const onSubmit = async (e) => {
     update()
     let a = await updateProfile(e)
     toast('Profile Updated', {
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



      <div className="dashboard pt-12 md:mt-0   md:w-1/2 mx-auto flex justify-center items-center flex-col gap-2">
        <h2 className="text-3xl font-bold text-center my-2">
          Welcome to your dashboard
        </h2>
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col justify-center items-center mt-12 md:mt-2  "
        >
          <div className="w-9/12">
            <label htmlFor="name">
              <p className="font-bold m-1">Name</p>
            </label>
            <input
              type="text"
              className="w-full h-8 border border-white/50 px-4 rounded-xl bg-slate-500"
              placeholder="Enter Name"
              id="name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-600">Name is required</span>
            )}
          </div>
          <div className="w-9/12">
            <label htmlFor="Email">
              <p className="font-bold m-1">Email</p>
            </label>
            <input
              type="text"
              className="w-full h-8 border border-white/50 px-4 rounded-xl bg-slate-500"
              placeholder="Enter Email"
              id="Email"
              readOnly
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-600">Email is required</span>
            )}
          </div>
          <div className="w-9/12">
            <label htmlFor="UserName">
              <p className="font-bold m-1">User Name</p>
            </label>
            <input
              type="text"
              className="w-full h-8 border border-white/50 px-4 rounded-xl bg-slate-500"
              placeholder="Enter User Name"
              id="UserName"
              
              {...register("username", { required: true })}
            />
            {errors.username && (
              <span className="text-red-600">User Name is required</span>
            )}
          </div>
          <div className="w-9/12">
            <label htmlFor="Profile">
              <p className="font-bold m-1">Profile Link</p>
            </label>
            <input
              type="text"
              className="w-full h-8 border border-white/50 px-4 rounded-xl bg-slate-500"
              placeholder="Enter Profile Link"
              id="Profile"
              {...register("profilepic", { required: true })}
            />
            {errors.profilepic && (
              <span className="text-red-600">Profile Link is required</span>
            )}
          </div>
          <div className="w-9/12">
            <label htmlFor="Cover">
              <p className="font-bold m-1">Cover Link</p>
            </label>
            <input
              type="text"
              className="w-full h-8 border border-white/50 px-4 rounded-xl bg-slate-500"
              placeholder="Enter Cover Link"
              id="Cover"
              {...register("coverpic", { required: true })}
            />
            {errors.coverpic && (
              <span className="text-red-600">
                Cover Picture Link is required
              </span>
            )}
          </div>
          <div className="w-9/12">
            <label htmlFor="razorpayID">
              <p className="font-bold m-1">Razor Pay Id</p>
            </label>
            <input
              type="text"
              className="w-full h-8 border border-white/50 px-4 rounded-xl bg-slate-500"
              placeholder="Enter Razor Pay Id"
              id="razorpayID"
              {...register("razorpayID", { required: true })}
            />
            {errors.razorpayID && (
              <span className="text-red-600">Razor Pay Id is required</span>
            )}
          </div>
          <div className="w-9/12">
            <label htmlFor="RazorPaySecret">
              <p className="font-bold m-1">Razor Pay Secret</p>
            </label>
            <input
              type="text"
              className="w-full h-8 border border-white/50 px-4 rounded-xl bg-slate-500"
              placeholder="Enter Razor Pay Secret"
              id="RazorPaySecret"
              {...register("RazorPaySecret", { required: true })}
            />
            {errors.RazorPaySecret && (
              <span className="text-red-600">Razor Pay Secret is required</span>
            )}
          </div>
          <input
            type="submit"
            value={isSubmitting ? "Submitting..." : "Submit"}
            disabled={isSubmitting}
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 w-9/12 md:mt-6 mt-8"
          />
        </form>
      </div>
    </>
  );
};

export default Page;