import React, { useRef } from 'react';
import PhoneNumberQRCode from './PhoneNumberQRCode'; 
import './payment.css';

const PaymentOnline = () => {
  const phoneNumber = '+91 9893785834';
  const qrCodeRef = useRef(null);

  const downloadQRCode = () => {
    const canvas = qrCodeRef.current.querySelector('canvas');
    const qrCodeURL = canvas.toDataURL('image/png');

    const downloadLink = document.createElement('a');
    downloadLink.href = qrCodeURL;
    downloadLink.download = 'QRCode.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="payment_container" data-aos="flip-down">
         <div data-aos="zoom-in " >

<div>
<img src="src\assets\Hearteye.png"
style={{
  height:'160%',
  width:'11%',
  position: "absolute",
  left: '10%',}}/>
</div>
      
<h1 className='mt-5 mb-2 font-bold text-violet-700 text-center text-3xl'># QR Code</h1>

</div>
      

      <div className="flex whitebox w-[96%] m-auto text-black rounded p-6">
        <div className='flex mt-5 mx-auto'>
          {/* Image on the right side */}
          <div className='w-[200px] h-[200px] m-auto relative rounded-full overflow-hidden border-2 border-white' style={{ border: '5px solid white' }}>
            <img className='w-full h-full object-cover rounded-full' src="https://aminajasminemodel.websites.co.in/files/16261/businessdetails/16146/amina-jasmine_1537706230ZRpdXA.jpeg?v=71937104" alt="" />
          </div>
          
          {/* QR Code on the left side */}
          <div className='flex flex-col justify-center ml-5' ref={qrCodeRef}>
            <PhoneNumberQRCode phoneNumber={phoneNumber}/>
            <button onClick={downloadQRCode} className="mt-3 bg-violet-700 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded">Download  QR Code</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentOnline;
