import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Heart, BookOpen, Clock, Star } from "lucide-react";

export const Coaching = () => {
  const coachingPrograms = [
    {
      title: "1-on-1 Arabic",
      description: "Personalized Arabic tutoring sessions tailored to your learning pace and goals.",
      features: [
        "Customized lesson plans",
        "Flexible scheduling",
        "Focused attention",
        "Progress tracking"
      ],
      duration: "Flexible",
      price: "Contact for pricing",
      icon: User,
      color: "text-primary"
    },
    {
      title: "Quran Tajweed Mentorship", 
      description: "Individual guidance to perfect your Quranic recitation with proper Tajweed rules.",
      features: [
        "One-on-one Tajweed correction",
        "Detailed pronunciation guidance", 
        "Memorization techniques",
        "Spiritual connection building"
      ],
      duration: "Ongoing",
      price: "Contact for pricing", 
      icon: Heart,
      color: "text-secondary"
    },
    {
      title: "Islamic Studies Deep Dive",
      description: "Comprehensive individual Islamic education covering theology, history, and jurisprudence.",
      features: [
        "In-depth Islamic knowledge",
        "Scholarly discussions",
        "Research methodology",
        "Critical thinking development"
      ],
      duration: "12+ months",
      price: "Contact for pricing",
      icon: BookOpen, 
      color: "text-islamic-teal"
    }
  ];

  return (
    <section id="coaching" className="py-20 bg-gradient-to-b from-muted/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-secondary to-islamic-teal bg-clip-text text-transparent">
              Personal Coaching
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get personalized attention and accelerated learning with our one-on-one coaching programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {coachingPrograms.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 h-full">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-gradient-to-r from-muted to-accent/20">
                    <IconComponent className={`h-8 w-8 ${program.color}`} />
                  </div>
                  <CardTitle className="text-xl mb-2">{program.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{program.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="text-xs">
                      <Clock className="h-3 w-3 mr-1" />
                      {program.duration}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      <Star className="h-3 w-3 mr-1" />
                      Premium
                    </Badge>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <p className="text-sm font-medium mb-3">Investment: {program.price}</p>
                    <Button className="w-full bg-gradient-to-r from-secondary to-islamic-teal hover:shadow-lg transition-all duration-300">
                      Schedule Consultation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border border-primary/10">
          <h3 className="text-2xl font-bold mb-4">Ready for Personalized Learning?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our coaching programs are designed to accelerate your learning journey with personalized attention and expert guidance.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:scale-105 transition-all duration-300">
            <User className="mr-2 h-5 w-5" />
            Book a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};