import { loginCredentials } from "@/app/interfaces";
import { signIn, signOut } from "next-auth/react";

export const handleSignIn = async (data: loginCredentials) => {    
    const response = await signIn("credentials", {
      username: data.username,
      password: data.password,
      redirect: false,
      callbackUrl: `${data.callbackUrl}`,
    });
    return response;
  };
  export const handleSignOut = () => {
    signOut({ callbackUrl: "/authentication" });
  };