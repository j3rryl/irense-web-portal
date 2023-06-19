"use client";

import React, { useEffect, useRef } from "react";
import { APP_NAME } from "../utils/constants";
import { handleSignIn } from "../api/authentication/auth";
import { useRouter, useSearchParams } from "next/navigation";
import { INCORRECT_PASSWORD, LOGIN_SUCCESS } from "../utils/response";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const AuthPage = () => {
    
    const searchParams = useSearchParams()
    const router = useRouter();
    useEffect(()=>{
    },[searchParams])
    const formRef = useRef<HTMLFormElement>(null);
    const onSubmit = async(event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        const form = formRef.current;
        if (!form) return;
        const formData = new FormData(form);
        const username = String(formData.get('username'));    
        const password = String(formData.get('password'));  
        const callbackUrl = searchParams?.get('callbackUrl') || "/dashboard"
        // toast.promise(
        //     handleSignIn({username, password, callbackUrl}),
        //      {
        //        loading: 'Loading...',
        //        success: (data)=>`${data?.error}`,
        //        error: (error)=> `${error.error}`,
        //      }
        //    );         
        const res = await handleSignIn({username, password, callbackUrl}).then((response)=>{
            if(response?.ok){
                toast.success(`${LOGIN_SUCCESS}`);
                
                setTimeout(() => {
                    router.push(`${response?.url}`);
                    router.refresh();
                }, 1500);
            } else {
                if(`${response?.error}`=== `${INCORRECT_PASSWORD}`){
                    toast.warn(`${response?.error}`);
                } else {
                    toast.error(`${response?.error}`);
                }
            }
            
        }).catch((error)=>{
            console.log(error);
        });
    }
  return (
    <>
    <section className="bg-gray-50">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
          {APP_NAME}    
      </a>
      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Sign in to your account
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={onSubmit} ref={formRef}>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                        <input type="email" name="username" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded accent-primary bg-gray-50 focus:ring-3 focus:ring-primary-300" />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="remember" className="text-gray-500">Remember me</label>
                            </div>
                        </div>
                        <a href="#" className="text-sm font-medium text-gray-500 hover:underline">Forgot password?</a>
                    </div>
                    <button type="submit" className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                        <ToastContainer />
                </form>
            </div>
        </div>
    </div>
    </section>
</>
  )
}

export default AuthPage


// "use client";

// import React, { useEffect, useRef } from "react";
// import { APP_NAME } from "../utils/constants";
// import { handleSignIn } from "../api/authentication/auth";
// import { useRouter, useSearchParams } from "next/navigation";
// import { INCORRECT_PASSWORD, LOGIN_SUCCESS } from "../utils/response";
// import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';


// const AuthPage = () => {
    
//     const searchParams = useSearchParams()
//     const router = useRouter();
//     useEffect(()=>{
//     },[searchParams])
//     const formRef = useRef<HTMLFormElement>(null);
//     const onSubmit = async(event: React.FormEvent<HTMLFormElement>) =>{
//         event.preventDefault();
//         const form = formRef.current;
//         if (!form) return;
//         const formData = new FormData(form);
//         const username = String(formData.get('username'));    
//         const password = String(formData.get('password'));  
//         const callbackUrl = searchParams?.get('callbackUrl') || "/dashboard"
//         // toast.promise(
//         //     handleSignIn({username, password, callbackUrl}),
//         //      {
//         //        loading: 'Loading...',
//         //        success: (data)=>`${data?.error}`,
//         //        error: (error)=> `${error.error}`,
//         //      }
//         //    );         
//         const res = await handleSignIn({username, password, callbackUrl}).then((response)=>{
//             if(response?.ok){
//                 toast.success(`${LOGIN_SUCCESS}`);
                
//                 setTimeout(() => {
//                     router.push(`${response?.url}`);
//                     router.refresh();
//                 }, 1500);
//             } else {
//                 if(`${response?.error}`=== `${INCORRECT_PASSWORD}`){
//                     toast.warn(`${response?.error}`);
//                 } else {
//                     toast.error(`${response?.error}`);
//                 }
//             }
            
//         }).catch((error)=>{
//             console.log(error);
//         });
//     }
//   return (
//     <>
//     <section className="bg-gray-50 dark:bg-gray-900">
//     <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//       <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
//           <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
//           {APP_NAME}    
//       </a>
//       <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//             <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//                 <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//                     Sign in to your account
//                 </h1>
//                 <form className="space-y-4 md:space-y-6" onSubmit={onSubmit} ref={formRef}>
//                     <div>
//                         <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
//                         <input type="email" name="username" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
//                     </div>
//                     <div>
//                         <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
//                         <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
//                     </div>
//                     <div className="flex items-center justify-between">
//                         <div className="flex items-start">
//                             <div className="flex items-center h-5">
//                                 <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded accent-primary bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
//                             </div>
//                             <div className="ml-3 text-sm">
//                                 <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
//                             </div>
//                         </div>
//                         <a href="#" className="text-sm font-medium text-gray-500 hover:underline dark:text-gray-300">Forgot password?</a>
//                     </div>
//                     <button type="submit" className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-white dark:bg-primary dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
//                         <ToastContainer />
//                 </form>
//             </div>
//         </div>
//     </div>
//     </section>
// </>
//   )
// }

// export default AuthPage