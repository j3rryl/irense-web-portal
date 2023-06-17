import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "@/app/api/firebase/firebaseConf";
import { errorCodes } from "@/app/api/firebase/responseCodes";
import { DEFAULT_ERROR, INCORRECT_PASSWORD, USER_NOT_FOUND } from "@/app/utils/response";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      // name: "Credentials",
      type:"credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "jmunroe@gmail.com",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials: any, req: any) {
        const { username, password } = credentials as any;
        const response = await signInWithEmailAndPassword(firebaseAuth, username, password).then((response)=>{                    
          return response;
        }).catch((error)=>{
          // Handle specific error cases
          if (error.code === errorCodes.WRONG_PASSWORD) {
            throw new Error(INCORRECT_PASSWORD);
          } else if (error.code === errorCodes.USER_NOT_FOUND) {
            throw new Error(USER_NOT_FOUND);
          } else {
            console.log("Unknown error", error);
            
            throw new Error(DEFAULT_ERROR);
          }
        });
        const user = response;
        if (response.user) {
          return user as any;
        } else {
          return null;
        }
                    
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token;
      return session;
    },
  },

  pages: {
    signIn: "/authentication",
  },
};

export default NextAuth(authOptions);