 "use client";

import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import CustomButton from "../btn/page";

export default function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  // Active states
  const isHome = path === "/";
  const isMen = path.startsWith("/men");
  const isWomen = path.startsWith("/women");

  const isAbout = path.startsWith("/no-data/about");
  const isHow = path.startsWith("/no-data/how-it-works");
  const isTestimonial = path.startsWith("/no-data/testimonials");
  const isContact = path.startsWith("/no-data/contact");

  const active = isWomen ? "women" : isMen ? "men" : null;
  const showSubmenu = isMen || isWomen;

  const menuData = {
    men: [
      "Men Health’s Check",
      "Male Hormone Tests",
      "Male Fertility Tests",
      "Testosterone Tests",
      "Sport Performance Tests",
      "View All Tests",
    ],
    women: [
      "Women Health’s Check",
      "Female Hormone Tests",
      "Female Fertility Tests",
      "Thyroid Tests",
      "Sport Performance Tests",
      "View All Tests",
    ],
  };

  const activeClass = "text-red-600 border-b-2 border-red-600 pb-1";

  return (
    <header className="w-full bg-white shadow-sm">

      {/* NAVBAR */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-4">

        {/* LOGO */}
        <Image src="/logo.png" alt="logo" width={200} height={40} />

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-4 xl:gap-6 text-gray-700 font-medium text-sm xl:text-base whitespace-nowrap">

          <li className={isHome ? activeClass : ""}>
            <Link href="/">Home</Link>
          </li>

          <li className={isAbout ? activeClass : ""}>
            <Link href="/no-data/about">About</Link>
          </li>

          <li className={isHow ? activeClass : ""}>
            <Link href="/no-data/how-it-works">How It Works</Link>
          </li>

          <li className={isMen ? activeClass : ""}>
            <Link href="/men/login">Men</Link>
          </li>

          <li className={isWomen ? activeClass : ""}>
            <Link href="/women/login">Women</Link>
          </li>

          <li className={isTestimonial ? activeClass : ""}>
            <Link href="/no-data/testimonials">Testimonials</Link>
          </li>

          <li className={isContact ? activeClass : ""}>
            <Link href="/no-data/contact">Contact</Link>
          </li>
        </ul>

        {/* LOGIN */}
        <Link href="/login" className="hidden lg:block">
          <CustomButton className="bg-[#A11D28] px-4 py-2 text-sm xl:text-base">
            Login
          </CustomButton>
        </Link>

        {/* MOBILE */}
        <button className="lg:hidden" onClick={() => setOpen(true)}>
          <Bars3Icon className="w-7 h-7" />
        </button>
      </nav>

      {/* SUBMENU (DESKTOP) */}
      {showSubmenu && (
        <div className="border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-3 hidden lg:flex gap-10 text-md text-gray-700 overflow-x-auto  justify-center">
            {menuData[active].map((item, index) => (
              <span
                key={index}
                className="whitespace-nowrap cursor-pointer hover:text-red-600"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* MOBILE DRAWER */}
      <Dialog open={open} onClose={setOpen} className="lg:hidden">
        <div className="fixed inset-0 bg-black/30 z-40" />

        <Dialog.Panel className="fixed top-0 right-0 w-72 h-full bg-white z-50 p-5 shadow-lg">

          <div className="flex justify-between items-center">
            <Image src="/logo.png" alt="logo" width={120} height={50} />
            <button onClick={() => setOpen(false)}>
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

         <div className="mt-6 flex flex-col gap-5 font-medium">

  <Link
    href="/"
    onClick={() => setOpen(false)}
    className={isHome ? "text-red-600 font-semibold" : "text-gray-700"}
  >
    Home
  </Link>

  <Link
    href="/no-data/about"
    onClick={() => setOpen(false)}
    className={isAbout ? "text-red-600 font-semibold" : "text-gray-700"}
  >
    About
  </Link>

  <Link
    href="/no-data/how-it-works"
    onClick={() => setOpen(false)}
    className={isHow ? "text-red-600 font-semibold" : "text-gray-700"}
  >
    How It Works
  </Link>

  <Link
    href="/men/login"
    onClick={() => setOpen(false)}
    className={isMen ? "text-red-600 font-semibold" : "text-gray-700"}
  >
    Men
  </Link>

  <Link
    href="/women/login"
    onClick={() => setOpen(false)}
    className={isWomen ? "text-red-600 font-semibold" : "text-gray-700"}
  >
    Women
  </Link>

  <Link
    href="/no-data/testimonials"
    onClick={() => setOpen(false)}
    className={isTestimonial ? "text-red-600 font-semibold" : "text-gray-700"}
  >
    Testimonials
  </Link>

  <Link
    href="/no-data/contact"
    onClick={() => setOpen(false)}
    className={isContact ? "text-red-600 font-semibold" : "text-gray-700"}
  >
    Contact
  </Link>

</div>

          {/* MOBILE SUBMENU */}
          {showSubmenu && (
            <div className="mt-6 border-t pt-4 flex flex-col gap-3 text-sm text-gray-600">
              {menuData[active].map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          )}

        </Dialog.Panel>
      </Dialog>

    </header>
  );
}