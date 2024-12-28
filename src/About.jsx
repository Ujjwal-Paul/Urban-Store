


export default function About() {
    return (
        <div className="">
            <div className="relative h-[350px] w-full">
                <p className="absolute m-auto inset-0 flex items-center justify-center text-[#fff] text-[3.5rem] text-center font-[700]">About Us</p>
                <img className="h-full w-full object-cover" src="/cover.jpg" alt="community" loading="lazy" />
            </div>

            <div className="px-5 pt-20 pb-14 text-center">
                <p className="uppercase text-[#E53637] font-[700] tracking-[2px] mb-10">About Us</p>
                <p className="font-[700] text-[2.5rem] leading-[2.5rem] mb-5">About Urban Store</p>
                <p className="text-[#555]">We provide quality products and services, focused on meeting the needs of our customers with care and reliability.</p>
            </div>

        </div>
    );
}