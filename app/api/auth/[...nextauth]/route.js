// import NextAuth from "next-auth"
// import mongoose from "mongoose";
// import User from "@/models/User";
// import payment from "@/models/payment";
// import GithubProvider from "next-auth/providers/github";
// import connectDB from "@/db/connectDb";
// // import FacebookProvider from "next-auth/providers/facebook";
// // import GoogleProvider from "next-auth/providers/google";
// // import EmailProvider from "next-auth/providers/email";

// export const authOptions = NextAuth ({
//     // Configure one or more authentication providers
//     providers: [
//       GithubProvider({
//         clientId: process.env.GITHUB_ID,
//         clientSecret: process.env.GITHUB_SECRET,
//       }),
//       // ...add more providers here
//     ],

    
// callbacks: {
//   async signIn({ user, account, profile, email, credentials }) {
//     await connectDB();
//     const isUserExists = await User.findOne({ email: user.email });

//     if (!isUserExists) {
//       const newUser = new User({
//         email: user.email,
//         name: user.name,
//         username: user.email.split("@")[0],
//         profilepic: user.image,
//         coverpic: user.image,
//       });

//       await newUser.save();
//     }

//     return true;
//   },

//  async session({ session, user, token }) {
//    const dbUser = await User.findOne({email: session.user.email})
   
//    session.user.name = dbUser.username
//    return session
//  }
// }

//   })
// export {authOptions as GET , authOptions as POST}


import NextAuth from "next-auth";
import mongoose from "mongoose";
import User from "@/models/User";
import GithubProvider from "next-auth/providers/github";
import connectDB from "@/db/connectDb";

export const authOptions = NextAuth({
  // Configure GitHub provider
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  callbacks: {
    // Sign-in callback: check if the user exists, if not, create a new user
    async signIn({ user, account, profile, email, credentials }) {
      try {
        await connectDB();  // Establish DB connection

        const isUserExists = await User.findOne({ email: user.email });
        if (!isUserExists) {
          const newUser = new User({
            email: user.email,
            name: user.name,
            username: user.email.split("@")[0],
            profilepic: user.image,
            coverpic: user.image,
          });

          await newUser.save();  // Save new user in DB
        }
        return true;  // Sign-in success
      } catch (error) {
        console.error("Error in signIn callback:", error);
        return false;  // Prevent sign-in on error
      }
    },

    // Session callback: customize session data
    async session({ session, user, token }) {
      try {
        const dbUser = await User.findOne({ email: session.user.email });
        if (dbUser) {
          session.user.name = dbUser.username;  // Assign username to session
        }
        return session;  // Return session object
      } catch (error) {
        console.error("Error in session callback:", error);
        return session;  // Return session even on error
      }
    },
  },
});

export { authOptions as GET, authOptions as POST };


  