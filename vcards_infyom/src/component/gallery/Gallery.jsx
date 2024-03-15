import React from 'react'
import './style.css'
const Gallery = () => {
  
  return (
    <>


<div data-aos="zoom-in " >
<div>
  <img src="src\assets\smile.png"
style={{
  height:'130%',
  width:'12%',
  position: "absolute",
  top: '0px',
  right: '10%',}}/>
</div>
<div>
<img src="src\assets\camera.png"
style={{
  height:'130%',
  width:'10%',
  position: "absolute",
  left: '10%',}}/>
</div>
        <div><h1 className='mt-5  font-bold text-violet-700  text-center text-3xl m-5 p-1' ># Gallery</h1></div>
         

</div>
<div className="Gallerycontainer  flex"> 
  <div className="image-group ">
    <img src="https://cdn.pixabay.com/photo/2016/10/27/10/59/woman-1774021_1280.jpg"style={{ marginBottom: '20px' }}/>
    <img src="https://cdn.pixabay.com/photo/2017/06/15/11/36/fabric-2405104_1280.jpg" /> 
  </div>      
  <div className="center-image">
    <img src="https://cdn.pixabay.com/photo/2023/11/20/23/06/woman-8402052_1280.jpg" />
  </div>   
  <div className="image-group">
    <img src="https://cdn.pixabay.com/photo/2023/08/24/01/01/boy-8209561_1280.jpg" style={{ marginBottom: '20px' }}/>
    <img src="https://cdn.pixabay.com/photo/2017/10/16/16/21/fabric-2857681_1280.jpg" />
  </div>   
</div>
 

    </>
  )
}

export default Gallery
