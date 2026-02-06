import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";

export default function HomePage() {
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <StarsBackground />
      </div>
      <div className="text-center mt-20">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg">
          Explore my projects, read my blogs, and learn more about me.
        </p>
      </div>
    </>
  );
}
