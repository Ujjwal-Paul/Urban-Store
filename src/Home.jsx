
import { FaRegCalendarCheck } from "react-icons/fa6";



export default function Home() {
    return (
        <div className="">




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
                        <img className="h-[300px] w-full object-cover object-top" src="/navratri.jpg" alt="dress" loading="lazy" />
                        <div className="relative bg-[#fff] m-auto w-[80%] mt-[-25px] p-5 z-10">
                            <p className="text-[#666] text-[0.9rem] mb-2"> <FaRegCalendarCheck className="inline mt-[-5px] mr-1" /> 31 October 2024 </p>
                            <p className="font-[700] text-[1.2rem] leading-[1.5rem] mb-4">Spooky Chic: Transforming Halloween Fashion with Dark Elegance</p>
                            <p className="relative cursor-pointer w-fit uppercase text-[0.9rem] font-[600] tracking-[2px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#000] after:w-full hover:after:w-1/3 hover:after:bg-[red] after:transition-w after:duration-300">Read More</p>
                        </div>
                    </div>

                    <div className="w-full sm:w-[300px] lg:flex-1 px-2">
                        <img className="h-[300px] w-full object-cover object-top" src="/halloween.jpg" alt="dress" loading="lazy" />
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