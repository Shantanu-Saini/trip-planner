import Link from "next/link";

export default function Login() {
    return (
        <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h1 className="text-center text-3xl font-extrabold text-gray-900">Login</h1>
                </div>
                <form className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm space-y-2">
                        <div>
                            <input
                                name="username"
                                type="text"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Username or Email"
                            />
                        </div>
                        <div>
                            <input
                                name="password"
                                type="password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <div className="text-center">
                    <Link href="/forget-password">
                        <p className="text-sm text-blue-600 hover:text-blue-500">
                            Forgot Password?
                        </p>
                    </Link>
                    <div className="mt-2">
                        <span className="text-sm">Don't have an account? </span>
                        <Link href="/signup">
                            <p className="text-sm text-blue-600 hover:text-blue-500">Create Now</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
