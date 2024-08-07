"use client";
import BookingData from "@/assets/bookingData/bookingData";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  const handleSelect = (item, event) => {
    const city = event.target.value;
    // console.log(item + city );
    const formattedCityName = city.toLowerCase().replace(/\s+/g, '-');
    const formattedItem = item.toLowerCase().replace(/\s+/g, '-');
    const url = `/bookings/${formattedItem}/${formattedCityName}`;
    // console.log(url);
    router.push(url);
  }

  return (
    <div className="flex flex-col max-h-full bg-gray-600 text-white w-64 p-6">
      <h1 className="text-2xl font-bold mb-6">Booking Options</h1>

      <div className="space-y-6">
        {BookingData.map((entry, index) => (
          <div key={index}>

            {Object.values(entry.ticketsFor).map((item, i) => (
              <div key={i} className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Book {item}</h2>

                <select
                  className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(event) => handleSelect(item, event)}
                >
                  {Object.values(entry.cities).map((cityname, i) => (
                    <option key={i} value={cityname}>
                      {cityname}
                    </option>
                  ))}
                </select>

              </div>
            ))}

          </div>
        ))}
      </div>
    </div>
  );
}
