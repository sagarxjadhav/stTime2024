import React, { useState, useEffect } from 'react';
import data from "../src/datafetcher/data.json";
import Header from './components/Header';
import Footer from './components/Footer';

// Helper function to convert 24-hour time to 12-hour format with AM/PM
const convertTo12HourFormat = (time) => {
  const [hours, minutes] = time.split(':');
  let hour = parseInt(hours, 10);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12 || 12; // Convert to 12-hour format and handle 00:00 as 12:00 AM
  return `${hour}:${minutes} ${ampm}`;
};

function Timetable() {
  const [city1, setCity1] = useState('');
  const [city2, setCity2] = useState('');
  const [scheduleTimes, setScheduleTimes] = useState([]);
  const [startCities, setStartCities] = useState([]);
  const [endCities, setEndCities] = useState([]);
  const [filteredEndCities, setFilteredEndCities] = useState([]);

  useEffect(() => {
    const startCitySet = new Set();
    const endCitySet = new Set();

    Object.keys(data.schedules).forEach(key => {
      const [startCity, endCity] = key.split('-');
      startCitySet.add(startCity);
      endCitySet.add(endCity);
    });

    // Sort start and end cities before setting them
    setStartCities(Array.from(startCitySet).sort());
    setEndCities(Array.from(endCitySet).sort());
    
    // Initial message
    setScheduleTimes(['Enter Your Journey']);
  }, []);

  useEffect(() => {
    if (city1) {
      const filteredEndCities = endCities.filter(endCity => {
        const key = `${city1}-${endCity}`;
        return data.schedules[key];
      });
      // Sort filtered end cities before setting them
      setFilteredEndCities(filteredEndCities.sort());
    } else {
      setFilteredEndCities([]);
    }
  }, [city1, endCities]);

  const handleCity1Change = (e) => {
    setCity1(e.target.value);
  };

  const handleCity2Change = (e) => {
    setCity2(e.target.value);
  };

  const handleCalculateSchedule = () => {
    const key = `${city1}-${city2}`;
    if (data.schedules[key]) {
      // Convert each schedule time to 12-hour format
      const convertedTimes = data.schedules[key].map(time => convertTo12HourFormat(time));
  
      // Custom sort: AM times first, then PM times
      const sortedTimes = convertedTimes.sort((a, b) => {
        const ampmA = a.includes('AM') ? 0 : 1;
        const ampmB = b.includes('AM') ? 0 : 1;
  
        // If both are AM or both are PM, compare by time
        if (ampmA === ampmB) {
          return a.localeCompare(b);
        }
  
        // Otherwise, AM comes first
        return ampmA - ampmB;
      });
  
      setScheduleTimes(sortedTimes);
    } else {
      setScheduleTimes(["Schedule not available"]);
    }
  };
  

  return (
    <>
      <Header />

      <div className="flex flex-col justify-center items-center h-[78vh]">
        <div className="flex justify-center">
          <div>
            <label className="inline-block w-32 h-8" htmlFor="city1">Select City 1:</label>
            <select id="city1" className="city-dropdown bg-white text-black inline-block w-32 h-8 max-h-[50vh] overflow-y-auto" onChange={handleCity1Change}>
              <option value="">Start</option>
              {startCities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
            <br />
            <br />
            <label className="inline-block w-32 h-8" htmlFor="city2">Select City 2:</label>
            <select id="city2" className="city-dropdown bg-white text-black inline-block w-32 h-8 max-h-[50vh] overflow-y-auto" onChange={handleCity2Change}>
              <option value="">End</option>
              {filteredEndCities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
            <br />
            <br />
            <div>
              <button onClick={handleCalculateSchedule} className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50 overflow-hidden h-14 w-56 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">
                <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
                <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
                <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
                <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
                <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
                <p className="z-10">Let's Search</p>
              </button>
            </div>
            <br />
            <br />
          </div>
        </div>
        <div>Schedule Times: {scheduleTimes.length > 0 ? scheduleTimes.join(', ') : ''}</div>
      </div>

      <Footer />
    </>
  );
}

export default Timetable;
