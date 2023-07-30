import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { useState } from "react";
import { portfoliologo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);


    const resumeUrl = "https://drive.google.com/file/d/1x9FFWe5YTtmvblJsadLyKpObK_bLwQ-x/view?usp=drive_link";
  
   

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={portfoliologo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Saad Zireeni &nbsp;
            <span className="sm:block hidden">| Software Developer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title || (active === "resume" && link.title === "Download Resume") ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] cursor-pointer font-medium`}
              onClick={() => setActive(link.title)}
            >
              <a href={link.title === "Download Resume" ? resumeUrl : `#${link.id}`}target={link.title === "Download Resume" ? "_blank" : ""}>{link.title}</a>
              
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain curosr-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 absolute black-gradient top-20 right-0 mx-4 my-2 min-2-[140px] z-10 rounded-xl`}
          >
             <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
