import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";

export default function HomePage() {
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <StarsBackground />
      </div>
      <div className="flex items-start gap-12 p-8 text-white">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mt-20">Hey, I'm Clark Kent</h1>
          <p className="text-lg mt-4">
            I am a web designer and web developer who creates clean, responsive, and user-friendly websites. I combine creativity and technical skills to build modern and efficient web solutions.
          </p>
        </div>
        <div className="flex-shrink-0 mx-25">
          <img 
            src="/images/Gemini_Generated_Image_sta4d4sta4d4sta4.png" 
            alt="Clark Kent" 
            className="w-120 h-120 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </>
  );
}
