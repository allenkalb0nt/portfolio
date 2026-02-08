import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-6">
        <h1 className="text-9xl font-bold">404</h1>
        <h2 className="text-4xl font-semibold">Page Not Found</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="pt-6">
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors duration-300"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  )
}
