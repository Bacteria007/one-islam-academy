import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, Users, Star } from "lucide-react";

export const Faculty = () => {
  const facultyMembers = [
    {
      name: "Sir Rehmatullah",
      title: "Senior Arabic Instructor",
      qualifications: ["PhD in Arabic Literature", "Ijazah in Quran", "20+ years experience"],
      specialties: ["Classical Arabic", "Advanced Grammar", "Arabic Literature"],
      description: "Dr. Ahmad brings two decades of experience in teaching Arabic to non-native speakers, with a special focus on classical texts and advanced grammar.",
      image: "/api/placeholder/300/400"
    },
    {
      name: "Ustadha Fatima Al-Zahra",
      title: "Quran & Tajweed Specialist", 
      qualifications: ["Ijazah in Quran Recitation", "Certified Tajweed Instructor", "15+ years experience"],
      specialties: ["Quranic Studies", "Tajweed", "Hifz Supervision"],
      description: "Ustadha Fatima is renowned for her beautiful recitation and expertise in Tajweed, helping students achieve mastery in Quranic pronunciation.",
      image: "/api/placeholder/300/400"
    },
   
  ];

  return (
    <section id="faculty" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-islamic-teal bg-clip-text text-transparent">
              Our Faculty
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn from qualified scholars and experienced educators who combine traditional Islamic knowledge with modern teaching methods
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {facultyMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 overflow-hidden">
              <div className="relative">
                {/* Placeholder for instructor image */}
                <div className="h-64 bg-gradient-to-b from-primary/10 to-secondary/10 flex items-center justify-center">
                  <Users className="h-24 w-24 text-primary/30" />
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary/90 text-primary-foreground">
                    <Award className="h-3 w-3 mr-1" />
                    Certified
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium">{member.title}</p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      Qualifications
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.qualifications.map((qual, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {qual}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                      <Star className="h-4 w-4 text-secondary" />
                      Specialties
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 p-8 bg-gradient-to-r from-islamic-cream to-accent/10 rounded-2xl border border-primary/10">
          <h3 className="text-2xl font-bold mb-4">Expert Islamic Education</h3>
          <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
            All our instructors hold traditional ijazah (authorization) and modern certifications, ensuring you receive authentic Islamic education rooted in scholarly tradition.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              <span>Certified Instructors</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-secondary" />
              <span>Traditional Ijazah</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-islamic-teal" />
              <span>Experienced Educators</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-primary" />
              <span>Proven Track Record</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};