import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
export default function Footer() {
    return (
        <footer className="mt-20">
            <div className="w-[95%] m-auto flex flex-col gap-2 ">
                <div className="flex justify-between border-b-[0.1rem] border-gray-400">
                    <p className="text-4xl">a-tom.</p>
                    <div className="flex gap-2">
                        <FaFacebook className="text-2xl" />
                        <FaInstagram className="text-2xl" />
                        <FaLinkedin className="text-2xl" />
                        <FaTwitter className="text-2xl" />
                    </div>
                </div>
                <div className="justify-between flex">
                    <div className="flex gap-16 text-sm text-gray-400">
                        <p>About</p>
                        <p>Contact</p>
                        <p>Terms & Privacy</p>
                    </div>
                    <p className="text-sm text-gray-400 ">copyright 2023</p>
                </div>
            </div>
        </footer>
    )
}