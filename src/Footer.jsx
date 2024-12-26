import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-[#000] text-[#aaa] p-5 pt-14">
      <div className="max-w-[1200px] m-auto">
        <div className="sm:hidden">
          <BrandInfo />
          <QuickLinks />
          <SocialMedia />
          <ContactInfo />
        </div>

        <div className="hidden sm:flex justify-center lg:hidden">
          <div className="mr-16 md:mr-8">
            <BrandInfo />
            <div className="md:hidden">
              <SocialMedia />
            </div>
            <ContactInfo />
          </div>
          <div className="md:mr-8">
            <QuickLinks />
          </div>
          <div className="hidden md:block">
            <SocialMedia />
          </div>
        </div>

        <div className="hidden lg:flex justify-between px-5">
          <BrandInfo />
          <QuickLinks />
          <ContactInfo />
          <SocialMedia />
        </div>
      </div>

      <div className="max-w-[1200px] m-auto text-center mt-14 pt-5 border-t-[1px] border-[#ffffff40]">
        Made by <a href="https://www.linkedin.com/in/ujjwal-paul" target="_blank" className="text-[skyblue]"><i>@Ujjwal</i></a>
      </div>
    </div>
  );
}

function BrandInfo() {
  return (
    <div className="max-w-[270px]">
      <p className="text-[2.5rem] font-[700] text-[#ddd] mb-[-14px] "><NavLink to="/" className="relative top-[-14px]  ">UrbanStore</NavLink></p>
      <p className="mb-8">Trendy fashion for the modern city lifestyle. Style, comfort, and quality, all in one place.</p>
    </div>
  );
}

function SocialMedia() {
  return (
    <div>
      <p className="text-[#ddd] font-[700] mb-4">SOCIAL MEDIA</p>
      <div className="flex max-w-[200px] justify-between mb-8">
        <FaFacebook className="hover:text-[#fff] transition-color duration-200 text-[2rem] mr-5" />
        <FaInstagram className="hover:text-[#fff] transition-color duration-200 text-[2rem] mr-5" />
        <FaXTwitter className="hover:text-[#fff] transition-color duration-200 text-[2rem] mr-5" />
        <FaPinterestSquare className="hover:text-[#fff] transition-color duration-200 text-[2rem]" />
      </div>
    </div>
  );
}

function QuickLinks() {
  return (
    <div>
      <p className="text-[#ddd] font-[700] mb-2">QUICK LINKS</p>
      <div className="flex flex-col mb-8">
        <NavLink to="/" className="mb-2 hover:text-[#fff] transition-color duration-200">Home</NavLink>
        <NavLink to="about" className="mb-2 hover:text-[#fff] transition-color duration-200">About</NavLink>
        <NavLink to="blog" className="mb-2 hover:text-[#fff] transition-color duration-200">Blog</NavLink>
        <NavLink to="events" className="mb-2 hover:text-[#fff] transition-color duration-200">Events</NavLink>
        <NavLink to="community" className="mb-2 hover:text-[#fff] transition-color duration-200">Community</NavLink>
        <NavLink to="contacts" className="hover:text-[#fff] transition-color duration-200">Contact Us</NavLink>
      </div>
    </div>
  );
}

function ContactInfo() {
  return (
    <div>
      <p className="text-[#ddd] font-[700]">CONTACT INFO</p>
      <div>
        <p className="my-2"><MdEmail className="inline mr-1" /> contact@urbanstore.com </p>
        <p><FaPhone className="inline mr-1" /> +91 9800098000 </p>
      </div>
    </div>
  );
}