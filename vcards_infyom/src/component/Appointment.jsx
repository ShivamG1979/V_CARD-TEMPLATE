import React from 'react';

const Appointment = () => {
  return (
    <>
      <div className="container mt-[60px]" data-aos="fade-right" data-aos-duration="800">
  <h1 className='font-bold text-violet-700 text-2xl'># Make An Appointment</h1>
  
  <form action="" className="mt-4" data-aos="flip-down">
    <input type="date" id="date" className='w-[70%] m-auto border p-2 rounded-sm' /> 

    <div className="time flex justify-center mt-4">
  <div className="pair flex flex-col mr-4">
    <button className='bg-white rounded-lg mb-3 py-4 px-16 rounded-lg timebutton text-lg font-bold hover:bg-gray-200'>8:10-20:00</button>
    <button className='bg-white rounded-lg py-4 px-16 rounded-lg timebutton text-lg font-bold hover:bg-gray-200'>8:10-20:00</button>
  </div>
  <div className="pair flex flex-col">
    <button className='bg-white rounded-lg mb-3 py-4 px-16 rounded-lg timebutton text-lg font-bold hover:bg-gray-200'>8:10-20:00</button>
    <button className='bg-white rounded-lg py-4 px-16 rounded-lg timebutton text-lg font-bold hover:bg-gray-200'>8:10-20:00</button>
  </div>
</div>

<div className="flex justify-center mt-4">
  <button className="bg-violet-700 text-white py-3 px-32 rounded-lg font-bold hover:bg-pink-600 m-5">Book Appointment </button>
  
</div>



  </form>
  
</div>

    </>
  );
};

export default Appointment;
