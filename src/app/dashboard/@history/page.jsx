"use client";
import React from "react";

export default function TravelHistory() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="bg-white shadow-lg rounded-lg p-8 text-center max-w-lg">
                <h1 className="text-2xl font-semibold text-gray-700 mb-4">Travel History</h1>
                <p className="text-lg text-gray-500 mb-4">You don't have any travel history yet.</p>
                <p className="text-gray-500 mb-4">Start planning your trips and booking your travels to see your history here.</p>
                <a
                    href="/destinations"
                    className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                >
                    Explore Destinations
                </a>
            </div>
        </div>
    );
}
