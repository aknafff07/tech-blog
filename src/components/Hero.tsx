import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center pt-24 pb-10 md:pt-0 md:pb-0 bg-white overflow-hidden">
      
      {/* Background Decoration (Sama seperti sebelumnya) */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-20">
          
          {/* --- BAGIAN 1: TEKS --- */}
          {/* Mobile: Order 2 (Di Bawah Gambar) */}
          {/* Desktop: Order 1 (Di Kiri Gambar) */}
          <div className="w-full md:w-1/2 z-10 order-2 md:order-1 text-center md:text-left">
            
            {/* Badge */}
            <div className="inline-flex justify-center md:justify-start w-full mb-6">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs md:text-sm font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Tutorial Next.js 15 Updated
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
              Jelajahi Dunia <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Modern Web
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Pelajari teknologi masa depan mulai dari Next.js, Tailwind CSS, hingga Artificial Intelligence dengan panduan yang mudah dipahami.
            </p>
            
            {/* Tombol CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full">
              <Link 
                href="/blog" 
                className="inline-flex justify-center items-center px-8 py-3.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30"
              >
                Mulai Belajar
              </Link>
              <a 
                href="https://github.com" 
                target="_blank"
                className="inline-flex justify-center items-center px-8 py-3.5 rounded-xl border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-all"
              >
                Lihat GitHub
              </a>
            </div>
          </div>

          {/* --- BAGIAN 2: GAMBAR --- */}
          {/* Mobile: Order 1 (Di Atas Teks) */}
          {/* Desktop: Order 2 (Di Kanan Teks) */}
          <div className="w-full md:w-1/2 relative order-1 md:order-2">
            
            {/* Container Gambar */}
            {/* Mobile: Tinggi fix 280px (biar gak kegedean) */}
            {/* Desktop: Tinggi 500px */}
            <div className="relative w-full h-[280px] sm:h-[400px] md:h-[500px]">
                
                {/* Efek Glow Belakang */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-200 to-purple-200 opacity-40 blur-3xl rounded-full"></div>
                
                <Image 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000&q=80" 
                  alt="Hero Illustration"
                  fill
                  className="object-cover rounded-2xl md:rounded-[2rem] shadow-2xl relative z-10"
                  priority 
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

        

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}