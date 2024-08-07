"use client";

export default function Footer() {
  return (
    <div className="flex items-center justify-between px-16 py-14 bg-slate-800">
        <div>
            <ul className="flex items-center justify-around space-x-4">
                <li className="text-lg text-gray-100">f</li>
                <li className="text-lg text-gray-100">M</li>
                <li className="text-lg text-gray-100">I</li>
            </ul>
        </div>
        <div>
            <p className="text-gray-100 text-xl">&copy;2024 My Trip</p>
            <p className="text-gray-100 text-lg">Across India</p>
        </div>
    </div>
  )
}
