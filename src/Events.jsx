import Button from "./Button";


export default function Events() {
    return (
        <div className="">
            <div className="relative h-[350px] w-full">
                <p className="absolute m-auto inset-0 flex items-center justify-center text-[#fff] text-[3.5rem] text-center font-[700]">Workshops & Events</p>
                <img className="h-full w-full object-cover" src="/cover.jpg" alt="community" loading="lazy" />
            </div>

            <div className="bg-[green] px-5 pt-20 pb-14 text-center">
                <p className="uppercase text-[#E53637] font-[700] tracking-[2px] mb-10">Workshops & Events</p>
                <p className="font-[700] text-[2.5rem] leading-[2.5rem]  mb-5">Urban Workshops and Events</p>
                <p className="text-[#555]">Discover handwoven cloths from artisans across India. Every purchase supports traditional craftsmanship.</p>
            </div>

            <div className="bg-[red]">
                <div>
                    <img src="https://cdn.pixabay.com/photo/2024/12/13/10/23/woman-9264738_1280.jpg" alt="dress" loading="lazy" />
                    <div>
                        <p>Urban Royalty Red</p>
                        <p>Learn how to drape a cloths confidently for any occasion</p>
                    </div>
                </div>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2022/12/04/07/03/woman-7633843_1280.jpg" alt="dress" loading="lazy" />
                    <div>
                        <p>Urban Royalty Blue</p>
                        <p>Explore the history and craftsmanship of cloths from different regions</p>
                    </div>
                </div>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2021/03/22/16/07/woman-6115105_1280.jpg" alt="dress" loading="lazy" />
                    <div>
                        <p>Urban Royalty Sky</p>
                        <p>Modern styling hacks to incorporate sarees into your wardrobe</p>
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
                <p className="lg:w-1/2 flex items-center text-center py-24 px-12">“The saree isn’t just an outfit; it’s a story woven into six yards of elegance. Whether you’re a saree veteran or someone curious about its charm, you’re in the right place.”</p>
                <img className="lg:w-1/2 h-[400px] object-cover" src="https://cdn.pixabay.com/photo/2017/08/06/22/52/blouse-2597205_640.jpg" alt="cloth img" loading="lazy" />
            </div>

        </div>
    );
}