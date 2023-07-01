"use client";
import { addPatient } from "@/app/api-handler/patient";
import { Patient } from "@/app/interfaces";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Page = () => {
  const router = useRouter()
  const formRef = useRef<HTMLFormElement>(null);
  const onSubmit = async(event: React.FormEvent<HTMLFormElement>) =>{
      event.preventDefault();
      const form = formRef.current;
      if (!form) return;
      const formData = new FormData(form);

      const formValues: Patient = {
        last_name: String(formData.get('last_name')),   
        first_name:  String(formData.get('first_name')), 
        age:  Number(formData.get('age')), 
        phone:  String(formData.get('phone')), 
        email:  String(formData.get('email')) ,
        gender:  String(formData.get('gender')),
      } as Patient
      const res = await addPatient({patient: formValues}).then((response)=>{
        toast.success(`${response}`);
        setTimeout(() => {
          router.push("/dashboard/patients");
        }, 1800);
      }).catch((error)=>{
        toast.error(error)
      })
  }
  return (
  <>
    <form onSubmit={onSubmit} ref={formRef}>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">First Name</label>
            <input type="text" name="first_name" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5" placeholder="Kevin" required />
        </div>
        <div className="relative z-0 w-full mb-6 group">
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 ">Last Name</label>
            <input type="text" name="last_name" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5" placeholder="Kiptoo" required />
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Phone Number</label>
            <input type="tel" name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5" placeholder="0782848284" required />
        </div>
        <div className="relative z-0 w-full mb-6 group">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5" placeholder="kiptoo@gmail.com" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
            <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 ">Age</label>
            <input type="number" name="age" id="age" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5" placeholder='32' required />
        </div>
        <div className="relative z-0 w-full mb-6 group">
            <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 ">Gender</label>
            <input type="text" name="gender" id="gender" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5" placeholder="Male"  />
        </div>
      </div>
      <button type="submit" className="text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>

    </form>
  <ToastContainer />
</>

  )
}

export default Page
