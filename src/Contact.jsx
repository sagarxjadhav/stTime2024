import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function Contact() {
  return (
    <>
    <Header></Header>
<div class="min-h-screen flex justify-center items-center ">
<table class="w-full border-collapse border border-blue-500 max-w-xl mt-16 mx-auto">
  <thead>
    <tr class="bg-red-500 text-black">
      <th class="py-2 px-4 text-left">Services</th>
      {/* <th class="py-2 px-4 text-left">Age</th> */}
      <th class="py-2 px-4 text-left">Contact </th>
    </tr>
  </thead>
  <tbody>
    <tr class="bg-white border-b text-black border-blue-500">
      <td class="py-2 px-4">Online Booking</td>
      <td class="py-2 px-4">1800221250</td>
    </tr>
    <tr class="bg-white  text-black border-b border-blue-500">
      <td class="py-2 px-4">Bus Stand Enquiry</td>
      <td class="py-2 px-4">020-24442860</td>
    </tr>
    <tr class="bg-white  text-black border-b border-blue-500">
      <td class="py-2 px-4">Traffic Control Cnter</td>
      <td class="py-2 px-4">020-24449980</td>
    </tr>
    <tr class="bg-white  text-black border-b border-blue-500">
      <td class="py-2 px-4">Bob Johnson</td>
      <td class="py-2 px-4">2361356422</td>
    </tr>
    <tr class="bg-white  text-black border-b border-blue-500">
      <td class="py-2 px-4">Swargate Bus Depot Contact</td>
      <td class="py-2 px-4">020-24442968</td>
    </tr>
    <tr class="bg-white  text-black border-b border-blue-500">
      <td class="py-2 px-4">Parcel Service</td>
      <td class="py-2 px-4">07232-245351</td>
    </tr>
  </tbody>
</table>
</div>
   
    <Footer></Footer>
    </>
  )
}

export default Contact
