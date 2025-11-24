import Link from "next/link";
import Image from "next/image";
import { posts } from "src/data/posts";

interface RelatedPostsProps {
  currentId: string;
  category: string;
}

export default function RelatedPosts({ currentId, category }: RelatedPostsProps) {
  // LOGIKA UTAMA:
  // 1. Filter artikel dengan kategori yang sama
  // 2. Buang artikel yang sedang dibaca (p.id !== currentId)
  // 3. Ambil maksimal 3 artikel saja (.slice(0, 3))
  const related = posts
    .filter((post) => post.category === category && post.id !== currentId)
    .slice(0, 3);

  // Jika tidak ada artikel terkait, jangan tampilkan apa-apa (return null)
  if (related.length === 0) return null;

  return (
    <div className="mt-16 border-t pt-10">
      <h3 className="text-2xl font-bold mb-6">Artikel Terkait 💡</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {related.map((post) => (
          <Link 
            key={post.id} 
            href={`/blog/${post.id}`} 
            className="group block"
          >
            <div className="relative w-full h-40 mb-3 rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <h4 className="font-bold text-gray-800 group-hover:text-blue-600 transition line-clamp-2">
              {post.title}
            </h4>
            <p className="text-sm text-gray-500 mt-1">{post.date}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}