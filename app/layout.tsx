import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "Learning Next.js App Router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen text-white`}>
        <div className="fixed inset-0 -z-10">
          <StarsBackground />
        </div>
        <Header />
        <main className="flex-grow relative z-10 container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}