export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Skeleton Header */}
      <div className="h-8 w-48 bg-gray-300 rounded animate-pulse mx-auto mb-10"></div>

      {/* Skeleton Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
            {/* Gambar Skeleton */}
            <div className="h-48 bg-gray-300 animate-pulse"></div>
            
            {/* Konten Skeleton */}
            <div className="p-6">
              <div className="h-6 w-3/4 bg-gray-300 rounded animate-pulse mb-4"></div>
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse mb-2"></div>
              <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse mb-6"></div>
              <div className="h-8 w-32 bg-gray-300 rounded animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}