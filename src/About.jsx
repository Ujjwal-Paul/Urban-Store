

import NumberTicker from "./utils/NumberTicker";


export default function About() {
    return (
        <div className="">
            <div className="relative h-[350px] w-full">
                <p className="absolute m-auto inset-0 flex items-center justify-center text-[#fff] text-[3.5rem] text-center font-[700]">About Us</p>
                <img className="h-full w-full object-cover" src="/cover.jpg" alt="community" loading="lazy" />
            </div>

            <div className="px-5 pt-20 pb-10 text-center">
                <p className="uppercase text-[#E53637] font-[700] tracking-[2px] mb-10">About Us</p>
                <p className="font-[700] text-[2.5rem] leading-[2.5rem] mb-5">About Urban Store</p>
                <p className="text-[#555]">We provide quality products and services, focused on meeting the needs of our customers with care and reliability.</p>
            </div>

            <div className="px-5">
                <img className="w-[85vw] max-w-[1200px] m-auto object-cover object-top" src="/store.jpg" alt="store" loading="lazy" />
            </div>


            <div className="bg-[none] w-[85vw] max-w-[1200px] m-auto flex flex-wrap md:flex-nowrap justify-center mt-5 mb-10">
                <div className="md:mr-5 mb-4 md:mb-0">
                    <p className="font-[700] text-[1.5rem]">Mission and Vision</p>
                    <p>Our mission is to drive innovation and preserve tradition, offering unparalleled quality and service to our customers while fostering sustainable growth. Our vision is to empower communities by creating opportunities and building a future where cultural heritage and modern aspirations coexist harmoniously.</p>
                </div>
                <div className="md:mr-5 mb-4 md:mb-0">
                    <p className="font-[700] text-[1.5rem]">Empowering Saree Industries</p>
                    <p>We are dedicated to revitalizing the saree industry by promoting artisanal craftsmanship and providing a platform for traditional weavers. Through innovation and collaboration, we aim to bridge the gap between heritage and modernity, ensuring the saree industry thrives in a globalized world.</p>
                </div>
                <div>
                    <p className="font-[700] text-[1.5rem]">Why Choose Us?</p>
                    <p>We combine tradition with innovation, offering authentic and high-quality products that celebrate cultural heritage. With a commitment to excellence, customer satisfaction, and sustainable practices, we stand apart as a trusted partner in delivering timeless elegance and value.</p>
                </div>
            </div>



            <div className="w-[85vw] max-w-[1100px] m-auto flex flex-wrap justify-between mt-28 mb-16">
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





            <div className="bg-[#eee] flex flex-col lg:flex-row">
                <p className="lg:w-1/2 flex items-center text-center py-24 px-12">“The cloths isn’t just an outfit; it’s a story woven into six yards of elegance. Whether you’re a cloths veteran or someone curious about its charm, you’re in the right place.”</p>
                <img className="lg:w-1/2 h-[400px] object-cover" src="/cloths.jpg" alt="cloth img" loading="lazy" />
            </div>

        </div>
    );
}