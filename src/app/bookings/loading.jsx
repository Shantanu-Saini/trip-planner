export default function BookingLoading() {
  return (
    <div className="min-h-screen w-full bg-gray-100 p-8 animate-pulse">
      <div className="max-w-full mx-auto bg-white p-8 rounded shadow">
        <div className="h-10 bg-slate-300 rounded mb-6 w-1/3 mx-auto"></div>

        <form className="space-y-4">
          <div className="flex space-x-4 w-full">
            <div className="w-full">
              <div className="h-6 bg-slate-300 rounded mb-2 w-1/3"></div>
              <div className="h-10 bg-slate-200 rounded"></div>
            </div>

            <div className="w-full">
              <div className="h-6 bg-slate-300 rounded mb-2 w-1/3"></div>
              <div className="h-10 bg-slate-200 rounded"></div>
            </div>

            <div className="w-full">
              <div className="h-6 bg-slate-300 rounded mb-2 w-1/3"></div>
              <div className="h-10 bg-slate-200 rounded"></div>
            </div>
          </div>

          <div className="w-full">
            <div className="h-6 bg-slate-300 rounded mb-2 w-1/3"></div>
            <div className="h-10 bg-slate-200 rounded"></div>
          </div>

          <div className="w-full">
            <div className="h-6 bg-slate-300 rounded mb-2 w-1/3"></div>
            <div className="flex space-x-4">
              <div className="h-10 bg-slate-200 rounded w-1/4"></div>
              <div className="h-10 bg-slate-200 rounded w-1/4"></div>
              <div className="h-10 bg-slate-200 rounded w-1/4"></div>
              <div className="h-10 bg-slate-200 rounded w-1/4"></div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="h-6 bg-slate-300 rounded mb-2 w-1/3"></div>
            <div className="h-10 bg-slate-200 rounded mb-2"></div>
            <div className="h-10 bg-slate-200 rounded"></div>
          </div>

          <div className="space-y-2">
            <div className="h-6 bg-slate-300 rounded mb-2 w-1/3"></div>
            <div className="h-10 bg-slate-200 rounded mb-2"></div>
            <div className="h-10 bg-slate-200 rounded"></div>
          </div>

          <div className="flex space-x-4">
            <div className="h-12 bg-slate-300 rounded w-full"></div>
            <div className="h-12 bg-slate-300 rounded w-full"></div>
          </div>
        </form>
      </div>
    </div>
  )
}
