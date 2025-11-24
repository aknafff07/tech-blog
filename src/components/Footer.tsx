import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-800 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Kolom 1: Info Singkat */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">TechBlog 🚀</h3>
            <p className="text-sm leading-relaxed">
              Media pembelajaran teknologi terkini. Membahas Next.js, React, dan ekosistem web development modern.
            </p>
          </div>

          {/* Kolom 2: Quick Links (Routing Internal) */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Navigasi</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-blue-400 transition">Home</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400 transition">Artikel</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition">Tentang Kami</Link></li>
            </ul>
          </div>

          {/* Kolom 3: Social Media (Routing Eksternal) */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Ikuti Kami</h3>
            <div className="flex gap-4">
              {/* Gunakan a href untuk link luar, dan target="_blank" */}
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-500 hover:text-white transition"
              >
                Twitter
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 hover:text-white transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-xs">
          <p>© {new Date().getFullYear()} TechBlog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}