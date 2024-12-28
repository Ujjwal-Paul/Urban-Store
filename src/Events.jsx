import Button from "./Button";

export default function Events() {
    return (
        <div>
            <div className="relative h-[350px] w-full">
                <p className="absolute m-auto inset-0 flex items-center justify-center text-[#fff] text-[3.5rem] text-center font-[700]">Workshops & Events</p>
                <img className="h-full w-full object-cover" src="/cover.jpg" alt="community" loading="lazy" />
            </div>

            <div className="px-5 pt-20 pb-14 text-center">
                <p className="uppercase text-[#E53637] font-[700] tracking-[2px] mb-10">Workshops & Events</p>
                <p className="font-[700] text-[2.5rem] leading-[2.5rem] mb-5">Urban Workshops and Events</p>
                <p className="text-[#555]">Discover handwoven cloths from artisans across India. Every purchase supports traditional craftsmanship.</p>
            </div>

            <div className="px-5">
                <div className="flex flex-wrap sm:w-[600px] lg:w-full max-w-[1200px] m-auto">
                    <div className="w-full sm:w-[300px] lg:flex-1 px-2 mb-12">
                        <img className="h-[300px] w-full object-cover object-top" src="/dress-1.jpg" alt="dress" loading="lazy" />
                        <div className="relative bg-[#fff] m-auto w-[80%] mt-[-25px] p-5 z-10">
                            <p className="font-[700] text-[1.2rem] leading-[1.5rem] mb-2">Urban Royal Glod</p>
                            <p>Learn how to drape a cloths confidently for any occasion</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-[300px] lg:flex-1 px-2 mb-12">
                        <img className="h-[300px] w-full object-cover object-top" src="/dress-2.jpg" alt="dress" loading="lazy" />
                        <div className="relative bg-[#fff] m-auto w-[80%] mt-[-25px] p-5 z-10">
                            <p className="font-[700] text-[1.2rem] leading-[1.5rem] mb-2">Urban Royal Olive</p>
                            <p>Explore the history and craftsmanship of cloths from different regions</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-[300px] lg:flex-1 px-2">
                        <img className="h-[300px] w-full object-cover object-top" src="/dress-3.jpg" alt="dress" loading="lazy" />
                        <div className="relative bg-[#fff] m-auto w-[80%] mt-[-25px] p-5 z-10">
                            <p className="font-[700] text-[1.2rem] leading-[1.5rem] mb-2">Urban Royal Almond</p>
                            <p>Modern styling hacks to incorporate sarees into your wardrobe</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-14 mb-24 px-5 max-w-[1200px] m-auto">
                <div className="text-center mb-5">
                    <p className="font-[700] text-[#333] text-[1.5rem] mb-5">Registration Form</p>
                    <p>Join our next event! Sign up here to reserve your spot</p>
                </div>

                <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
                    <div className="flex flex-col md:flex-row justify-between">
                        <input className="md:w-[32%] md:max-w-[375px] outline-none border-[1px] border-[#00000030] py-2 px-4 mb-5" type="text" placeholder="Name" />
                        <input className="md:w-[32%] md:max-w-[375px] outline-none border-[1px] border-[#00000030] py-2 px-4 mb-5" type="email" placeholder="Email" />
                        <input className="md:w-[32%] md:max-w-[375px] outline-none border-[1px] border-[#00000030] py-2 px-4 mb-5" type="phone" placeholder="Phone" />
                    </div>

                    <textarea className="outline-none border-[1px] border-[#00000030] py-2 px-4 mb-5 resize-none" rows={4} placeholder="Enter Your queries"></textarea>

                    <Button message="Register" />
                </form>
            </div>

            <div className="bg-[#eee] flex flex-col lg:flex-row">
                <p className="lg:w-1/2 flex items-center text-center py-24 px-12">“The cloths isn’t just an outfit; it’s a story woven into six yards of elegance. Whether you’re a cloths veteran or someone curious about its charm, you’re in the right place.”</p>
                <img className="lg:w-1/2 h-[400px] object-cover" src="/cloths.jpg" alt="cloth img" loading="lazy" />
            </div>
        </div>
    );
}