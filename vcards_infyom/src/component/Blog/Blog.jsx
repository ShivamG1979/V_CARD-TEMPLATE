import React from 'react';

const Blog = () => {
  return (
    <div className="container mx-auto mt-10">
      <div data-aos="zoom-in " >

<div>
<img src="src\assets\smile.png"
style={{
  height:'150%',
  width:'12%',
  position: "absolute",
  left: '10%',}}/>
</div>
        <div><h1 className='mt-5  font-bold text-violet-700  text-center text-3xl' ># Blog</h1></div>
         

</div>
      
      
      <div className="flex flex-row mt-4">
        <div className="w-1/2">
        <div className="border border-dark rounded-2xl overflow-hidden mt-4">
          <img src="https://about.fb.com/wp-content/uploads/2023/05/Testing-Meta-Verified_Header-1.jpg?w=1920" alt="Blog Post" className="w-full h-[50%] rounded-lg mt-4 " /> 
          </div>
        </div>
        <div className="w-1/2 px-4">
          <h1 className='font-bold text-2xl p-5'>Verified</h1>
          <p className="text-gray-800">Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Cupiditate quidem at quis.</p>
        </div>
      </div> 
      <div className="flex flex-row mt-4">
        <div className="w-1/2">
        <div className="border border-dark rounded-2xl overflow-hidden mt-4">
          <img src="https://cdn.pixabay.com/photo/2016/12/28/19/45/instagram-1936912_1280.png" alt="Blog Post" className="w-full h-[50%] rounded-lg mt-4" /> 
          </div>
        </div>
        <div className="w-1/2 px-4">
          <h1 className='font-bold text-2xl p-5'>Instagram</h1>
          <p className="text-gray-800">Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Cupiditate quidem at quis.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
