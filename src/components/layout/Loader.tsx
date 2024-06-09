'use client';

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Loader() {
    const loaderRef: React.RefObject<HTMLDivElement> =useRef() as any
    useEffect(() => {
        const intervalId=setInterval(() => {
            
        },)
        setTimeout(() => {
            let count = 0;
            const intervalId = setInterval(() => {
                if (count == 101) {
                    clearInterval(intervalId)
                    document.getElementsByTagName('body')[0].style.overflowX = 'hidden'
                    document.getElementsByTagName('body')[0].style.overflowY = 'visible'
                }
                loaderRef.current!.style.transform = `translateX(${count}%)`
                count+=1
            },5)
            // document.getElementsByTagName('body')[0].style.overflowX = 'hidden'
            // document.getElementsByTagName('body')[0].style.overflowY = 'visible'
            // loaderRef.current!.style.transform ='translateX(100%)'
        },2000)
    },[])
    return (
        <>
            <div ref={loaderRef} className=" loader absolute flex z-[2222222222222222] justify-center items-center bg-black w-full h-full top-0">
                <div className="h-1/2 w-1/2 flex justify-center">
                    <Image className="w-1/2 h-full animate-bounce" src={'/images/loader/loader.jpg'} alt="loader" width={300} height={400}/>
                </div>
            </div>
        </>
    )
}