import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaDribbble,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#040847] text-white border-t border-gray-600 py-14 px-6 md:px-16">
      <div className="grid md:grid-cols-3 gap-12 text-base text-gray-300">
      
        <div>
           <Image
  src="/fotter.png"   
  alt="Inner Me Logo"
  width={160}
  height={75}
  className="mb-4"
/>
          <p className="text-gray-400 leading-relaxed text-base">
            We are committed to providing accurate, reliable, and affordable
            blood testing services to support your health and well-being.
          </p>
        </div>

        
        <div className="flex flex-col gap-3 text-base">
          <a href="#" className="hover:text-white transition">
            Home
          </a>
          <Link href="/no-data" className="hover:text-white transition">
            About
          </Link>
          <Link href="#" className="hover:text-white transition">
            How it Works
          </Link>
        </div>

   
        <div>
          <div className="flex flex-col gap-3 mb-5 text-base">
            <Link href="#" className="hover:text-white transition">
              Testimonial
            </Link>
            <Link href="#" className="hover:text-white transition">
              Contact
            </Link>
            <a href="#" className="hover:text-white transition">
              Lets do it!
            </a>
          </div>

   
          <div className="flex items-center gap-4 mt-4 text-lg">
            <FaFacebookF className="cursor-pointer hover:text-blue-400 transition" />
            <FaTwitter className="cursor-pointer hover:text-sky-400 transition" />
            <FaLinkedinIn className="cursor-pointer hover:text-blue-500 transition" />
            <FaDribbble className="cursor-pointer hover:text-pink-400 transition" />
          </div>
        </div>
      </div>
    </footer>
  );
}
