import { IoCaretForwardOutline } from "react-icons/io5";
import { Italiana } from "next/font/google";
import Image from "next/image";
import { FaCaretDown } from "react-icons/fa";
const italiana = Italiana({
    weight: "400",
    subsets: ['latin']
})
export default function Creatives() {
    return (
        <>
            <div className="flex flex-col gap-16">
                <div className="sm:pt-44 pt-[9rem] sm:pl-44">
                    <div className="flex gap-2 justify-center sm:justify-start items-center">
                        <div className="flex flex-col">
                            <p className={`text-[5rem] ${italiana.className}`}>explore</p>
                            <p className="self-end text-xl text-gray-500">creatives</p>
                        </div>
                        <IoCaretForwardOutline className="text-2xl" />
                    </div>
                </div>
                <div className="flex justify-center flex-wrap gap-4">
                    <div className="relative flex justify-center items-center w-[18rem] h-[20rem]">
                        <Image className="w-full absolute top-0 h-full object-fill " src={'/images/creatives/food.png'} width={100} height={250} alt="individual" />
                        <a href="#food" className={`${italiana.className} cursor-pointer text-4xl text-center !font-semibold flex items-center flex-col gap-2 z-[1212]`}>
                            food and beverages
                            <FaCaretDown className="text-2xl"/>
                        </a>
                    </div>
                    <div className="relative flex justify-center items-center w-[18rem] h-[20rem]">
                        <Image className="w-full absolute top-0 h-full object-fill " src={'/images/creatives/fashion.png'} width={100} height={250} alt="individual" />
                        <a href="#fashion" className={`${italiana.className} cursor-pointer text-4xl text-center !font-semibold flex items-center flex-col gap-2 z-[1212]`}>
                            fashion
                            <FaCaretDown className="text-2xl" />
                        </a>
                    </div>
                    <div className="relative flex justify-center items-center w-[18rem] h-[20rem]">
                        <Image className="w-full absolute top-0 h-full object-fill " src={'/images/creatives/corporate.png'} width={100} height={250} alt="individual" />
                        <a href="#corporate"  className={`${italiana.className} cursor-pointer text-4xl text-center !font-semibold flex items-center flex-col gap-2 z-[1212]`}>
                            corporate
                            <FaCaretDown className="text-2xl" />
                        </a>
                    </div>
                    <div className="relative flex justify-center items-center w-[18rem] h-[20rem]">
                        <Image className="w-full absolute top-0 h-full object-fill " src={'/images/creatives/bts.png'} width={100} height={250} alt="individual" />
                        <a href="#bts" className={`${italiana.className} cursor-pointer text-4xl text-center !font-semibold flex items-center flex-col gap-2 z-[1212]`}>
                        bts
                            <FaCaretDown className="text-2xl" />
                        </a>
                    </div>

                </div>
                <div className="p-8 flex flex-col gap-8">
                    <div className={`${italiana.className} text-7xl justify-end flex`}><h1 id="food" className="text-end min-w-1/4">food and
                        beverages</h1>
                    </div>
                    <div className="flex flex-wrap justify-center sm:justify-start sm:gap-4">
                        <div className="flex flex-col  gap-4">
                            <div className="w-[16rem] h-[18rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[16rem] h-[12rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[16rem] h-[20rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[16rem] h-[15rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                           
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="w-[16rem] h-[10rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[18rem] h-[18rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[18rem] h-[15rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[18rem] h-[22rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>

                        </div>
                        <div className="flex flex-col  gap-4">
                            <div className="w-[16rem] h-[18rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[16rem] h-[12rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[16rem] h-[20rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[16rem] h-[15rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>

                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="w-[16rem] h-[10rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[18rem] h-[18rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[18rem] h-[15rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[18rem] h-[22rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>

                        </div>
                    </div>
                    
                </div>
                <div className="p-8 flex flex-col gap-8">
                    <div className={`${italiana.className} text-7xl justify-end flex`}><h1 id="fashion" className="text-end min-w-1/4">fashion</h1>
                    </div>
                    <div className="flex gap-8">
                        <div className="flex flex-col  gap-4">
                            <div className="w-[16rem] h-[18rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[16rem] h-[12rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[16rem] h-[20rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[16rem] h-[15rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>

                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="w-[16rem] h-[10rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[18rem] h-[18rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[18rem] h-[15rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[18rem] h-[22rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>

                        </div>
                        <div className="flex flex-col  gap-4">
                            <div className="w-[16rem] h-[18rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[16rem] h-[12rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[16rem] h-[20rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[16rem] h-[15rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>

                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="w-[16rem] h-[10rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[18rem] h-[18rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[18rem] h-[15rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[18rem] h-[22rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>

                        </div>
                    </div>

                </div>
                <div className="p-8 flex flex-col gap-8">
                    <div className={`${italiana.className} text-7xl justify-end flex`}><h1 id="corporate" className="text-end min-w-1/4">corporate</h1>
                    </div>
                    <div className="flex gap-8">
                        <div className="flex flex-col  gap-4">
                            <div className="w-[16rem] h-[18rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[16rem] h-[12rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[16rem] h-[20rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[16rem] h-[15rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>

                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="w-[16rem] h-[10rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[18rem] h-[18rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[18rem] h-[15rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[18rem] h-[22rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>

                        </div>
                        <div className="flex flex-col  gap-4">
                            <div className="w-[16rem] h-[18rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[16rem] h-[12rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[16rem] h-[20rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[16rem] h-[15rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>

                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="w-[16rem] h-[10rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[18rem] h-[18rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[18rem] h-[15rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[18rem] h-[22rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>

                        </div>
                    </div>

                </div>
                <div className="p-8 flex flex-col gap-8">
                    <div className={`${italiana.className} text-7xl justify-end flex`}><h1 id="bts" className="text-end min-w-1/4">bts</h1>
                    </div>
                    <div className="flex gap-8">
                        <div className="flex flex-col  gap-4">
                            <div className="w-[16rem] h-[18rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[16rem] h-[12rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[16rem] h-[20rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[16rem] h-[15rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>

                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="w-[16rem] h-[10rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[18rem] h-[18rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[18rem] h-[15rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[18rem] h-[22rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>

                        </div>
                        <div className="flex flex-col  gap-4">
                            <div className="w-[16rem] h-[18rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[16rem] h-[12rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[16rem] h-[20rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[16rem] h-[15rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>

                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="w-[16rem] h-[10rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[18rem] h-[18rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[18rem] h-[15rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>
                            <div className="w-[18rem] h-[22rem]">
                                <Image className="w-full h-full object-fill " src={'/images/creatives/imagecopy.png'} width={100} height={250} alt="individual" />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}