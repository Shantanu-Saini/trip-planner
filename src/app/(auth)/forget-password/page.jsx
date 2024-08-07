import Link from 'next/link';

export default function ForgetPassword() {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="text-center text-3xl font-extrabold text-gray-900">Forget Password</h1>
          <p className="text-center text-gray-600 mt-2">
            Enter your email address & old password and your password.
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-2">
            <div>
              <label htmlFor="email" className="sr-only">Email:</label>
              <input
                name="email"
                type="email"
                required
                className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Email"
              />
              <label htmlFor="email" className="sr-only">Old Password:</label>
              <input
                name="old password"
                type="password"
                required
                className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Old Password"
              />
              <label htmlFor="email" className="sr-only">New Password:</label>
              <input
                name="New password"
                type="password"
                required
                className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="New Password"
              />

            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Reset Password
            </button>
          </div>
        </form>
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Remembered your password?
            <Link href="/login" className="text-blue-600 hover:text-blue-500 cursor-pointer">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
