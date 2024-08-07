export default function Loading() {
    return (
        <div className="min-h-screen bg-gray-100 p-6 w-full animate-pulse">
            <div className="bg-white shadow rounded-lg p-6 mb-6 text-center">
                <div className="h-10 bg-slate-300 rounded mb-4"></div>
            </div>
            <div className="grid grid-cols-3 bg-white shadow rounded-lg p-6 mb-6">
                <div className="h-56 bg-slate-300 rounded mb-4 w-2/3"></div>
                <div className="h-56 bg-slate-300 rounded mb-4 w-2/3"></div>
                <div className="h-56 bg-slate-300 rounded mb-4 w-2/3"></div>
            </div>
            <div className="grid grid-cols-3 bg-white shadow rounded-lg p-6 mb-6">
                <div className="h-56 bg-slate-300 rounded mb-4 w-2/3"></div>
                <div className="h-56 bg-slate-300 rounded mb-4 w-2/3"></div>
                <div className="h-56 bg-slate-300 rounded mb-4 w-2/3"></div>
            </div>
        </div>
    );
}
