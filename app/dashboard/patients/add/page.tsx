
const Page = () => {
  return (
    
<form>
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
        <label htmlFor="phone_number" className="block mb-2 text-sm font-medium text-gray-900 ">Phone Number</label>
        <input type="tel" name="phone_number" id="phone_number" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5" placeholder="0782848284" required />
    </div>
    <div className="relative z-0 w-full mb-6 group">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
        <input type="email" name="username" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5" placeholder="kiptoo@gmail.com" />
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

  )
}

export default Page
