"use client";
import Image from "next/image";
import heroImg from "../../public/images/heroImg.jpg";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col items-center py-8">
      <div className="relative bg-white shadowg p-6 mb-6 text-center overflow-hidden w-full h-full">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImg}
            alt="hero image"
            layout="fill"
            className="brightness-50 object-cover"
          />
        </div>
        <div className="relative z-5 text-lg text-gray-700">
          <h1 className="text-4xl font-bold text-violet-800 mb-4">Book My Trip</h1>
          <p className="text-white">Your one-stop solution for planning and managing your travels.</p>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-6 mx-auto">
        <h2 className="text-3xl font-bold text-violet-800 mb-6 text-center">Best Travel Plans</h2>
        <div className="flex space-x-6">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Delhi ➡ Mumbai</h3>
            <p className="text-gray-600">Flights start from: <span className="font-semibold text-gray-800">₹6000/-</span></p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Delhi ➡ Bangalore</h3>
            <p className="text-gray-600">Flights start from: <span className="font-semibold text-gray-800">₹7000/-</span></p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Bangalore ➡ Mumbai</h3>
            <p className="text-gray-600">Flights start from: <span className="font-semibold text-gray-800">₹4000/-</span></p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Varanasi ➡ Bangalore</h3>
            <p className="text-gray-600">Flights start from: <span className="font-semibold text-gray-800">₹6000/-</span></p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mx-auto mt-8">
        <h2 className="text-3xl font-bold text-violet-800 mb-6 text-center">Why Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex items-center space-x-4">
            <div className="flex-shrink-0">
              <svg className="w-12 h-12 text-violet-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm1-13h-2v6h2v-6zm-2 8h2v2h-2v-2z"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Easy Booking</h3>
              <p className="text-gray-600">Streamlined process for a hassle-free booking experience.</p>
            </div>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex items-center space-x-4">
            <div className="flex-shrink-0">
              <svg className="w-12 h-12 text-violet-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 10h-4v2h4v6H7v-6h4v-2H7v-3h10v3z"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Best Prices</h3>
              <p className="text-gray-600">Competitive prices for the best value on your bookings.</p>
            </div>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex items-center space-x-4">
            <div className="flex-shrink-0">
              <svg className="w-12 h-12 text-violet-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 8.5V20c0 1.104-.896 2-2 2H5c-1.104 0-2-.896-2-2V8.5C3 7.396 3.896 6.5 5 6.5h14c1.104 0 2 .896 2 2zm-2 0H5V20h14V8.5z"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Detailed Overview</h3>
              <p className="text-gray-600">Comprehensive details to help you make informed decisions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
