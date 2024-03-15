import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBirthdayCake, faEnvelope, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons';

const PersonalInformation = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:jackie@gmail.com';
  };

  const handleMobileClick = () => {
    window.location.href = 'tel:+9178541254789';
  };

  const handleBirthdayClick = () => {
    
    window.location.href = '/birthday-details';
  };

  const handleLocationClick = () => {
   
    window.location.href = '/location-details';
  };

  return (
    <>
    
      <div className="container flex w-full h-[150px] mt-16">
        <div className="row flex"  >
          <div className="email w-[200px] h-[100px] m-4 info_box email relative -top-14 text-white ml-8 hover:bg-pink-400" onClick={handleEmailClick} data-aos="zoom-in-down"  data-aos-duration="800"  >

            <div className="icon bg-pink-500 w-6 pl-1 rounded-full">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 " />
            </div>
            <p className='text-black'>E-mail address</p>
            <p className='font-bold text-black'>jackie@gmail.com</p>
          </div>

          <div className="email w-[200px] h-[100px] m-4 info_box email relative -top-14 text-white ml-8 hover:bg-orange-500 " onClick={handleMobileClick} data-aos="zoom-in-down"  data-aos-duration="800"  >
            <div className="icon bg-orange-400 w-6 pl-1 rounded-full">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
            </div>
            <p className='text-black'>Mobile number</p>
            <p className='font-bold text-black'>+91 78541254789</p>
          </div>

        </div>

        <div className="row flex ">
          <div className="email w-[200px] h-[100px] m-4 info_box email relative -top-14 text-white ml-8 hover:bg-blue-300" onClick={handleBirthdayClick} data-aos="zoom-in-down"  data-aos-duration="800"  >
            <div className="icon bg-blue-400 w-6 pl-1 rounded-full">
              <FontAwesomeIcon icon={faBirthdayCake} className="mr-2" />
            </div>
            <p className='text-black'>Date of birthday</p>
            <p className='font-bold text-black'>9 Nov2002</p>
          </div>

          <div className="mobile w-[200px] h-[100px] m-4 info_box email relative -top-14 text-white ml-8 hover:bg-purple-300" onClick={handleLocationClick} data-aos="zoom-in-down"  data-aos-duration="800"  >
            <div className="icon bg-purple-500 w-6 pl-1 rounded-full">
              <FontAwesomeIcon icon={faLocation} className="mr-2" />
            </div>
            <p className='text-black'>Location</p>
            <p className='font-bold text-black'>New York, USA</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInformation;
