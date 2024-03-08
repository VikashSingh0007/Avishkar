import React from 'react';
import './AddEvent.css'; // Import CSS file for styling
import eventData from './EventData.json'; // Import JSON data

const AddEvent = () => {
  return (
    <div className="bg-slate-700 flex justify-center items-center h-screen w-screen">
      <div className='bg-teal-950 border-white border-[2px] bg-opacity-80 flex flex-col justify-center items-center w-80 h-80 rounded-lg'>
        <h1 className='text-2xl text-white mb-4 font-bold font-Robo'>Department name</h1>
        {/* Dropdown menu for event names */}
        <select className="w-64 h-10 px-4 py-2 mb-4 rounded-md border border-gray-400 focus:outline-none with-hover-shadow">
          {eventData.map((event, index) => (
            <option key={index} value={event.name}>{event.name}</option>
          ))}
        </select>
        {/* Input for Min Size */}
        <input 
          type="number" 
          placeholder="Min Size" 
          className="w-64 h-10 px-4 py-2 mb-4 rounded-md border border-gray-400 focus:outline-none with-hover-shadow"
        />
        {/* Input for Max Size */}
        <input 
          type="number" 
          placeholder="Max Size" 
          className="w-64 h-10 px-4 py-2 mb-4 rounded-md border border-gray-400 focus:outline-none with-hover-shadow"
        />
        {/* Submit button */}
        <button 
          className="w-64 bg-opacity-10 h-10 hover:bg-zinc-900 text-white font-semibold rounded-md focus:outline-none with-hover-shadow"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddEvent;
