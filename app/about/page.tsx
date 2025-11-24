import Image from "next/image";
import profilePic from "app/unnamed.jpg"; // <--- 1. Import dulu gambarnya

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-16 max-w-2xl text-center">
      <h1 className="text-4xl font-bold mb-6">Tentang TechBlog 🚀</h1>
      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
        TechBlog adalah platform berbagi wawasan seputar teknologi web modern, 
        mulai dari Next.js, React, hingga Artificial Intelligence. 
        Tujuan kami adalah menyederhanakan konsep sulit menjadi tutorial yang mudah dipahami.
      </p>
      
      {/* UPDATE DI SINI */}
      <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg mb-4 border-4 border-white">
        <Image 
          src={profilePic} // <--- Ganti jadi nama file foto Anda
          alt="Foto Profil Admin"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 200px" // Opsional: untuk optimasi
        />
      </div>
      
      <p className="font-semibold text-xl text-gray-900">Admin TechBlog</p>
      <p className="text-sm text-gray-500">Fullstack Developer</p>
    </main>
  );
}