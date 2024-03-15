import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faAd,faBroadcastTower } from "@fortawesome/free-solid-svg-icons";

const Service = () => {
  return (
    <>
      <div className="heading" data-aos="zoom-in" >
        <img
          src="src\assets\Flower.png"
          style={{
            height: "20%",
            width: "12%",
            position: "absolute",
            top: "130px",
            left: "5%",
            
          }}
        />

        <h1
          className="mt-3 font-bold text-3xl text-violet-700 text-center "
          style={{ padding: "130px" }}
        >
          # Our Services
        </h1>
        <img
          src="src\assets\Flower.png"
          style={{
            height: "20%",
            width: "12%",
            position: "absolute",
            top: "130px",
            right: "5%",
            
          }}
        />
      </div>

      <div className="flex justify-between m-2 p-2">
  {/* Service Card 1 */}
  <div
    className="service-card flex flex-col items-center bg-white rounded-lg shadow-md p-6 mb-4"
    data-aos="zoom-in"
  >
    <div className="icon-container bg-blue-500 rounded-full flex items-center justify-center w-12 h-16 mb-4">
    <FontAwesomeIcon icon={faBroadcastTower} className="text-white text-2xl" />
    </div>

    <div className="service-info ">
      <h2 className="font-bold text-xl mb-2">Branding</h2>
      <p className="text-gray-700">
        Lorem ipsum, dolor sit amet, consectetur adipisicing elit.
        Cupiditate quidem at quis. Lorem ipsum dolor sit amet.
      </p>
    </div>
  </div>


  <div style={{ width: '50px' }}></div>

  {/* Service Card 2 */}
  <div
    className="service-card flex flex-col items-center bg-white rounded-lg shadow-md p-6 mb-4"
    data-aos="zoom-in"
  >
    <div className="icon-container bg-blue-500 rounded-full flex items-center justify-center w-12 h-16 mb-4">
      <FontAwesomeIcon icon={faAd} className="text-white text-2xl" />
    </div>

    <div className="service-info">
      <h2 className="font-bold text-xl mb-2">Advertising</h2>
      <p className="text-gray-700">
        Lorem ipsum, dolor sit amet, consectetur adipisicing elit.
        Cupiditate quidem at quis. Lorem ipsum dolor sit amet.
      </p>
    </div>
  </div>
</div>


    </>
  );
};

export default Service;
