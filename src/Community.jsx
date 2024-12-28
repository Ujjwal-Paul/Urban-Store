import { useState, useEffect } from "react";

import Button from "./Button";

const defaultTime = 513253; // Seconds

export default function Community() {
    const [time, setTime] = useState(defaultTime);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const dd = String(Math.floor(time / 86400)).padStart(2, '0');
    const hh = String(Math.floor((time % 86400) / 3600)).padStart(2, '0');
    const mm = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
    const ss = String(time % 60).padStart(2, '0');

    return (
        <div>
            <div className="relative h-[350px] w-full">
                <p className="absolute m-auto inset-0 flex items-center justify-center text-[#fff] text-[3.5rem] text-center font-[700]">Community</p>
                <img className="h-full w-full object-cover" src="/cover.jpg" alt="community" loading="lazy" />
            </div>

            <div className="bg-[#eee] px-5 pt-28 pb-44 text-center">
                <p className="uppercase text-[#E53637] font-[700] tracking-[2px] mb-10">Community</p>
                <p className="font-[700] text-[2.5rem] leading-[2.5rem]  mb-5">Connect with the Urban Community</p>
                <p className="text-[#555]"><span className="text-[1.4rem] mr-1">Love cloths?</span>So do we! Join our vibrant community of urban enthusiasts.</p>
            </div>

            <div className="flex justify-center mt-[-100px] px-5">
                <img className="w-[90vw] max-w-[1100px] max-h-[500px] object-cover rounded-[5px]" src="/group-pic.jpg" alt="community img" loading="lazy" />
            </div>

            <div className="mt-14 px-5 w-full max-w-[700px] m-auto">
                <div className="mb-14">
                    Share your urban looks, stories, and tips.<br /><br />
                    Participate in online challenges, like “Item of the Week.”<br /><br />
                    Follow our social media to see your photos featured on our platform
                </div>

                <div className="bg-[#eee] px-5 py-24">
                    <p className="uppercase text-[#E53637] font-[700] tracking-[2px] mb-5">Item of the Week</p>
                    <p className="font-[700] text-[2.5rem] leading-[2.5rem] mb-10">Upcoming online challenges</p>

                    <div className="flex justify-between text-center mb-10">
                        <span>
                            <p className="font-[700] text-[2.5rem] leading-[2.5rem] mb-5">{dd}</p>
                            <p>Days</p>
                        </span>
                        <span className="font-[700] text-[2.5rem] leading-[2.5rem] mb-5">:</span>
                        <span>
                            <p className="font-[700] text-[2.5rem] leading-[2.5rem] mb-5">{hh}</p>
                            <p>Hours</p>
                        </span>
                        <span className="font-[700] text-[2.5rem] leading-[2.5rem] mb-5">:</span>
                        <span>
                            <p className="font-[700] text-[2.5rem] leading-[2.5rem] mb-5">{mm}</p>
                            <p>Minutes</p>
                        </span>
                        <span className="font-[700] text-[2.5rem] leading-[2.5rem] mb-5">:</span>
                        <span>
                            <p className="font-[700] text-[2.5rem] leading-[2.5rem] mb-5">{ss}</p>
                            <p>Seconds</p>
                        </span>
                    </div>

                    <Button message="REGISTER NOW" />
                </div>
            </div>

            <div className="mt-14 mb-24 px-5 max-w-[700px] m-auto">
                <div className="text-center mb-5">
                    <p className="font-[700] text-[#333] text-[1.5rem] mb-5">Ask for Advice</p>
                    <p>Discuss your cloths-related queries with community members</p>
                </div>

                <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
                    <div className="flex flex-col md:flex-row justify-between">
                        <input className="md:w-[210px] outline-none border-[1px] border-[#00000030] py-2 px-4 mb-5" type="text" placeholder="Name" />
                        <input className="md:w-[210px] outline-none border-[1px] border-[#00000030] py-2 px-4 mb-5" type="email" placeholder="Email" />
                        <input className="md:w-[210px] outline-none border-[1px] border-[#00000030] py-2 px-4 mb-5" type="phone" placeholder="Phone" />
                    </div>

                    <textarea className="outline-none border-[1px] border-[#00000030] py-2 px-4 mb-5 resize-none" rows={4} placeholder="Enter Your queries"></textarea>

                    <Button message="Submit" />
                </form>
            </div>
        </div>
    );
}