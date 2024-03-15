import React from 'react';

import Contact_Icon from '../Contact_Icon';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

const Home = () => {
  return (
    <div className='text-center'>
     <img
  src="https://cdn.pixabay.com/photo/2019/09/21/01/34/influencer-4492841_1280.jpg"
  alt=""
  style={{
    marginTop:"10px",
    height:"45vh",
    width: "80%",
    borderRadius: "0% 45% 0% 45%" ,
    border: '7px solid white ',
  
  }}
/>

<img src="src\assets\Heart_Shape.png"
style={{
  height:'5%',
  width:'2.5%',
  position: "absolute",
  top: '32px',
  right: '33%',
}}
/>

<img src="src\assets\CherryBlossem.png"
style={{
  height:'8%',
  width:'4%',
  position: "absolute",
  top: '185px',
  right: '35%',
}}
/>


      <div className='w-[200px] h-[200px] m-auto mt-[-70px] relative rounded-full overflow-hidden' style={{float: 'right',position:"absolute",zIndex:"1",left:"54%",top:"250px",border: '7px solid white '}}>
        <img className='w-full h-full object-cover rounded-full' src="https://aminajasminemodel.websites.co.in/files/16261/businessdetails/16146/amina-jasmine_1537706230ZRpdXA.jpeg?v=71937104 " alt="" />
      </div>




      <div data-aos="fade-right" data-aos-duration="800" >
      <h1 className=' flex mt-2 font-bold text-4xl text-violet-700 hover:text-violet-400 hover:scale-x-100 p-2'>
       Amy Wilson
      </h1>
      <h1 className='flex p-2 font-bold text-2xl'>
      Fashion Influencer
      </h1>
    </div>

    <div style={{padding:'1rem'}} >
          <Contact_Icon></Contact_Icon>
        </div>
      
<div data-aos="zoom-in-up"  data-aos-duration="800" style={{padding:'20px'}} >
      <p className='mt-3 w-[100%] m-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro soluta, dolores odio eum saepe molestias. Sunt repellat quaerat sapiente facere aspernatur, enim facilis?</p>
      </div>

     


      
    </div>
  );
};

export default Home;
