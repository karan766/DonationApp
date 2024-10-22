
import NextAuth from "next-auth";
import mongoose from "mongoose";
import User from "@/models/User";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/db/connectDb";

export const authOptions = NextAuth({
  // Configure GitHub provider
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    })
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


// import NextAuth from "next-auth";
// import mongoose from "mongoose";
// import User from "@/models/User";
// import GoogleProvider from "next-auth/providers/google";
// import connectDB from "@/db/connectDb";

// export const authOptions = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET,
//     }),
//   ],

//   callbacks: {
//     async signIn({ user }) {
//       try {
//         await connectDB();

//         const isUserExists = await User.findOne({ email: user.email });
//         if (!isUserExists) {
//           const newUser = new User({
//             email: user.email,
//             name: user.name,
//             username: user.email.split("@")[0],
//             profilepic: user.image,
//             coverpic: user.image,
//           });

//           await newUser.save();
//         }
//         return true;
//       } catch (error) {
//         console.error("Error in signIn callback:", error);
//         return false;
//       }
//     },

//     async session({ session }) {
//       try {
//         const dbUser = await User.findOne({ email: session.user.email });
//         if (dbUser) {
//           session.user.name = dbUser.username;
//         }
//         return session;
//       } catch (error) {
//         console.error("Error in session callback:", error);
//         return session;
//       }
//     },
//   },
// });

// export { authOptions as GET, authOptions as POST };
