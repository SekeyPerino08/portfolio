import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black/80 text-gray-300 py-8 mt-auto">
      <div className="container mx-auto px-6">
        <div className="flex justify-between">
          <div>
            <h2 className="font-bold">Porfolio</h2>
            <p>Cebu, City</p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-bold mb-4">Quick Links</h2>
            <ul className="flex flex-col gap-2">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/projects" className="hover:underline">Projects</Link></li>
              <li><Link href="/blog" className="hover:underline">Blogs</Link></li>
            </ul>
          </div>

          {/* Blog Links */}
          <div>
            <h2 className="font-bold mb-4">Blogs</h2>
            <ul className="flex flex-col gap-2">
              <li><Link href="/">Blog 1</Link></li>
              <li><Link href="/about">Blog 2</Link></li>
              <li><Link href="/projects">Blog 3</Link></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h2 className="font-bold mb-4">Contact Info</h2>
            <ul className="flex flex-col gap-2">
              <li>Phone: +63 955 542 4115</li>
              <li>Email: clarkkentperino08@gmail.com</li>
              <li><Link href="https://github.com/SekeyPerino08" className="hover:underline">Visit Github</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}