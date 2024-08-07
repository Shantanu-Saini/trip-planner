"use client";
import destinations from "@/assets/destinationData/destinations";
import DestinationCard from "@/components/DestinationCard";
import Link from "next/link";

export default function Destinations() {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col items-center py-8">
      <div className="w-full bg-blue-600 text-white py-4 mb-8 shadow-lg">
        <h1 className="text-3xl text-center">Destinations</h1>
      </div>

      <div className="grid grid-cols-3 gap-8 w-full bg-white rounded-lg shadow-lg p-8">
        {
          destinations.map((destination) => (
            <Link href={`/destinations/${destination.destinationId}`} key={destination.destinationId}>
              <DestinationCard
                key={destination.destinationId}
                image = {destination.image}
                name={destination.name}
                description={destination.description}
              />
            </Link>
          ))
        }
      </div>
    </div>
  );
}
