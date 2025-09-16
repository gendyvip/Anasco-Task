import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-[60vh] w-full items-center justify-center">
      <div className="text-center">
        <div className="mb-2 text-3xl font-semibold text-gray-900">Page not found</div>
        <div className="mb-6 text-sm text-gray-600">The page you are looking for doesn’t exist or was moved.</div>
        <Link
          href="/dashboards/default"
          className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}


