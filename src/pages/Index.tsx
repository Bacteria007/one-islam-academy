import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { CoursesSection } from "@/components/CoursesSection";
import { Faculty } from "@/components/Faculty";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <CoursesSection />
      <Faculty />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
