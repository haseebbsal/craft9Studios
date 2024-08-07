import Video from "@/components/home/video";
import { Italiana } from "next/font/google";
import Image from "next/image";
const italiana=Italiana({
  weight: "400",
  subsets:['latin']
})
export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-16 sm:gap-28  md:pt-[0rem] pt-[5.5rem]">
        <div className=" relative z-[4444000] bg-black">
          {/* <Image priority className="w-full h-full object-cover" src={'/videos/Banner Gif.gif'} alt="banner" width={800} height={1100}/> */}
          <Video/>
          {/* <div className={`absolute bottom-8 left-[39%] z-4 text-white text-6xl ${italiana.className}`}>
            <p>of tomorrow</p>
            <p>for tomorrow</p>
          </div> */}
        </div>
        <div className="flex gap-16 flex-wrap justify-center">
          <div className="flex flex-col gap-2 text-white text-3xl">
            <div className="h-[25rem]"><Image className="w-full h-full" src={`/images/home/Creatives (1).png`} width={200} height={200} alt="branding"/></div>
            <p className="text-center">Branding</p>
          </div>
          <div className="flex flex-col gap-2 text-white text-3xl">
            <p className="text-center">Creatives</p>
            <div className="h-[25rem]"><Image className="w-full h-full" src={`/images/home/Website Banner.png`} width={200} height={200} alt="branding" /></div>
          </div>
          <div className="flex flex-col gap-2 text-white text-3xl">
            <div className="h-[25rem]"><Image className="w-full h-full" src={`/images/home/Production.png`} width={200} height={200} alt="branding" /></div>
            <p className="text-center">Production</p>
          </div>
          <div className="flex flex-col gap-2 text-white text-3xl">
            <p className="text-center">Strategy</p>
            <div className="h-[25rem]"><Image className="w-full h-full" src={`/images/home/Strategy.png`} width={200} height={200} alt="branding" /></div>
          </div>
        </div>
        <div>
          <div className="w-1/2 m-auto text-white">
            <p className="text-2xl">What is a-tom.</p>
            <p className="mt-4 text-sm">a-tom, a content-first, creative studio that creates meaningful advertising & promotional content to help brands gain more visibility by entertaining & engaging the target audience. From social media content creation to corporate and TV commercials, we do it all.</p>
          </div>
        </div>
        <h1 className={`${italiana.className} text-center text-6xl` }>what we can help you with</h1>
        <div className=" relative h-[15rem] sm:h-[35rem]" style={{ background:'url("/images/home/background-banner.png")',backgroundSize:'cover'}} >
          <Image className="  w-full h-full  object-contain " src={`/images/home/product123.svg`} alt="brand-identity" width={300} height={300} />
          <div className="flex absolute top-8 right-8 flex-col gap-4 z-3 items-end mr-8 mt-4 sm:mt-4 sm:mt-16">
            <p>BRANDING & IDENTITY</p>
            <div className="flex flex-col gap-2">
              <p>Brand strategy</p>
              <p>Digital strategy</p>
              <p>Brand Narrative</p>
              <p>Visual Identity</p>
              <p>Web design</p>
            </div>
          </div>
        </div>
        <div className=" relative h-[15rem] sm:h-[35rem]" style={{ background: 'url("/images/home/background-banner.png")', backgroundSize: 'cover' }} >
          <Image className="  w-full h-full  object-contain " src={`/images/home/product123.svg`} alt="brand-identity" width={300} height={300} />
          <div className="flex absolute top-8 right-8 flex-col gap-4 z-3 items-end mr-8 mt-4 sm:mt-4 sm:mt-16">
            <p>BRANDING & IDENTITY</p>
            <div className="flex flex-col gap-2">
              <p>Brand strategy</p>
              <p>Digital strategy</p>
              <p>Brand Narrative</p>
              <p>Visual Identity</p>
              <p>Web design</p>
            </div>
          </div>
        </div>
        <div className=" relative h-[15rem] sm:h-[35rem]" style={{ background: 'url("/images/home/background-banner.png")', backgroundSize: 'cover' }} >
          <Image className="  w-full h-full  object-contain " src={`/images/home/product123.svg`} alt="brand-identity" width={300} height={300} />
          <div className="flex absolute top-8 right-8 flex-col gap-4 z-3 items-end mr-8 mt-4 sm:mt-4 sm:mt-16">
            <p>BRANDING & IDENTITY</p>
            <div className="flex flex-col gap-2">
              <p>Brand strategy</p>
              <p>Digital strategy</p>
              <p>Brand Narrative</p>
              <p>Visual Identity</p>
              <p>Web design</p>
            </div>
          </div>
        </div>
        <div>
          <div className={`${italiana.className} w-1/2 m-auto text-2xl font-extralight`}>
            <p className="text-center">HANGING OUT</p>
            <p className="text-center">WITH TOP PARTNERS</p>
          </div>
        </div>
        <div className='flex flex-col gap-4 items-center'>
          <div className="flex justify-center flex-wrap gap-4 sm:gap-20" >
            <div className="h-[10rem]">
              <Image className="h-full w-full" src={`/images/home/footerLogos/footer-logo-1.png`} alt="footer1" width={100} height={100} />
            </div>
            <div className="h-[10rem]">
              <Image className="h-full w-full" src={`/images/home/footerLogos/footer-logo-2.png`} alt="footer2" width={100} height={100} />
            </div>
            <div className="h-[10rem]">
              <Image className="h-full w-full" src={`/images/home/footerLogos/footer-logo-3.png`} alt="footer3" width={100} height={100} />
            </div>
            <div className="h-[10rem]">
              <Image className="h-full w-full" src={`/images/home/footerLogos/footer-logo-4.png`} alt="footer4" width={100} height={100} />
            </div>
            <div className="h-[10rem]">
              <Image className="h-full w-full" src={`/images/home/footerLogos/footer-logo-4.png`} alt="footer4" width={100} height={100} />
            </div>
            <div className="h-[10rem]">
              <Image className="h-full w-full" src={`/images/home/footerLogos/footer-logo-1.png`} alt="footer1" width={100} height={100} />
            </div>
            <div className="h-[10rem]">
              <Image className="h-full w-full" src={`/images/home/footerLogos/footer-logo-2.png`} alt="footer2" width={100} height={100} />
            </div>
            <div className="h-[10rem]">
              <Image className="h-full w-full" src={`/images/home/footerLogos/footer-logo-3.png`} alt="footer3" width={100} height={100} />
            </div>
            <div className="h-[10rem]">
              <Image className="h-full w-full" src={`/images/home/footerLogos/footer-logo-4.png`} alt="footer4" width={100} height={100} />
            </div>
            <div className="h-[10rem]">
              <Image className="h-full w-full" src={`/images/home/footerLogos/footer-logo-4.png`} alt="footer4" width={100} height={100} />
            </div>
          </div>
        </div>

        <div className="h-[0.1rem] bg-gray-400"></div>
      </div>
    </>
  );
}
