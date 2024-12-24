import Button from "./Button";

export default function Contacts() {
    return (
        <div>
            <iframe className="h-[520px] w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d547.6314681799336!2d88.47178584957932!3d22.578702838065603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02757023e0d4d3%3A0x50236d4275482829!2sBiswa%20Bangla%20Gate!5e0!3m2!1sen!2sin!4v1735016677399!5m2!1sen!2sin"></iframe>

            <div className="max-w-[1200px] m-auto flex flex-wrap justify-center md:justify-between px-5 mt-[110px] mb-[100px] md:flex-row md:flex-nowrap">
                <div>
                    <p className="text-[#E53637] font-[700] tracking-[2px]">INFORMATION</p>
                    <p className="font-[700] text-[3rem]">Contact Us</p>
                    <p className="max-w-[520px] text-[#555]">Discover handwoven cloths from artisans across India. Every purchase supports traditional craftsmanship.</p>
                    <p className="font-[700] text-[1.5rem] mt-7 mb-1">Contact Info</p>
                    <p className="text-[#555]">Email: contact@urbanstore.com</p>
                    <p className="text-[#555]">Phone: +91 9800098000</p>
                </div>

                <form onSubmit={(e) => e.preventDefault()} className="flex flex-col w-full max-w-[520px] mt-10 md:mt-0 md:ml-5 md:w-[400px] lg:w-full">
                    <div className="flex flex-col lg:flex-row lg:justify-between">
                        <input className="h-[3rem] lg:w-[47%] p-3 outline-none border border-[#00000030] mb-8" type="text" placeholder="Name" />
                        <input className="h-[3rem] lg:w-[47%] p-3 outline-none border border-[#00000030] mb-8" type="email" placeholder="Email" />
                    </div>
                    <textarea className="p-3 outline-none border border-[#00000030] mb-8 resize-none" rows={5} placeholder="Message"></textarea>

                    <Button message="Send Message" />
                </form>
            </div>
        </div>
    );
}