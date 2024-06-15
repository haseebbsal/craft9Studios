'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
export default function Navbar() {
    const [dropOption, setDropOption] = useState<null | '1' | '2'>(null)
    const pathname=usePathname()
    return (
        <div className="bg-black p-4 fixed flex justify-center z-[1000] w-[100vw]">
            <div className="flex justify-center flex-col sm:flex-row sm:justify-between flex-wrap sm:w-[70%] items-center">
                <Link href={'/'} className="text-2xl">a-tom.</Link>
                <div className="flex gap-8">
                    <div className="relative">
                        <button onClick={() => setDropOption((prev) => {
                            if (dropOption == '1') {
                                return null
                            }
                            return '1'
                        })} className="flex gap-2 items-center">works <MdKeyboardArrowDown /></button>
                        <div className={`${dropOption=='1'?'flex':'hidden'} flex-col absolute gap-2 bg-[#282828] p-4 top-[2.5rem] rounded-md `}>
                            <Link className="text-sm" href={'/branding'}>branding</Link>
                            <Link className="text-sm" href={'/creatives'}>creatives</Link>
                            <Link className="text-sm" href={'/video'}>video</Link>
                            <Link className="text-sm" href={'/products'}>products</Link>
                        </div>
                    </div>
                    <Link className={`${pathname=='/about'?'text-blue-400':'text-white'}`} href={'/about'}>about</Link>
                    <div className="relative">
                        <button onClick={() => setDropOption((prev) => {
                            if (dropOption == '2') {
                                return null
                            }
                            return '2'
                        })} className="flex gap-2 items-center">case studies <MdKeyboardArrowDown /></button>
                        <div className={`${dropOption == '2' ? 'flex' : 'hidden'} flex-col absolute gap-2 bg-[#282828] p-4 top-[2.5rem] rounded-md w-full`}>
                            <Link className="text-sm text-right" href={'/asuka'}>asuka</Link>
                        </div>
                    </div>
                    <Link className={`${pathname == '/contact' ? 'text-blue-400' : 'text-white'}`} href={'/contact'}>contact</Link>
                </div>
            </div>
        </div>
    )
}