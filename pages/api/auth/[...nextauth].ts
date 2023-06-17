import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "@/app/api/firebase/firebaseConf";

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
          console.log("error", error);  
          throw new Error(error);
        });
        const user = response;
        if (response.user) {
          return user as any;
        } else null;
                    
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