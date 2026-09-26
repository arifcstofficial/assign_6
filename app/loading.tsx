export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-purple-600"></div>

        <p className="text-lg font-medium text-gray-600">
          Loading exercises...
        </p>
      </div>
    </div>
  );
}