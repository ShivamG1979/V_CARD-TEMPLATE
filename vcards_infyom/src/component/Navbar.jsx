import React, { useState, useEffect } from "react";
import SmoothScroll from "smooth-scroll";
import Home from "./home/Home";
import Appointment from "./Appointment";
import Service from "./Service";
import Gallery from "./gallery/Gallery";
import Products from "./products/Products";
import Blog from "./Blog/Blog";
import Business from "./BussnessHours";
import Contact_Icon from "./Contact_Icon";
import PersonalInformation from "./personal_data/Personal_information";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Contact_Us from "./Contact_US/Contact_Us";
import PaymentOnline from "./Payment/PaymentOnline";

// import './Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  useEffect(() => {
    // Initialize smooth-scroll when the component mounts
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 1000,
    });

    // Clean up the smooth-scroll instance when the component unmounts
    return () => {
      scroll.destroy();
    };
  }, []); // Empty dependency array to run the effect only once on mount

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(true);
  };

  return (
    <div  >
      {/* <nav className={`navbar ${isNavOpen ? "open" : ""} pt-[50%]`}>
  
        <ul>
          <li className=" bg-black p-3">
            <a href="#home" onClick={closeNav}>
              home
            </a>
          </li>
          <li className="bg-black mt-2">
            <a href="#Contact" onClick={closeNav}>
              Contact
            </a>
          </li>
          <li className="bg-black mt-2">
            <a href="#Appointment" onClick={closeNav}>
              Appointment
            </a>
          </li>
          <li className="bg-black mt-2">
            <a href="#Gallery" onClick={closeNav}>
              Gallery
            </a>
          </li>
          <li className="bg-black mt-2">
            <a href="#Blog" onClick={closeNav}>
              Blog
            </a>
          </li>
          <li className="bg-black mt-2">
            <a href="#Enquiry" onClick={closeNav}>
              Enquiry
            </a>
          </li>
        </ul>
      </nav> */}

      {/* Main content */}
      <div className=" w-full sm:w-[45%] h-[full] sm:m-auto "style={{backgroundColor:"#f7e6ff"}}>
        

        {/* Navigation bar */}

        <div className="homepage m-2 p-2" id="home">
          <Home></Home>
        </div>

        <div className="appointment" id="Contact">
          <PersonalInformation></PersonalInformation>
        </div>

        <div className="Service" id="service">
          <Service></Service>
        </div>

        <div className="appointment" id="Appointment">
          <Appointment></Appointment>
        </div>
        

        <div className="gallery" id="Gallery">
          <Gallery></Gallery>
        </div>

       
        <div className="product" id="Product">
          <Products></Products>
        </div>

        <div className="blog" id="Blog">
          <Blog></Blog>
        </div>
        <div className="business" id="business">
          <Business></Business>
        </div>



        <div className="enquiry" id="Enquiry">
          <PaymentOnline></PaymentOnline>
        </div>

        <div className="blog" id="Enquiry">
          <Contact_Us></Contact_Us>
        </div>
      </div>
      </div>
    
  );
  
};

export default Navbar;
