import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Font default (opsional, bisa jadi geist di next terbaru)
import "./globals.css";
import Navbar from "src/components/Navbar"; // Import Navbar
import Footer from "src/components/Footer"; // <--- Import ini

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tech Blog",
  description: "Blog teknologi terbaru",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      {/* Tambahkan class antialiased agar font lebih halus */}
      <body className={`${inter.className} antialiased bg-gray-50 text-gray-900`}>
        <Navbar /> {/* Navbar akan muncul di semua halaman */}
        
        {/* Children adalah isi konten tiap halaman (page.tsx) */}
        {children} 

        <Footer /> {/* <--- Pasang di sini */}
      </body>
    </html>
  );
}