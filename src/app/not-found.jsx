import Link from "next/link";

export default function Notfound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6 w-full">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">Error | Page not found</h1>
            <p className="text-gray-600 mb-8">Oops! The page you are looking for does not exist.</p>
            <Link href="/">
                <p className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                    Go Back Home
                </p>
            </Link>

        </div>
    );
}
