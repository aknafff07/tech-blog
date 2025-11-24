import Link from "next/link";
import { posts } from "src/data/posts";
import Hero from "src/components/Hero";
import PostCard from "src/components/PostCard"; // Import komponen baru tadi

export default function Home() {
  // Ambil hanya 3 artikel pertama untuk ditampilkan di Home
  const latestPosts = posts.slice(0, 3);

  return (
    <main>
      {/* 1. HERO SECTION (Hanya ada di Home) */}
      <Hero />

      {/* 2. TEASER ARTIKEL (Hanya 3 biji) */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            
            <div className="flex justify-between md:gird items-end mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Artikel Terbaru 📝</h2>
                <p className="text-gray-500 mt-2">Intip tulisan terbaru kami minggu ini.</p>
              </div>
              <Link href="/blog" className="text-blue-600 hover:underline font-medium">
                Lihat Semua →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Kita pakai komponen PostCard biar rapi */}
              {latestPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}