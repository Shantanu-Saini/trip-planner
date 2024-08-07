export default function Loading() {
    return (
        <div className="min-h-screen bg-gray-100 p-6 w-full animate-pulse">
            <div className="bg-white shadow rounded-lg p-6 mb-6 text-center">
                <div className="h-10 bg-slate-300 rounded mb-4"></div>
            </div>
            <div className="bg-white shadow rounded-lg p-6 mb-6">
                <div className="h-8 bg-slate-300 rounded mb-4 w-2/3"></div>
                <div className="h-6 bg-slate-300 rounded w-full mb-2"></div>
                <div className="h-6 bg-slate-300 rounded w-5/6 mb-2"></div>
                <div className="h-6 bg-slate-300 rounded w-4/5 mb-2"></div>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
                <div className="h-8 bg-slate-300 rounded mb-4 w-2/3"></div>
                <div className="h-6 bg-slate-300 rounded w-full mb-2"></div>
                <div className="h-6 bg-slate-300 rounded w-5/6 mb-2"></div>
                <div className="h-6 bg-slate-300 rounded w-4/5 mb-2"></div>
            </div>
        </div>
    );
}
