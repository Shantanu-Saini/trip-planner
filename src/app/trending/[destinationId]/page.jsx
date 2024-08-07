"use client"
import trendingDestinations from "@/assets/trendingDestinations/trendingDestinations"
import destinationReviews from "@/assets/destinationData/destinationReviews"
import { useParams } from "next/navigation"
import Link from "next/link"

export default function trendingDestinationDetails() {
    const params = useParams();
    // console.log(params)
    const { destinationId } = params
    const destination = trendingDestinations.find((dest) => dest.destinationId === parseInt(destinationId))
    // console.log(destination);
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
                </div>
            </div>
            <Link href="/trending">
                <p className="underline text-blue-700">Back to trending Destinations</p>
            </Link>
        </div>
    )
}
