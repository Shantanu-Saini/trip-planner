"use client";
import { useState, useEffect } from 'react';
import hotelsData from '@/assets/hotelsData/hotelsData';

export default function HotelBooking({ city }) {
    const [checkInDate, setCheckInDate] = useState("");
    const [checkOutDate, setCheckOutDate] = useState("");
    const [beds, setBeds] = useState(1);
    const [people, setPeople] = useState(1);
    const [availableHotels, setAvailableHotels] = useState([]);
    const [showHotels, setShowHotels] = useState(false);

    const handleClear = () => {
        setCheckInDate("");
        setCheckOutDate("");
        setBeds(1);
        setPeople(1);
        setAvailableHotels([]);
        setShowHotels(false);
    };

    const checkAvailableHotel = (city) => {
        // console.log(city);
        const cityHotels = hotelsData.find(item => item.city.toLowerCase() === city)
        // console.log(cityHotels.hotels);
        setAvailableHotels(cityHotels?.hotels || []);
        setShowHotels(true);
    }

    const handleHotelBooking = (hotelName) => {
        console.log(checkInDate, checkOutDate, beds, people, hotelName);
    }

    return (
        <div className="min-h-screen w-full bg-gray-100 p-8 relative">
            <div className="max-w-full mx-auto bg-white p-8 rounded shadow space-y-4">
                <h1 className="text-3xl font-bold text-center mb-6">Book Your Hotel</h1>

                <form className="space-y-4 w-full">
                    <div className="flex space-x-4 w-full">
                        <div>
                            <label className="block text-gray-700">Check-In Date</label>
                            <input
                                type="date"
                                className="w-full p-2 border rounded"
                                value={checkInDate}
                                onChange={(e) => setCheckInDate(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700">Check-Out Date</label>
                            <input
                                type="date"
                                className="w-full p-2 border rounded"
                                value={checkOutDate}
                                onChange={(e) => setCheckOutDate(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="flex space-x-4 w-full">
                        <div>
                            <label className="block text-gray-700">Number of Beds</label>
                            <input
                                type="number"
                                min="1"
                                className="w-full p-2 border rounded"
                                value={beds}
                                onChange={(e) => setBeds(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700">Number of People</label>
                            <input
                                type="number"
                                min="1"
                                className="w-full p-2 border rounded"
                                value={people}
                                onChange={(e) => setPeople(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                </form>
                {showHotels && (
                    <div className="mt-8 bg-gray-200 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Available Hotels</h2>
                        <ul className="space-y-2">
                            {availableHotels.map((hotel, index) => (
                                <li
                                    key={index}
                                    className="flex justify-between items-center bg-white p-4 rounded shadow"
                                >
                                    <span className="font-semibold">{hotel.name}</span>
                                    <div className='space-x-2'>
                                        <span className="text-green-600 font-semibold">₹{hotel.price}</span>
                                        <button onClick={() => handleHotelBooking(hotel.name)}>Book Now</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="flex space-x-4">
                    <button
                        className="w-full py-2 bg-white text-red-600 border border-red-600 rounded hover:bg-red-500 hover:text-white transition-all duration-300"
                        onClick={handleClear}
                    >
                        Clear
                    </button>
                    <button
                        className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-all duration-300"
                        onClick={() => checkAvailableHotel(city)}
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
}
