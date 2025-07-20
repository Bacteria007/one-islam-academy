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
      image: "/api/placeholder/300/400",
      whatsapp: "923156425847"
    },
    {
      name: "Sheikh Abdullah",
      title: "Quran & Tajweed Specialist",
      qualifications: ["Ijazah in Quran Recitation", "Certified Tajweed Instructor", "15+ years experience"],
      specialties: ["Quranic Studies", "Tajweed", "Hifz Supervision"],
      description: "Sheikh Abdullah is renowned for her beautiful recitation and expertise in Tajweed, helping students achieve mastery in Quranic pronunciation.",
      image: "/api/placeholder/300/400",
      whatsapp: "923042353072"
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

                  {/* Individual WhatsApp Contact */}
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <a
                      href={`https://wa.me/${member.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-[#CAAB4E] to-yellow-600  text-white font-medium text-sm rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25 hover:-translate-y-0.5 group"
                    >
                      <svg
                        className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785" />
                      </svg>
                      Contact on WhatsApp
                    </a>
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