 import Link from "next/link";

export default function NoData({ params }) {
  const { type } = params;

  const titles = {
    about: "About Page",
    "how-it-works": "How It Works",
    testimonials: "Testimonials",
    contact: "Contact Page",
  };

  const pageTitle = titles[type] || "No Data Found";

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      
      {/* 404 */}
      <h1 className="text-7xl font-bold text-gray-300">404</h1>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">
        {pageTitle}
      </h2>

      {/* Description */}
      <p className="text-gray-500 mt-2 max-w-md">
        This page is currently unavailable or under development.
      </p>

      {/* Button */}
      <Link
        href="/"
        className="mt-6 bg-[rgba(161,29,40,1)] text-white px-6 py-2 rounded-lg hover:bg-[rgba(140,25,35,1)] transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}