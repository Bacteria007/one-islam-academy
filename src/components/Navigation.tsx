import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, BookOpen, Users, Star } from "lucide-react";

const courses = [
  {
    title: "Arabic for Adults",
    description: "30 mins | 15 months | العربية بين يديك",
    href: "#arabic-adults"
  },
  {
    title: "Arabic for Kids",
    description: "30 mins | 24 months | العربية بين يدي أولادنا",
    href: "#arabic-kids"
  },
  {
    title: "Arabic Advanced",
    description: "30 mins | 24 months | Advanced levels",
    href: "#arabic-advanced"
  },
  {
    title: "Islamic Foundation",
    description: "30 mins | 12 months | History, Seerah & Tafseer",
    href: "#islamic-foundation"
  },
  {
    title: "Quran Study",
    description: "30 mins | 6 months | Nazira, Hifz & Tajweed",
    href: "#quran-study"
  }
];


export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
  <nav className="sticky top-0 z-50 w-full   bg-slate-900/95 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/bdf94bf5-17e8-4afb-a8ee-8e3901b99cc2.png" 
            alt="One Islam Academy" 
            className="h-10 w-10"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-yellow-400">One Islam Academy</span>
            <span className="text-xs text-gray-400">مقصد صرف تعليم و تربیت</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="space-x-4">
            <NavigationMenuItem>
              <NavigationMenuLink
                className="inline-flex h-10 items-center px-4 py-2 text-sm font-medium text-gray-300 hover:text-yellow-400 transition-colors"
                href="#home"
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                className="inline-flex h-10 items-center px-4 py-2 text-sm font-medium text-gray-300 hover:text-yellow-400 transition-colors"
                href="#about"
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-gray-300 hover:text-yellow-400 bg-transparent">Courses</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 p-4 bg-slate-800 rounded-md">
                  {courses.map((course) => (
                    <li key={course.title}>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-2 leading-none text-gray-300 hover:bg-gray-700 hover:text-yellow-400 transition-colors"
                          href={course.href}
                        >
                          <div className="text-sm font-medium flex items-center gap-2">
                            <BookOpen className="h-4 w-4" />
                            {course.title}
                          </div>
                          <p className="text-xs text-gray-400">{course.description}</p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            

            <NavigationMenuItem>
              <NavigationMenuLink
                className="inline-flex h-10 items-center px-4 py-2 text-sm font-medium text-gray-300 hover:text-yellow-400 transition-colors"
                href="#faculty"
              >
                Our Faculty
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Button */}
        <Button className="hidden md:inline-flex bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-full">
          Join Our Classes
        </Button>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-yellow-400">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-slate-900 text-gray-300">
            <div className="flex flex-col space-y-4 mt-6">
              <a href="#home" className="text-lg font-medium hover:text-yellow-400 transition-colors">
                Home
              </a>
              <a href="#about" className="text-lg font-medium hover:text-yellow-400 transition-colors">
                About
              </a>
              
              <div className="space-y-2">
                <h3 className="text-lg font-medium flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-yellow-400" />
                  Courses
                </h3>
                <div className="ml-6 space-y-2">
                  {courses.map((course) => (
                    <a 
                      key={course.title}
                      href={course.href} 
                      className="block text-sm text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      {course.title}
                    </a>
                  ))}
                </div>
              </div>

              
              <a href="#faculty" className="text-lg font-medium hover:text-yellow-400 transition-colors">
                Our Faculty
              </a>
                           
              <Button className="mt-6 bg-yellow-600 hover:bg-yellow-700 text-white">
                Join Our Classes
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};