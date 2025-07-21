import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Users, Monitor, Book, CheckCircle, Star, Calendar, Target, Award, Globe } from 'lucide-react';
import ArabicAdultsImg from '@/assets/arabic-adults.png';
import ArabicKidsImg from '@/assets/arabic-kids.jpg';
import ArabicAdvancedImg from '@/assets/arabic-adults.png';
import IslamicFoundationImg from '@/assets/islamic-foundation.png';
import QuranStudyImg from '@/assets/quran-study.webp';

// Simple Router Implementation
const SimpleRouter = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // Handle browser back/forward buttons
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  return { currentPath, navigate };
};

const CourseDetail = () => {
  const { currentPath, navigate } = SimpleRouter();

  const courses = [
    {
      id: "arabic-adults",
      title: "Arabic for Adults",
      duration: "15 months",
      classSize: 5,
      platform: "Zoom",
      book: "العربية بين يديك (Arabic Between Your Hands)",
      description: "Comprehensive Arabic learning program designed for adult learners, covering all fundamental aspects of the Arabic language.",
      detailedDescription: "Master the beautiful Arabic language with our structured adult program. This comprehensive course takes you from complete beginner to intermediate level, focusing on practical communication skills and deep understanding of Arabic grammar and vocabulary.",
      variant: "primary",
      image: ArabicAdultsImg,
      levels: [
        {
          title: "Level 1 (3 months)",
          duration: "Book 1, Juz 2",
          description: "Basic grammar, Kalma & its types, Ism, Fail, Harf, Exams & results",
          objectives: [
            "Learn Arabic alphabet and basic pronunciation",
            "Understand fundamental grammar concepts",
            "Master Kalma and its various types",
            "Distinguish between Ism, Fail, and Harf",
            "Build basic vocabulary for daily conversations"
          ]
        },
        {
          title: "Level 2 (4-6 months)",
          duration: "Grammar advance, Juz 2 continued",
          description: "Advanced grammatical concepts and continued study",
          objectives: [
            "Advanced grammatical structures",
            "Sentence formation and syntax",
            "Reading comprehension exercises",
            "Writing practice and composition",
            "Conversational Arabic skills"
          ]
        },
        {
          title: "Level 3 (Next 9 months)",
          duration: "Book 2 (2 parts) + complete grammar",
          description: "Complete grammar mastery and advanced Arabic concepts",
          objectives: [
            "Master complex grammatical rules",
            "Advanced reading and comprehension",
            "Professional Arabic communication",
            "Literary text analysis",
            "Fluent conversation abilities"
          ]
        }
      ],
      features: [
        "Interactive Zoom sessions",
        "Authentic Arabic textbook",
        "Regular assessments and exams",
        "Small class sizes for personalized attention",
        "Native Arabic speaker instructors",
        "Certificate upon completion"
      ],
      prerequisites: "No prior Arabic knowledge required",
      schedule: "3 sessions per week, 1 hour each",
      certification: "Certificate of Completion in Arabic Language"
    },
    {
      id: "arabic-kids",
      title: "Arabic for Kids",
      duration: "24 months",
      classSize: 5,
      platform: "Zoom",
      book: "العربية بين يدي أولادنا (Arabic in the Hands of Our Children)",
      description: "Fun and engaging Arabic learning program specially designed for children aged 6-14 years.",
      detailedDescription: "Give your children the gift of Arabic with our specially designed program that makes learning fun and effective. Using interactive methods, games, and age-appropriate content, we ensure children develop a love for the Arabic language while building strong foundations.",
      variant: "secondary",
      image: ArabicKidsImg, // Placeholder image
      levels: [
        {
          title: "Foundation Level",
          duration: "6-8 books",
          description: "Basic grammar focus with interactive learning methods",
          objectives: [
            "Learn Arabic letters through fun activities",
            "Basic vocabulary through games and songs",
            "Simple sentence formation",
            "Interactive storytelling in Arabic",
            "Cultural awareness activities"
          ]
        },
        {
          title: "Intermediate Level",
          duration: "Continued progression",
          description: "Building vocabulary and sentence construction",
          objectives: [
            "Expanded vocabulary building",
            "Reading simple Arabic texts",
            "Writing practice with proper script",
            "Grammar through interactive exercises",
            "Speaking confidence development"
          ]
        },
        {
          title: "Advanced Level",
          duration: "Final books",
          description: "Reading comprehension and writing skills",
          objectives: [
            "Advanced reading comprehension",
            "Creative writing in Arabic",
            "Presentation skills in Arabic",
            "Complex grammar understanding",
            "Cultural and historical awareness"
          ]
        }
      ],
      features: [
        "Child-friendly interactive sessions",
        "Educational games and activities",
        "Visual and audio learning aids",
        "Progress tracking and rewards",
        "Parent-teacher communication",
        "Cultural immersion activities"
      ],
      prerequisites: "Ages 6-14, basic reading ability in native language",
      schedule: "2 sessions per week, 45 minutes each",
      certification: "Certificate of Achievement in Arabic for Young Learners"
    },
    {
      id: "arabic-advanced",
      title: "Arabic Advanced",
      duration: "24 months",
      classSize: 5,
      platform: "Zoom",
      book: "Book 3 (3 parts), Book 4 (2 parts)",
      description: "Advanced Arabic studies for students who have completed the foundational levels.",
      detailedDescription: "Take your Arabic to professional levels with our advanced program. This intensive course focuses on mastery of complex grammar, literature appreciation, advanced writing techniques, and eloquent speaking skills for those serious about Arabic proficiency.",
      variant: "accent",
      image: ArabicAdvancedImg,
      subjects: ["Tarikatul Kitaba (Writing)", "Tarikatul Khitaba (Speaking)", "Advanced Grammar", "Literature"],
      subjectDetails: [
        {
          name: "Tarikatul Kitaba (Writing)",
          description: "Master the art of Arabic writing with advanced composition techniques, formal writing styles, and literary expression."
        },
        {
          name: "Tarikatul Khitaba (Speaking)",
          description: "Develop eloquent speaking skills, public speaking in Arabic, and advanced conversational abilities."
        },
        {
          name: "Advanced Grammar",
          description: "Deep dive into complex grammatical structures, advanced syntax, and linguistic analysis."
        },
        {
          name: "Literature",
          description: "Study classical and modern Arabic literature, poetry analysis, and literary criticism."
        }
      ],
      features: [
        "Advanced curriculum design",
        "Literary text analysis",
        "Advanced writing workshops",
        "Public speaking practice",
        "Research project completion",
        "Professional certification"
      ],
      prerequisites: "Completion of Arabic intermediate level or equivalent proficiency",
      schedule: "4 sessions per week, 1.5 hours each",
      certification: "Advanced Certificate in Arabic Language and Literature"
    },
    {
      id: "islamic-foundation",
      title: "Islamic Foundation",
      duration: "12 months",
      classSize: 5,
      platform: "Zoom",
      book: "Comprehensive Islamic Studies Materials",
      description: "Essential Islamic knowledge covering history, beliefs, and Quranic understanding.",
      detailedDescription: "Build a solid foundation in Islamic knowledge with our comprehensive program covering the essential aspects of Islamic faith, history, and practice. This course provides deep understanding of Islamic principles and their application in modern life.",
      variant: "primary",
      image: IslamicFoundationImg, // Placeholder image
      subjects: ["Islamic History", "Islamiyat", "Seerah", "Tafseer ul Quran"],
      subjectDetails: [
        {
          name: "Islamic History",
          description: "Study the rich history of Islam from the time of Prophet Muhammad (PBUH) to modern times, understanding key events and their significance."
        },
        {
          name: "Islamiyat",
          description: "Comprehensive study of Islamic beliefs, practices, and principles covering all aspects of Islamic faith and worship."
        },
        {
          name: "Seerah",
          description: "In-depth study of the life of Prophet Muhammad (PBUH), his character, teachings, and examples for modern Muslims."
        },
        {
          name: "Tafseer ul Quran",
          description: "Understanding and interpretation of Quranic verses, exploring the meanings, context, and lessons from the Holy Quran."
        }
      ],
      features: [
        "Authentic Islamic sources",
        "Scholarly interpretation",
        "Interactive discussions",
        "Practical application focus",
        "Q&A sessions with scholars",
        "Certificate of Islamic Studies"
      ],
      prerequisites: "Basic understanding of Islamic practices",
      schedule: "3 sessions per week, 1 hour each",
      certification: "Certificate in Islamic Foundation Studies"
    },
    {
      id: "quran-study",
      title: "Quran Study",
      duration: "6 months",
      classSize: 5,
      platform: "Zoom",
      book: "Quran with Tajweed Rules",
      description: "Comprehensive Quranic studies including recitation, memorization, and proper pronunciation.",
      detailedDescription: "Master the recitation of the Holy Quran with proper pronunciation and understanding. This intensive program focuses on Tajweed rules, memorization techniques, and deep comprehension of Quranic verses.",
      variant: "secondary",
      image: QuranStudyImg, // Placeholder image
      subjects: ["Nazira (Reading)", "Hifz (Memorization)", "Tajweed (Pronunciation)"],
      subjectDetails: [
        {
          name: "Nazira (Reading)",
          description: "Master fluent and accurate reading of the Quran with proper pronunciation and rhythm."
        },
        {
          name: "Hifz (Memorization)",
          description: "Systematic memorization techniques for Quranic verses with retention strategies and review methods."
        },
        {
          name: "Tajweed (Pronunciation)",
          description: "Learn the rules of proper Quranic recitation including articulation, timing, and melodious recitation."
        }
      ],
      features: [
        "One-on-one recitation sessions",
        "Memorization tracking system",
        "Audio-visual learning aids",
        "Regular revision sessions",
        "Ijaza certification path",
        "Personal progress monitoring"
      ],
      prerequisites: "Ability to read Arabic letters",
      schedule: "Daily sessions, 45 minutes each",
      certification: "Certificate in Quranic Studies and Tajweed"
    }
  ];

  // Route parsing
  const parseRoute = () => {
    const path = currentPath.replace(/^\//, ''); // Remove leading slash
    if (path === '' || path === '/') return { view: 'home' };
    
    const courseId = path;
    const course = courses.find(c => c.id === courseId);
    
    if (course) {
      return { view: 'course', courseId, course };
    }
    
    return { view: '404' };
  };

  const route = parseRoute();

  // Course Overview Component
  const CourseOverview = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Islamic Education Courses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive programs designed to build strong foundations in Arabic language and Islamic studies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={() => navigate(`/${course.id}`)}
            >
              <div
                className="h-48 bg-cover bg-center rounded-t-2xl flex items-center justify-center relative"
                style={{ backgroundImage: `url(${course.image})` }}
              >
                {/* Semi-transparent overlay for text readability */}
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-t-2xl"></div>
                {/* Course title text */}
                <h3 className="relative text-2xl font-bold text-white z-10 text-center px-4">
                  {course.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Clock size={16} />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={16} />
                    {course.classSize} students
                  </span>
                </div>
                <div className="text-xs text-gray-400 mb-3">
                  URL: /{course.id}
                </div>
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Course Detail Component
  const CourseDetail = ({ course }) => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className={`bg-gradient-to-br ${course.color} text-white py-16`}>
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 mb-6 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Courses
          </button>
          <div className="max-w-4xl">
            <div className="text-sm text-white/70 mb-2">
              URL: <code>{window.location.href}</code>
            </div>
            <h1 className="text-5xl font-bold mb-4">{course.title}</h1>
            <p className="text-xl text-white/90 mb-6">{course.detailedDescription}</p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Clock className="text-white/80" size={20} />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="text-white/80" size={20} />
                <span>{course.classSize} students per class</span>
              </div>
              <div className="flex items-center gap-2">
                <Monitor className="text-white/80" size={20} />
                <span>{course.platform}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Overview */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Course Overview</h2>
              <p className="text-gray-600 mb-6">{course.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <Book className="text-blue-600" size={20} />
                  <div>
                    <div className="font-semibold text-gray-800">Textbook</div>
                    <div className="text-gray-600 text-sm">{course.book}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="text-green-600" size={20} />
                  <div>
                    <div className="font-semibold text-gray-800">Schedule</div>
                    <div className="text-gray-600 text-sm">{course.schedule}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="text-purple-600" size={20} />
                  <div>
                    <div className="font-semibold text-gray-800">Prerequisites</div>
                    <div className="text-gray-600 text-sm">{course.prerequisites}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="text-orange-600" size={20} />
                  <div>
                    <div className="font-semibold text-gray-800">Certification</div>
                    <div className="text-gray-600 text-sm">{course.certification}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Levels */}
            {course.levels && (
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Course Levels</h2>
                <div className="space-y-6">
                  {course.levels.map((level, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{level.title}</h3>
                      <p className="text-blue-600 font-medium mb-2">{level.duration}</p>
                      <p className="text-gray-600 mb-4">{level.description}</p>
                      {level.objectives && (
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Learning Objectives:</h4>
                          <ul className="space-y-1">
                            {level.objectives.map((objective, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-600">
                                <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                                <span>{objective}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Subject Details */}
            {course.subjectDetails && (
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Course Subjects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {course.subjectDetails.map((subject, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{subject.name}</h3>
                      <p className="text-gray-600">{subject.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Features */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Course Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Star className="text-yellow-500" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Enroll Today</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-semibold">{course.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Class Size:</span>
                  <span className="font-semibold">{course.classSize} students</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Platform:</span>
                  <span className="font-semibold">{course.platform}</span>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // 404 Component
  const NotFound = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Course not found</p>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );

  // Render based on route
  switch (route.view) {
    case 'course':
      return <CourseDetail course={route.course} />;
    case '404':
      return <NotFound />;
    default:
      return <CourseOverview />;
  }
};

export default CourseDetail;