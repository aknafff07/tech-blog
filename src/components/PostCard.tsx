import Link from "next/link";
import Image from "next/image";
import { Post } from "src/data/posts";

export default function PostCard({ post }: { post: Post }) {
  return (
    // PENTING: Class 'relative' di sini adalah kuncinya!
    <div className="relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group border border-gray-100">
      
      {/* Gambar */}
      <div className="relative w-full h-48 overflow-hidden">
        <Image 
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full shadow-sm text-gray-800 z-20">
          {post.category}
        </div>
      </div>

      {/* Konten Teks */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3 text-gray-900 leading-snug group-hover:text-blue-600 transition">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3 text-sm flex-grow leading-relaxed">
          {post.content}
        </p>
        
        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-50">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">
            {post.author[0]}
          </div>
          <div className="text-xs text-gray-500">
            <p className="font-semibold text-gray-700">{post.author}</p>
            <p>{post.date}</p>
          </div>
        </div>
      </div>

      {/* Link Full Card Overlay */}
      {/* Pastikan z-10 agar dia di atas background tapi di bawah elemen interaktif lain jika ada */}
      <Link href={`/blog/${post.id}`} className="absolute inset-0 z-10">
        <span className="sr-only">Baca {post.title}</span>
      </Link>
    </div>
  );
}