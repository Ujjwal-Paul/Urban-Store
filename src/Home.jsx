
import { FaRegCalendarCheck } from "react-icons/fa6";

import NumberTicker from "./utils/NumberTicker";
import Button from "./Button";
import { NavLink } from "react-router-dom";



export default function Home() {
    return (
        <div className="">







            <div className="bg-[#eee] py-32">
                <div className="px-5 max-w-[1200px] m-auto">
                    <p className="text-[1.5rem] mb-4">The cloths isn’t just an outfit; it’s a story woven into six yards of elegance. Whether you’re a cloths veteran or someone curious about its charm, you’re in the right place.</p>

                    <NavLink to="about">
                        <Button message="Explore More" />
                    </NavLink>
                </div>
            </div>

            <div className="w-[85vw] max-w-[1100px] m-auto flex flex-wrap justify-between mt-20 mb-20">
                <div className="flex items-center mr-5">
                    <p className="font-[700] text-[4rem] mr-1"> <NumberTicker value={35} /> </p>
                    <p className="font-[700] text-[1.2rem] leading-[1.5rem] text-[#333] h-fit">Total <br /> Categories</p>
                </div>
                <div className="flex items-center mr-5">
                    <p className="font-[700] text-[4rem] mr-1"> <NumberTicker value={12} /> </p>
                    <p className="font-[700] text-[1.2rem] leading-[1.5rem] text-[#333] h-fit">Total <br /> Countries</p>
                </div>
                <div className="flex items-center">
                    <p className="font-[700] text-[4rem] mr-1"> <NumberTicker value={97} />% </p>
                    <p className="font-[700] text-[1.2rem] leading-[1.5rem] text-[#333] h-fit">Happy <br /> Customers</p>
                </div>
            </div>

            <div className="px-5 pt-5 pb-10 text-center max-w-[1200px] m-auto border-t border-t-[#00000030]">
                <p className="uppercase text-[#E53637] font-[700] tracking-[2px] mb-5">Shops</p>
                <p className="font-[700] text-[2.5rem] leading-[2.5rem] mb-2">Support Local Artisans</p>
                <p className="text-[#555]">Discover handwoven cloths from artisans across India. Every purchase supports traditional craftsmanship.</p>
            </div>




            <div className="bg-[red]">
                images will be here
            </div>




            <div className="px-5 pt-20 pb-10 text-center">
                <p className="uppercase text-[#E53637] font-[700] tracking-[2px] mb-5">Latest News</p>
                <p className="font-[700] text-[2.5rem] leading-[2.5rem]">Fashion New Trends</p>
            </div>

            <div className="px-5 mb-24">
                <div className="flex flex-wrap sm:w-[600px] lg:w-full max-w-[1200px] m-auto">
                    <div className="w-full sm:w-[300px] lg:flex-1 px-2 mb-12">
                        <img className="h-[300px] w-full object-cover object-top" src="/christmas.jpg" alt="dress" loading="lazy" />
                        <div className="relative bg-[#fff] m-auto w-[80%] mt-[-25px] p-5 z-10">
                            <p className="text-[#666] text-[0.9rem] mb-2"> <FaRegCalendarCheck className="inline mt-[-5px] mr-1" /> 25 December 2024 </p>
                            <p className="font-[700] text-[1.2rem] leading-[1.5rem] mb-4">Christmas Couture: Weaving Festive Magic into Your Holiday Wardrobe</p>
                            <p className="relative cursor-pointer w-fit uppercase text-[0.9rem] font-[600] tracking-[2px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#000] after:w-full hover:after:w-1/3 hover:after:bg-[red] after:transition-w after:duration-300">Read More</p>
                        </div>
                    </div>

                    <div className="w-full sm:w-[300px] lg:flex-1 px-2 mb-12">
                        <img className="h-[300px] w-full object-cover object-top" src="/halloween.jpg" alt="dress" loading="lazy" />
                        <div className="relative bg-[#fff] m-auto w-[80%] mt-[-25px] p-5 z-10">
                            <p className="text-[#666] text-[0.9rem] mb-2"> <FaRegCalendarCheck className="inline mt-[-5px] mr-1" /> 31 October 2024 </p>
                            <p className="font-[700] text-[1.2rem] leading-[1.5rem] mb-4">Spooky Chic: Transforming Halloween Fashion with Dark Elegance</p>
                            <p className="relative cursor-pointer w-fit uppercase text-[0.9rem] font-[600] tracking-[2px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#000] after:w-full hover:after:w-1/3 hover:after:bg-[red] after:transition-w after:duration-300">Read More</p>
                        </div>
                    </div>

                    <div className="w-full sm:w-[300px] lg:flex-1 px-2">
                        <img className="h-[300px] w-full object-cover object-top" src="/navratri.jpg" alt="dress" loading="lazy" />
                        <div className="relative bg-[#fff] m-auto w-[80%] mt-[-25px] p-5 z-10">
                            <p className="text-[#666] text-[0.9rem] mb-2"> <FaRegCalendarCheck className="inline mt-[-5px] mr-1" /> 3 October 2024 </p>
                            <p className="font-[700] text-[1.2rem] leading-[1.5rem] mb-4">Navratri: A Festival of Faith, Dance, and Devotion</p>
                            <p className="relative cursor-pointer w-fit uppercase text-[0.9rem] font-[600] tracking-[2px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#000] after:w-full hover:after:w-1/3 hover:after:bg-[red] after:transition-w after:duration-300">Read More</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}