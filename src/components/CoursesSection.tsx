import arabicAdultsImg from "@/assets/arabic-adults.png";
import arabicKidsImg from "@/assets/arabic-kids.jpg";
import arabicAdvancedImg from "@/assets/arabic-adults.png";
import islamicFoundationImg from "@/assets/islamic-foundation.png";
import quranStudyImg from "@/assets/quran-study.webp";
import { CourseCard } from "./CourseCard";

export const CoursesSection = () => {
  const courses = [
    {
      id: "arabic-adults",
      title: "Arabic for Adults",
      duration: "15 months",
      classSize: 5,
      platform: "Zoom",
      book: "العربية بين يديك (Arabic Between Your Hands)",
      description: "Comprehensive Arabic learning program designed for adult learners, covering all fundamental aspects of the Arabic language.",
      variant: "primary" as const,
      levels: [
        {
          title: "Level 1 (3 months)",
          duration: "Book 1, Juz 2",
          description: "Basic grammar, Kalma & its types, Ism, Fail, Harf, Exams & results"
        },
        {
          title: "Level 2 (4-6 months)",
          duration: "Grammar advance, Juz 2 continued",
          description: "Advanced grammatical concepts and continued study"
        },
        {
          title: "Level 3 (Next 9 months)",
          duration: "Book 2 (2 parts) + complete grammar",
          description: "Complete grammar mastery and advanced Arabic concepts"
        }
      ],
      image: arabicAdultsImg
    },
    {
      id: "arabic-kids",
      title: "Arabic for Kids",
      duration: "24 months",
      classSize: 5,
      platform: "Zoom",
      book: "العربية بين يديك أولادنا (Arabic in the Hands of Our Children)",
      description: "Fun and engaging Arabic learning program specially designed for children aged 6-14 years.",
      variant: "secondary" as const,
      levels: [
        {
          title: "Foundation Level",
          duration: "6-8 books",
          description: "Basic grammar focus with interactive learning methods"
        },
        {
          title: "Intermediate Level",
          duration: "Continued progression",
          description: "Building vocabulary and sentence construction"
        },
        {
          title: "Advanced Level",
          duration: "Final books",
          description: "Reading comprehension and writing skills"
        }
      ],
      image: arabicKidsImg
    },
    {
      id: "arabic-advanced",
      title: "Arabic Advanced",
      duration: "24 months",
      classSize: 5,
      platform: "Zoom",
      book: "Book 3 (3 parts), Book 4 (2 parts)",
      description: "Advanced Arabic studies for students who have completed the foundational levels.",
      variant: "accent" as const,
      subjects: ["Tarikatul Kitaba (Writing)", "Tarikatul Khitaba (Speaking)", "Advanced Grammar", "Literature"],
      image: arabicAdvancedImg
    },
    {
      id: "islamic-foundation",
      title: "Islamic Foundation",
      duration: "12 months",
      classSize: 5,
      platform: "Zoom",
      book: "Comprehensive Islamic Studies Materials",
      description: "Essential Islamic knowledge covering history, beliefs, and Quranic understanding.",
      variant: "primary" as const,
      subjects: ["Islamic History", "Islamiyat", "Seerah", "Tafseer ul Quran"],
      image: islamicFoundationImg
    },
    {
      id: "quran-study",
      title: "Quran Study",
      duration: "6 months",
      classSize: 5,
      platform: "Zoom",
      book: "Quran with Tajweed Rules",
      description: "Comprehensive Quranic studies including recitation, memorization, and proper pronunciation.",
      variant: "secondary" as const,
      subjects: ["Nazira (Reading)", "Hifz (Memorization)", "Tajweed (Pronunciation)"],
      image: quranStudyImg
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Courses
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive Islamic education programs designed to build strong foundations in Arabic language and Islamic studies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              duration={course.duration}
              classSize={course.classSize}
              platform={course.platform}
              book={course.book}
              description={course.description}
              levels={course.levels}
              subjects={course.subjects}
              variant={course.variant}
              image={course.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};