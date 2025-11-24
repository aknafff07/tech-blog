export type Post = {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
};

export const posts: Post[] = [
  {
    id: "1",
    title: "Mengenal Next.js 15",
    content: "Next.js 15 membawa banyak perubahan besar...",
    author: "Admin",
    date: "2025-11-20",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    category: "Coding",
  },
  {
    id: "2",
    title: "Tailwind CSS v4 Telah Rilis",
    content: "Versi terbaru Tailwind CSS hadir dengan performa...",
    author: "Jhon Doe",
    date: "2025-11-21",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80",
    category: "Coding",
  },
  {
    id: "3",
    title: "Tips Produktivitas Programmer",
    content: "Cara mengatur waktu agar coding lebih efisien...",
    author: "Sarah Smith",
    date: "2025-11-22",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
    category: "Tips",
  },
  {
    id: "4",
    title: "Kenapa Harus Belajar TypeScript?",
    content: "TypeScript adalah superset JavaScript yang...",
    author: "Admin",
    date: "2025-11-23",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    category: "Coding",
  },
  {
    id: "5",
    title: "Review Laptop untuk Coding 2025",
    content: "Spesifikasi minimum laptop untuk developer...",
    author: "Reviewer",
    date: "2025-11-24",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80",
    category: "Hardware",
  },
];