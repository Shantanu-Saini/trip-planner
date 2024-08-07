export default function DashboardLayout({
    children,
    userInfo,
    history,
}) {
    return (
        <div className="min-h-screen w-full bg-gray-100 p-6 flex flex-col items-center space-y-1">

            <div className="w-full bg-white shadow-lg rounded-lg p-6 text-center">
                {children}
            </div>

            <div className="flex-1 flex items-center justify-between space-x-2 w-full h-full">
                <div className="bg-white shadow rounded-lg p-6 w-full h-full">
                    {userInfo}
                </div>
                <div className="bg-white shadow rounded-lg p-6 w-full h-full">
                    {history}
                </div>
            </div>
        </div>
    )
}
