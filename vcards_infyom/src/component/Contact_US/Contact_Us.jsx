import React from "react";

const Contact_Us = () => {
  return (
    <>
      
        <div
          className="container"
          style={{
            width: "95%",
            margin: "auto",
          }}
        >
          
<img src="src\assets\stareye.png"
style={{
  
  height:'10%',
  width:'5%',
  position: "absolute",
  right: '35%',
  margin:"10px",
  padding:"10px"
  }}/>

          <form
            className=" p-4 shadow-md mt-2"
            data-aos="zoom-in-up"
            data-aos-duration="800"
          >
            
            <h1 className="mt-3 font-bold text-3xl text-violet-700 text-center p-4">
              # Contact Us
            </h1>

            <input
              type="text"
              placeholder=" Full Name"
              className="w-full mb-4 p-2 border border-black rounded focus:outline-none focus:border-blue-500"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full mb-4 p-2 border border-black rounded  focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full mb-4 p-2 border border-black rounded focus:outline-none focus:border-blue-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full mb-4 p-2 border border-black rounded focus:outline-none focus:border-blue-500"
              rows="5"
            ></textarea>

            <button
              type="submit"
              className="w-[50%] m-auto p-2 from color4 focus:outline-none text-white border rounded bg-violet-700 shadow-2xl hover:bg-green-700 hover:text-black hover:scale-110 p-2"
            >
              {/* <span className="text-white bg-black p-2">Send</span> */}
              SEND
            </button>
          </form>
        </div>
      
    </>
  );
};

export default Contact_Us;
