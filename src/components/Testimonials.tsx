import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Abdullah",
      role: "Arabic Student - Level 2",
      content: "The teaching method at One Islam Academy is exceptional. The small class sizes allow for personalized attention, and I've made tremendous progress in just 6 months.",
      rating: 5,
      location: "United Kingdom"
    },
    {
      name: "Ahmed Hassan", 
      role: "Parent of Arabic Student",
      content: "My 8-year-old son loves his Arabic classes. The teachers make learning fun and engaging. His pronunciation has improved significantly since joining.",
      rating: 5,
      location: "United States"
    },
    {
      name: "Mariam Al-Rashid",
      role: "Quran Study Program",
      content: "The Tajweed classes have transformed my Quran recitation. The one-on-one attention helped me correct years of pronunciation mistakes.",
      rating: 5,
      location: "Canada"
    },
    {
      name: "Omar Al-Mansouri",
      role: "Islamic Foundation Course",
      content: "The comprehensive Islamic studies program gave me a deep understanding of our beautiful religion. The teachers are knowledgeable and patient.",
      rating: 5,
      location: "Australia"
    },
    {
      name: "Khadija Rahman",
      role: "Advanced Arabic Student", 
      content: "After completing the Arabic for Adults program, I can now read classical Islamic texts with confidence. Truly grateful for this opportunity.",
      rating: 5,
      location: "Malaysia"
    },
    {
      name: "Abdullah Al-Farisi",
      role: "1-on-1 Coaching Student",
      content: "The personal coaching sessions accelerated my learning tremendously. My teacher adapted the lessons to my specific needs and goals.",
      rating: 5,
      location: "Emirates"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Student Testimonials
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from our students about their transformative learning journey with One Islam Academy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 h-full">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary/30 mb-3" />
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground italic mb-6 flex-grow leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t border-border/50 pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground mt-1">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-primary/10 to-secondary/10 px-8 py-4 rounded-full border border-primary/20">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-primary text-primary" />
              <span className="font-bold text-2xl">4.9</span>
            </div>
            <div className="h-6 w-px bg-border"></div>
            <div className="text-sm text-muted-foreground">
              <p className="font-medium">Rated 4.9/5</p>
              <p>from 200+ students</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};