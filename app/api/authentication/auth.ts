import { loginCredentials } from "@/app/interfaces";
import { signIn } from "next-auth/react";

export const handleSignIn = async (data: loginCredentials) => {    
    const response = await signIn("credentials", {
      username: data.username,
      password: data.password,
      redirect: true,
      callbackUrl: `${data.callbackUrl}`,
    });
    return response;
  };