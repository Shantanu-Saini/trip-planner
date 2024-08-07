import { useState } from 'react';

const cities = [
    "Delhi", "Mumbai", "Bangalore", "Kolkata", "Chennai", "Lucknow", "Ayodhya", "Varanasi", "Bhopal", "Guwahati"
];

export default function TrainBooking({ city }) {
    const [fromCity, setFromCity] = useState("");
    const [passengerCount, setPassengerCount] = useState(1);
    const [passengers, setPassengers] = useState([{ name: "", age: "" }]);
    const [date, setDate] = useState("");
    const [trainClass, setTrainClass] = useState("Sleeper");

    const handlePassengerChange = (index, field, value) => {
        const newPassengers = [...passengers];
        newPassengers[index][field] = value;
        setPassengers(newPassengers);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            fromCity,
            toCity: city,
            date,
            passengerCount,
            passengers,
            trainClass
        };
        console.log(formData);
    };

    const handleClear = () => {
        setFromCity("");
        setDate("");
        setPassengerCount(1);
        setPassengers([{ name: "", age: "" }]);
        setTrainClass("Sleeper");
    };

    return (
        <div className="min-h-screen w-full bg-gray-100 p-8">
            <div className="max-w-full mx-auto bg-white p-8 rounded shadow">
                <h1 className="text-3xl font-bold text-center mb-6">Book Your Train</h1>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className='flex space-x-4 w-full'>
                        <div>
                            <label className="block text-gray-700">From</label>
                            <select
                                className="w-full p-2 border rounded"
                                value={fromCity}
                                onChange={(e) => setFromCity(e.target.value)}
                                required
                            >
                                <option value="">Select city</option>
                                {cities.map((city, index) => (
                                    <option key={index} value={city}>{city}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-gray-700">To</label>
                            <input
                                type="text"
                                className="w-full p-2 border rounded"
                                value={city}
                                readOnly
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700">Travel Date</label>
                            <input
                                type="date"
                                className="w-full p-2 border rounded"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700">Number of Passengers</label>
                        <input
                            type="number"
                            min="1"
                            className="w-full p-2 border rounded"
                            value={passengerCount}
                            onChange={(e) => {
                                setPassengerCount(e.target.value);
                                setPassengers(Array.from({ length: e.target.value }, () => ({ name: "", age: "" })));
                            }}
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700">Train Class</label>
                        <div className="flex items-center space-x-4">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="trainClass"
                                    value="Sleeper"
                                    checked={trainClass === "Sleeper"}
                                    onChange={(e) => setTrainClass(e.target.value)}
                                />
                                <span className="ml-2">Sleeper</span>
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="trainClass"
                                    value="1AC"
                                    checked={trainClass === "1AC"}
                                    onChange={(e) => setTrainClass(e.target.value)}
                                />
                                <span className="ml-2">1AC</span>
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="trainClass"
                                    value="2AC"
                                    checked={trainClass === "2AC"}
                                    onChange={(e) => setTrainClass(e.target.value)}
                                />
                                <span className="ml-2">2AC</span>
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="trainClass"
                                    value="3AC"
                                    checked={trainClass === "3AC"}
                                    onChange={(e) => setTrainClass(e.target.value)}
                                />
                                <span className="ml-2">3AC</span>
                            </label>
                        </div>
                    </div>

                    {passengers.map((passenger, index) => (
                        <div key={index} className="space-y-2">
                            <h2 className="text-lg font-semibold">Passenger {index + 1}</h2>
                            <div>
                                <label className="block text-gray-700">Name</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded"
                                    value={passenger.name}
                                    onChange={(e) => handlePassengerChange(index, "name", e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Age</label>
                                <input
                                    type="number"
                                    className="w-full p-2 border rounded"
                                    value={passenger.age}
                                    onChange={(e) => handlePassengerChange(index, "age", e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    ))}

                    <div className='flex space-x-4'>
                        <button
                            type="button"
                            className="w-full py-2 bg-white text-red-600 border border-red-600 rounded hover:bg-red-500 hover:text-white transition-all duration-300"
                            onClick={handleClear}
                        >
                            Clear
                        </button>
                        <button
                            type="submit"
                            className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-all duration-300"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
