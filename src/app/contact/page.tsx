import { Italiana } from "next/font/google";
import Image from "next/image";
const italiana = Italiana({
    weight: "400",
    subsets: ['latin']
})

export default function ContactUs() {
    return (
        <>
            <div className="flex flex-col gap-20">
                <div className="pt-40 px-10 flex flex-col gap-4 items-center">
                    <h1 className={`${italiana.className} text-6xl text-center`}>connect with us</h1>
                    <div className="w-[15rem] h-[15rem]">
                        <Image priority className="w-full h-full" src={'/images/contact/contact-us.jpg'} alt="contact us" width={200} height={300}/>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <p>Feel free to drop us a mail at :</p>
                        <p>hello@atomcontent.studio, for any requirement, or</p>
                    </div>
                    <div className="flex gap-16">
                        <a href="https://wa.me/+923073498849" target="_blank" className="px-4 py-2 border rounded-full cursor-pointer">Become a client</a>
                        <button className="px-4 py-2 border rounded-full">Join our family</button>
                    </div>
                </div>
            </div>
        </>
    )
}


