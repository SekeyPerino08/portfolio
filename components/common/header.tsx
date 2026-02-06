import Link from 'next/link';
// components/Header.tsx
export default function Header() {
    return (
        <header className="bg-gradient-to-b from-black/60 to-transparent
backdrop-blur-sm">   {/* ← key change */}
            <div className="container mx-auto flex justify-between items-center py-6">
                <h1 className="text-2xl font-bold">My App</h1>
                <nav>
                    <ul className="flex gap-6">
                        <li><Link href="/" className="hover:underline">Home</Link></li>
                        <li><Link href="/about" className="hover:underline">About</Link></li>
                        <li><Link href="/projects" className="hover:underline">Projects</Link></li>
                        <li><Link href="/blog" className="hover:underline">Blogs</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}