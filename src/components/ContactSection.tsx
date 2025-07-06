
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const ContactSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-slate-800/30 border-slate-700 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Connect with
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent"> Nonno</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Ready to explore the intersection of wisdom and artificial intelligence? Let's start a conversation that bridges generations and technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-slate-900 font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open('https://character.ai/chat/NtX3KNIexlBze8tEZx_OgRM3tOSimcwWSxVUX60303A', '_blank')}
              >
                Start a Conversation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-slate-600 text-slate-300 hover:bg-slate-700 px-8 py-3 rounded-full transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="text-center mt-16 pb-8">
        <p className="text-slate-400">
          © 2024 AI Nonno Nimensky. Where wisdom meets innovation.
        </p>
      </div>
    </section>
  );
};
