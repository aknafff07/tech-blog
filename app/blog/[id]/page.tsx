import { posts } from "src/data/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedPosts from "src/components/RelatedPosts"; // <--- Import ini
import BackButton from "src/components/BackButton";

// Definisi Props untuk Next.js 15 (params adalah Promise)
interface PageProps {
  params: Promise<{ id: string }>;
}

// 1. Generate Metadata untuk SEO (Judul Tab Browser)
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return {
      title: "Artikel Tidak Ditemukan",
    };
  }

  return {
    title: post.title,
    description: post.content.slice(0, 100),
  };
}

// 2. Komponen Utama Halaman Detail
export default async function BlogDetailPage({ params }: PageProps) {
  // Ambil ID dari URL
  const { id } = await params;

  // Cari data artikel
  const post = posts.find((p) => p.id === id);

  // Jika artikel tidak ada, lempar ke halaman 404
  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-10">
      <div className="max-w-3xl mx-auto">
        
        {/* Tombol Kembali */}
        {/* 2. GANTI LINK LAMA DENGAN BACK BUTTON */}
        {/* Hapus <Link href="/">...</Link> yang lama */}
        <BackButton />

        <article>
          {/* Gambar Banner Besar */}
          <div className="relative w-full h-64 md:h-96 mb-8 rounded-2xl overflow-hidden shadow-lg">
            <Image 
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority // Penting: Agar gambar ini dimuat paling duluan (LCP)
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>

          {/* Judul & Meta */}
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 text-gray-500 text-sm mb-8 border-b pb-6">
            <span className="font-semibold text-gray-700">{post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>

          {/* Konten Artikel */}
          <div className="prose lg:prose-xl text-gray-800 leading-relaxed">
            <p className="mb-4">{post.content}</p>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </article>

        {/* --- PASANG RELATED POSTS DISINI --- */}
        <RelatedPosts 
            currentId={post.id} 
            category={post.category} 
        />
      </div>
    </main>
  );
}