"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react"; // 1. Import useState

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // 2. State untuk menu mobile

  // Helper untuk cek link aktif
  const isActive = (path: string) =>
    pathname === path ? "text-blue-400 font-bold" : "text-gray-300 hover:text-white";

  return (
    <nav className="bg-gray-900/95 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="text-xl font-bold text-white flex items-center gap-2 z-50">
          <span>🚀</span> TechBlog
        </Link>

        {/* --- MENU DESKTOP (Hidden di HP) --- */}
        {/* 'hidden md:flex' artinya: Sembunyi di HP, Tampil Flex di layar Medium ke atas */}
        <div className="hidden md:flex gap-8 text-sm font-medium transition-colors">
          <Link href="/" className={isActive("/")}>Home</Link>
          <Link href="/blog" className={isActive("/blog")}>Artikel</Link>
          <Link href="/about" className={isActive("/about")}>About</Link>
        </div>

        {/* --- TOMBOL HAMBURGER (Hidden di Desktop) --- */}
        {/* 'md:hidden' artinya: Tampil di HP, Sembunyi di layar Medium ke atas */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white focus:outline-none z-50"
        >
          {/* Logika Icon: Kalau Open muncul X, kalau Close muncul Garis Tiga */}
          {isOpen ? (
            // Icon X (Close)
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Icon Hamburger (Menu)
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        {/* --- MENU MOBILE (Dropdown) --- */}
        {/* Tampilkan hanya jika isOpen = true */}
        {isOpen && (
          <div className="absolute top-16 right-10 w-[140px]  bg-gray-900 border-b border-gray-800 md:hidden flex flex-col items-center py-6 space-y-4 shadow-xl animate-fadeIn">
            {/* Note: Kita tambah onClick={() => setIsOpen(false)} agar saat link diklik, menu nutup otomatis */}
            <Link 
              href="/" 
              className={`text-lg ${isActive("/")}`} 
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/blog" 
              className={`text-lg ${isActive("/blog")}`} 
              onClick={() => setIsOpen(false)}
            >
              Artikel
            </Link>
            <Link 
              href="/about" 
              className={`text-lg ${isActive("/about")}`} 
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </div>
        )}

      </div>
    </nav>
  );
}