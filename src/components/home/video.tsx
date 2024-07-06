'use client';

import { useEffect, useRef } from "react";

export default function Video() {
    const videoRef = useRef<any>()
    useEffect(() => {
        const video = (videoRef.current) as any as HTMLVideoElement
        video.play()
        video.onended = (e) => {
            const target: any = e.target
            target.play()
        }
    })
    return (
        <>
            <video id='video' ref={videoRef} className="w-full h-full object-contain  " muted>
                <source src={`/videos/Copy of Website Banner (1).mp4`} type="video/mp4" />
            </video>
        </>
    )
}