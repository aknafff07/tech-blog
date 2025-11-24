// src/app/about/page.tsx
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-16 max-w-2xl text-center">
      <h1 className="text-4xl font-bold mb-6">Tentang TechBlog 🚀</h1>
      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
        TechBlog adalah platform berbagi wawasan seputar teknologi web modern, 
        mulai dari Next.js, React, hingga Artificial Intelligence. 
        Tujuan kami adalah menyederhanakan konsep sulit menjadi tutorial yang mudah dipahami.
      </p>
      
      {/* Simulasi Foto Profil */}
      <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg mb-4">
        <Image 
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&q=80"
          alt="Admin Profile"
          fill
          className="object-cover"
        />
      </div>
      <p className="font-semibold">Admin TechBlog</p>
    </main>
  );
}