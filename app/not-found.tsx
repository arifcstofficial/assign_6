import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
            <p className="text-7xl font-bold text-[#C2F800] sm:text-8xl">
                404
            </p>

            <h1 className="mt-4 text-2xl font-bold sm:text-3xl">
                Page Not Found
            </h1>

            <p className="mt-3 max-w-md text-sm text-gray-400 sm:text-base">
                Sorry, the page you are looking for doesn't exist or has
                been moved.
            </p>

            <Link
                href="/"
                className="btn mt-6 bg-[#C2F800] px-6 text-black hover:bg-[#b5e800]"
            >
                Go Back Home
            </Link>
        </div>
    );
}