export default function DashboardSkeleton() {
    return (
        <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center animate-pulse">
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 mb-8">
                <div className="h-8 bg-gray-300 rounded w-1/3 mb-4"></div>

                <div className="mb-6">
                    <div className="h-6 bg-gray-300 rounded w-1/4 mb-2"></div>
                    <div className="space-y-2">
                        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-300 rounded w-2/4"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-300 rounded w-2/4"></div>
                    </div>
                </div>

                <div>
                    <div className="h-6 bg-gray-300 rounded w-1/4 mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                </div>
            </div>
        </div>
    );
}