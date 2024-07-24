  import React from 'react';
  import { FaHome, FaShoppingCart} from 'react-icons/fa';
  import { Link } from 'react-router-dom';
  import { RiTeamFill } from "react-icons/ri";

  const Sidebar = () => {
    return (
      <div className='sideBar grid h-full sticky top-0 w-64 bg-emerald-300 text-black shadow-2xl'>
        <div className="logoDiv flex flex-col items-center p-6">
        <img src="logobhoomi.png" alt="Image m1" className="w-28 h-24 bg-inputColor" />
        <h2 className="text-3xl font-bold text-red-950 mb-2 mt-4 font-yatra ">Bhoomi</h2>
       
      </div>

        <div className="menuDiv">
          <h3 className="text-2xl font-bold h3FontSize px-6 mb-5">QUICK MENU</h3>
          <ul className="menuLists grid gap-3 px-6">
            <li className="listItem relative">
              <Link to="/what-is-bhoomi" className="menuLink text-black font-weight-500 transition flex items-center hover:scale-105 duration-300">
                <FaHome className="mr-2" size={24}/>
                <span className="text-sm">What is Bhoomi</span>
              </Link>
            </li>
            <li className="listItem relative">
              <Link to="/bhoomikart" className="bhoomiKart text-black font-weight-500 transition flex items-center hover:scale-105 duration-300">
                <FaShoppingCart className="mr-2" size={24} />
                <span className="text-sm">BhoomiKart</span>
              </Link>
            </li>
            <li className="listItem relative">
              <Link to="/about-us" className="menuLink text-black font-weight-500 transition flex items-center hover:scale-105 duration-300">
              <RiTeamFill className="mr-2" size={24} />
                <span className="text-sm">About Us</span>
              </Link>
            </li>
          </ul>
        </div>



        <div className="sideBarCard m-4  bg-white text-black p-4 rounded-2xl mt-4">
          <div className="cardContent relative">
            <div className="circle1 absolute h-100 w-100 top-negative-50 right-negative-50 bg-green-300 rounded-full opacity-70"></div>
            <div className="circle2 absolute h-150 w-150 bottom-negative-80 right-negative-50 bg-green-300 rounded-full opacity-70 z-1"></div>
            <h3 className="text-lg font-bold mb-2 h3FontSize">Help Center</h3>
            <p className="text-sm mb-4 font-weight-500">
              Having trouble? Please contact us.
            </p>
            <button onClick={()=>{window.location.href = "/contact-us"; }}  className='btn bg-emerald-300 text-black py-1 ml-3 mt-4 px-4 rounded-2xl h-14  hover:scale-105 duration-150'>
              GO TO HELP CENTER
            </button>
          </div>
        </div>
      </div>
    );
  }

  export default Sidebar;
