import { posts } from "src/data/posts";
import PostCard from "src/components/PostCard";

export default function BlogPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          
          {/* Header Sederhana (Tanpa Hero Besar) */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Semua Artikel 📚</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Temukan seluruh koleksi tutorial, tips, dan wawasan teknologi yang telah kami tulis untuk membantu perjalanan coding Anda.
            </p>
          </div>

          {/* Grid SEMUA Artikel */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}