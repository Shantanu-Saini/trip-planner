export default function layout({ children }) {
    return (
        <div className="min-h-screen w-full bg-gray-100 flex flex-col items-center py-8">
            <div className="w-full bg-blue-600 text-white py-4 mb-8 shadow-lg">
                <h1 className="text-3xl text-center">trending Destination Details</h1>
            </div>
            {children}
        </div>
    )
}
