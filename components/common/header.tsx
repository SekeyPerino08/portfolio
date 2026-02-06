'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeTogglerButton as ThemeToggler } from '@/components/animate-ui/components/buttons/theme-toggler';

export default function Header() {
  const pathname = usePathname();
    return (
        <header className="bg-gradient-to-b from-black/60 to-transparent backdrop-blur-sm text-white">   {/* ← key change */}
            <div className="container mx-auto flex justify-between items-center py-6">
                <h1 className="text-2xl font-bold">My App</h1>
                <nav>
                    <ul className="flex gap-6">
                        <li><Link href="/" className="hover:underline">Home</Link></li>
                        <li><Link href="/about" className="hover:underline">About</Link></li>
                        <li><Link href="/projects" className="hover:underline">Projects</Link></li>
                        <li><Link href="/blog" className="hover:underline">Blogs</Link></li>
                        <ThemeToggler />
                    </ul>
                </nav>
            </div>
        </header>
    );
}