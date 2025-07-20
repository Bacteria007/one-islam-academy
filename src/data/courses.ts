export const courses = [
    {
      id: "arabic-adults",
      title: "Arabic for Adults",
      duration: "15 months",
      classSize: 5,
      platform: "Zoom",
      book: "العربية بين يديك (Arabic Between Your Hands)",
      description: "Comprehensive Arabic learning program designed for adult learners, covering all fundamental aspects of the Arabic language.",
      variant: "primary",
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
      image: "../assets/arabic-adults.png"
    },
    {
      id: "arabic-kids",
      title: "Arabic for Kids",
      duration: "24 months",
      classSize: 5,
      platform: "Zoom",
      book: "العربية بين يديك أولادنا (Arabic in the Hands of Our Children)",
      description: "Fun and engaging Arabic learning program specially designed for children aged 6-14 years.",
      variant: "secondary",
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
      image: "../assets/arabic-kids.jpg"
    },
    {
      id: "arabic-advanced",
      title: "Arabic Advanced",
      duration: "24 months",
      classSize: 5,
      platform: "Zoom",
      book: "Book 3 (3 parts), Book 4 (2 parts)",
      description: "Advanced Arabic studies for students who have completed the foundational levels.",
      variant: "accent",
      subjects: ["Tarikatul Kitaba (Writing)", "Tarikatul Khitaba (Speaking)", "Advanced Grammar", "Literature"],
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=300&fit=crop"
    },
    {
      id: "islamic-foundation",
      title: "Islamic Foundation",
      duration: "12 months",
      classSize: 5,
      platform: "Zoom",
      book: "Comprehensive Islamic Studies Materials",
      description: "Essential Islamic knowledge covering history, beliefs, and Quranic understanding.",
      variant: "primary",
      subjects: ["Islamic History", "Islamiyat", "Seerah", "Tafseer ul Quran"],
      image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=500&h=300&fit=crop"
    },
    {
      id: "quran-study",
      title: "Quran Study",
      duration: "6 months",
      classSize: 5,
      platform: "Zoom",
      book: "Quran with Tajweed Rules",
      description: "Comprehensive Quranic studies including recitation, memorization, and proper pronunciation.",
      variant: "secondary",
      subjects: ["Nazira (Reading)", "Hifz (Memorization)", "Tajweed (Pronunciation)"],
      image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=500&h=300&fit=crop"
    }
  ];