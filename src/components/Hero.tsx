import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Clock, Award } from "lucide-react";
import kabaHero from "@/assets/kaba-hero.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ 
          backgroundImage: `url(${kabaHero})`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center py-12">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">
              Learn Arabic & Islam
              <br />
              <span className="text-yellow-400">the Right Way</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-xl mx-auto">
              Join On Islam Academy for authentic online Islamic education with expert teachers and small classes.
            </p>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-yellow-600 hover:bg-yellow-700 text-white text-lg px-8 py-3 rounded-full transition-all duration-300"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Join Our Classes
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-yellow-400 text-yellow-600  hover:bg-yellow-400/10 text-lg px-8 py-3 rounded-full"
            >
              View Courses
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="bg-gray-800/70 border-none hover:bg-gray-700/70 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Users className="h-10 w-10 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2 text-white">Small Classes</h3>
                <p className="text-gray-300 text-sm">Max 5 students for personal attention</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/70 border-none hover:bg-gray-700/70 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Award className="h-10 w-10 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2 text-white">Expert Instructors</h3>
                <p className="text-gray-300 text-sm">With ijazah and deep knowledge</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/70 border-none hover:bg-gray-700/70 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Clock className="h-10 w-10 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2 text-white">Flexible Schedules</h3>
                <p className="text-gray-300 text-sm">30-min sessions to fit your life</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};