"use client";
import destinations from '@/assets/destinationData/destinations';
import destinationReviews from '@/assets/destinationData/destinationReviews';
import { useParams } from "next/navigation";
import Link from "next/link";
import { LiaHotelSolid } from "react-icons/lia";
import { RiBus2Line } from "react-icons/ri";
import { FaTrainSubway } from "react-icons/fa6";
import { FaPlaneDeparture } from "react-icons/fa6";

export default function DestinationDetail() {
    const params = useParams();
    const { destinationId } = params;
    const destination = destinations.find((dest) => dest.destinationId === parseInt(destinationId));
    const reviews = destinationReviews.find((dest) => dest.destinationId === parseInt(destinationId));

    return (
        <div className="min-h-screen w-full bg-gray-100 p-6">
            <div className="relative bg-white shadow rounded-lg p-6 mb-6 overflow-hidden">
                <img
                    src={destination.image}
                    alt={destination.name}
                    className="absolute inset-0 w-full h-full object-cover brightness-50"
                />
                <div className="relative z-5">
                    <div className='flex items-start justify-between space-x-4'>
                        <div>
                            <h1 className="text-4xl font-bold text-white mb-4">{destination.name}</h1>
                            <p className="text-lg text-white">{destination.description}</p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h2 className="text-2xl font-bold text-white mb-2">Places to Visit</h2>
                        <ul className="list-disc list-inside text-white">
                            {destination.placesToVisit.map((place, index) => (
                                <li key={index}>{place}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-6">
                        <h2 className="text-2xl font-bold text-white mb-2">Reviews</h2>
                        <p className="text-lg text-white">Rating: {reviews.reviews} / 5</p>
                        <div className="mt-2">
                            {reviews.comments.map((comment, index) => (
                                <p key={index} className="text-white mb-2">- {comment}</p>
                            ))}
                        </div>
                    </div>
                    <div className="mt-6 text-center">
                        <h2 className="text-2xl font-bold text-white mb-2">Book Your Trip</h2>
                        <div className="flex items-center justify-around mt-4">
                            <Link href={`/bookings/hotels/${destination.name}`}>
                                <div className="flex flex-col items-center text-white hover:text-blue-300 transition">
                                    <LiaHotelSolid className="w-8 h-8 mb-1" />
                                    <span className="text-sm">Hotel</span>
                                </div>
                            </Link>
                            <Link href={`/bookings/buses/${destination.name}`}>
                                <div className="flex flex-col items-center text-white hover:text-blue-300 transition">
                                    <RiBus2Line className="w-8 h-8 mb-1" />
                                    <span className="text-sm">Bus</span>
                                </div>
                            </Link>
                            <Link href={`/bookings/trains/${destination.name}`}>
                                <div className="flex flex-col items-center text-white hover:text-blue-300 transition">
                                    <FaTrainSubway className="w-8 h-8 mb-1" />
                                    <span className="text-sm">Train</span>
                                </div>
                            </Link>
                            <Link href={`/bookings/flights/${destination.name}`}>
                                <div className="flex flex-col items-center text-white hover:text-blue-300 transition">
                                    <FaPlaneDeparture className="w-8 h-8 mb-1" />
                                    <span className="text-sm">Flight</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Link href="/destinations">
                <p className="underline text-blue-700">Back to Destinations</p>
            </Link>
        </div>
    );
}
