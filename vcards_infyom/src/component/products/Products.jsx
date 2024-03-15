import React from 'react';

const Products = () => {
  return (
    <div>
      <div>
      <img src="src\assets\smileheart.png"
style={{
  
  height:'10%',
  width:'5%',
  position: "absolute",
  right: '35%',
  margin:"10px",
  padding:"10px"
  }}/>
      </div>
      <h1 className='mt-5 m-5 p-4 font-bold text-violet-700 text-center text-3xl'># Products</h1>
      <div className="flex justify-around">
        <div className="max-w-xs rounded overflow-hidden shadow-lg" style={{ marginRight: '10px',padding:"20px" }}>
          <img className="w-full" src="https://cdn.pixabay.com/photo/2023/08/10/04/30/attractive-8180775_640.jpg" alt="Product" />
          <div className="flex">
            <h1 className='font-bold'>Price</h1>
            <h1 className="font-bold">$20</h1>
          </div>
          <p>Lorem ipsum, dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div className="max-w-xs rounded overflow-hidden shadow-lg" style={{ marginRight: '10px',padding:"20px" }} >
          <img className="w-full" src="https://cdn.pixabay.com/photo/2023/08/10/04/30/attractive-8180775_640.jpg" alt="Product" />
          <div className="flex">
            <h1 className='font-bold'>Price</h1>
            <h1 className="font-bold">$25</h1>
          </div>
          <p>Lorem ipsum, dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
