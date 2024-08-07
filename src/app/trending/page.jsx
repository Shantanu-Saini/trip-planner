"use client";
import trendingDestinations from "@/assets/trendingDestinations/trendingDestinations";
import TrendingDests from "@/components/TrendingDests";
import Link from "next/link";

export default function Trending() {
    return (
        <div className="min-h-screen w-full bg-gray-100 flex flex-col items-center py-8">
            <div className="w-full bg-purple-600 text-white py-4 mb-8 shadow-lg">
                <h1 className="text-3xl text-center">Trending Destinations</h1>
            </div>

            <div className="grid grid-cols-3 gap-8 w-full bg-white rounded-lg shadow-lg p-8">
                {
                    trendingDestinations.map((destination) => (
                        <Link href={`/trending/${destination.destinationId}`} key={destination.destinationId}>
                            <TrendingDests
                                key={destination.destinationId}
                                image={destination.image}
                                name={destination.name}
                                description={destination.description}
                                visitors = {destination.visits}
                            />
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}
