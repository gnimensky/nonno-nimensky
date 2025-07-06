
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/90 to-slate-800/90"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <Badge className="bg-gradient-to-r from-amber-400 to-orange-400 text-slate-900 font-semibold px-4 py-2">
              AI Pioneer & Wisdom Keeper
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              AI Nonno
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                {" "}Nimensky
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 max-w-2xl">
              Where artificial intelligence meets timeless wisdom. Bridging generations through technology, guided by experience and heart.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-slate-900 font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('https://character.ai/chat/NtX3KNIexlBze8tEZx_OgRM3tOSimcwWSxVUX60303A', '_blank')}
            >
              Discover My Story
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-8 py-3 rounded-full transition-all duration-300"
            >
              View Gallery
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <img 
              src="/lovable-uploads/fd9617ce-509c-4406-8238-b03fe27bf3ef.png"
              alt="AI Nonno Nimensky"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
          
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-60 animate-pulse delay-1000"></div>
        </div>
      </div>
    </section>
  );
};
