import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function About() {
  return (
    <>
    <Header></Header>
    <div class="mt-20">
   
    <div class="lg:px-96 md:px-20">
      <div class="flex pt-2 justify-center text-2xl font-sans items-center">
        About Us
      </div>
      <br />
      <div class="text-center font-bold text-gray-600">
        "Traveling becomes eassy with us."
      </div>
      <p class="p-4 text-gray-600 text-md sm:text-left md:text-left text-center font-sans">
      Welcome to user, your trusted source for Maharashtra's ST bus schedules.
       We bring the latest timetables to help you plan your trips quickly and easily. Whether you're commuting,
        traveling for leisure, or visiting loved ones, we've got you covered.
      </p>
      <p class="text-center text-md text-gray-600 px-4 font_sans py-3">
      Our platform provides accurate bus schedules and integrates Google Maps for seamless navigation.
       You can explore routes, track stops, and even connect with your nearest bus depots
        for any queries, all in one convenient place.
      </p>
      <p class="text-center text-md px-4 font-sans text-gray-600  pt-2 pb-3">
      We aim to simplify travel and make it hassle-free.
       With our easy-to-use service, you can plan your journeys with
        confidence and convenience.
      </p>
    </div>
    </div>
    
    <Footer></Footer>
      
    </>
  )
}

export default About
