"use client"
import Link from "next/link";
import { LiaHotelSolid } from "react-icons/lia";
import { RiBus2Line } from "react-icons/ri";
import { FaTrainSubway } from "react-icons/fa6";
import { FaPlaneDeparture } from "react-icons/fa6";

export default function DestinationCard({ image, name, description }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col">
      <img src={image} alt={name} className="w-full h-80 object-cover" />
      <div className="flex-1 p-4 space-y-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
        <div className="flex items-center justify-around mt-4">
          <Link href={`/bookings/hotels/${name}`}>
            <div className="flex flex-col items-center text-blue-600 hover:text-blue-800 transition">
              <LiaHotelSolid className="w-8 h-8 mb-1" />
              <span className="text-sm">Hotel</span>
            </div>
          </Link>
          <Link href={`/bookings/buses/${name}`}>
            <div className="flex flex-col items-center text-blue-600 hover:text-blue-800 transition">
              <RiBus2Line className="w-8 h-8 mb-1" />
              <span className="text-sm">Bus</span>
            </div>
          </Link>
          <Link href={`/bookings/trains/${name}`}>
            <div className="flex flex-col items-center text-blue-600 hover:text-blue-800 transition">
              <FaTrainSubway className="w-8 h-8 mb-1" />
              <span className="text-sm">Train</span>
            </div>
          </Link>
          <Link href={`/bookings/flights/${name}`}>
            <div className="flex flex-col items-center text-blue-600 hover:text-blue-800 transition">
              <FaPlaneDeparture className="w-8 h-8 mb-1" />
              <span className="text-sm">Flight</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
