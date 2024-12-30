
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const [open, setOpen] = useState(false);

  function NavLinkClass({ isActive }) {
    return `relative mx-4 my-1 md:my-0 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-[400ms] hover:after:w-full ${isActive ? 'after:w-full' : ''}`;
  }

  return (
    <div className="md:flex justify-between items-center p-5 max-w-[1200px] m-auto">
      <div className="flex justify-between items-center">
        <p className="text-[1.5rem] font-[700]"><NavLink to="/">UrbanStore</NavLink></p>
        <IoMenu className={`md:hidden text-[1.5rem] ${open ? 'hidden' : 'block'}`} onClick={() => setOpen((e) => !e)} />
        <IoClose className={`md:hidden text-[1.5rem] ${open ? 'block' : 'hidden'}`} onClick={() => setOpen((e) => !e)} />
      </div>

      <ul className={`${open ? "flex" : "hidden"} md:flex flex-wrap justify-center mt-5 md:mt-0 font-[600]`}>
        <NavLink to="/" className={NavLinkClass}>Home</NavLink>
        <NavLink to="about" className={NavLinkClass}>About</NavLink>
        <NavLink to="blog" className={NavLinkClass}>Blog</NavLink>
        <NavLink to="events" className={NavLinkClass}>Events</NavLink>
        <NavLink to="community" className={NavLinkClass}>Community</NavLink>
        <NavLink to="contacts" className={NavLinkClass}>Contact Us</NavLink>
      </ul>
    </div>
  );
}