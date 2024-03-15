import React from 'react';

const Business = () => {
  return (
    <>
      <div className="container mt-[60px]" data-aos="fade-right" data-aos-duration="800">
      <div >
<img src="src\assets\hand.png"
style={{
  height:'12%',
  width:'6%',
  position: "absolute",
  right: '15%',}}/>
  
</div>
        <h1 className='font-bold text-violet-700 text-3xl text-center m-5'># Business Hours</h1>
        <form action="" className="mt-4" data-aos="flip-down">
          <div className="time grid grid-cols-2 gap-3 mt-5">
            <button className='font-bold p-2 rounded-xl border border-dark hover:bg-violet-700 hover:text-white m-3 p-3'>Sunday:8:10-20:00</button>
            <button className='font-bold p-2 rounded-xl border border-dark hover:bg-violet-700 hover:text-white m-3 p-3'>Monday:8:10-20:00</button>
            <button className='font-bold p-2 rounded-xl border border-dark hover:bg-violet-700 hover:text-white m-3 p-3'>Tuesday:8:10-20:00</button>
            <button className='font-bold p-2 rounded-xl border border-dark hover:bg-violet-700 hover:text-white m-3 p-3'>Wednesday:8:10-10:00</button>
            <button className='font-bold p-2 rounded-xl border border-dark hover:bg-violet-700 hover:text-white m-3 p-3'>Thursday:8:10-20:00</button>
            <button className='font-bold p-2 rounded-xl border border-dark hover:bg-violet-700 hover:text-white m-3 p-3'>Friday:8:10-20:00</button>
            <div className="col-span-2 flex justify-center">
              <button className='font-bold p-2 rounded-xl border border-dark hover:bg-violet-700 hover:text-white m-3 p-3'>Saturday:Closed</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Business;
