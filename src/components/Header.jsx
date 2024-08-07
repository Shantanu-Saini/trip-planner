"use client";
import Link from "next/link";
import { HiMiniUserCircle } from "react-icons/hi2";

export default function Header() {
    // switch these to login and logout
    // const isLoggedIn = false;
    const isLoggedIn = true;

    return (
        <div className="flex items-center justify-between px-16 py-3 bg-indigo-500 top-0 sticky z-10 shadow-lg opacity-95">
            <Link href="/">
                <div className="flex flex-col items-center justify-between">
                    <h1 className="text-3xl font-semibold text-red-900">Book</h1>
                    <h1 className="text-xl text-white">My Trip</h1>
                </div>
            </Link>

            <div>
                <ul className="flex items-center justify-between space-x-6 text-lg text-white">
                    <li className="cursor-pointer font-semibold text-2xl hover:scale-105 hover:text-gray-300 transition-all duration-300 flex"><Link href="/">Home</Link></li>
                    <li className="cursor-pointer font-semibold text-2xl hover:scale-105 hover:text-gray-300 transition-all duration-300"><Link href="/destinations">Destinations</Link></li>
                    <li className="cursor-pointer font-semibold text-2xl hover:scale-105 hover:text-gray-300 transition-all duration-300"><Link href="/trending">Trending</Link></li>
                </ul>
            </div>
            <div>
                {
                    isLoggedIn ?
                        <Link href="/dashboard">
                            <HiMiniUserCircle className="text-4xl text-white shadow-xl rounded-full hover:scale-110 hover:text-slate-100 transition-all duration-300" />
                        </Link>
                        :
                        <button className="bg-white text-indigo-500 py-2 px-4 rounded-md hover:bg-gray">
                            <Link href="/login">Login/Signup</Link>
                        </button>
                }
            </div>
        </div>
    )
}
