import { useState } from "react";

/*  This line of code is coming from assests**/
import { close, logo, menu } from "../assets";

/** This line of code is comming from constants index.js **/
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar ">
      {/* Here Logo Started and spicifing the size of Logo */}
      <img src={logo} alt="logo" className="w-[124px] h-[32px]" />
          {/*************  Here Logo Ends ***************/}

        {/* Here we Started our Mobile Nav bar means Responsive*/}
      <ul className="list-name sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] 
          ${index === navLinks.length -1 ? 'mr-0' : 'mr-10'} text-white`}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        {/* Here we spifiying the Menu Image means Hamburgure Menu for Responsiveness */}
        <img src={toggle ? close : menu} 
        alt="menu"
        className="w-[28px] h-[28px] object-contain"
        // Here we are spicifing the Toggle function when we click it its show us cross X
        // callback function
        onClick={()=> setToggle((prev) => !prev)}
        />
        {/* From here we Started our Menu Open when we click it will open menu */}
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient 
        absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>

          {/* Here we are making same ul list like above but it will open as Responsive */}
          <ul className="list-name flex flex-col justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] 
          ${index === navLinks.length -1 ? 'mr-0' : 'mb-4'} text-white`}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
          /* Ul Lists Ends here */
        ))}
      </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
