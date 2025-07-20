import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { BookOpen, Mail, Phone, MapPin, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-muted/20 to-muted/40 border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/bdf94bf5-17e8-4afb-a8ee-8e3901b99cc2.png" 
                alt="One Islam Academy" 
                className="h-12 w-12"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-primary">One Islam Academy</span>
                <span className="text-sm text-muted-foreground">مقصد صرف تعليم و تربیت</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Authentic Islamic education combining traditional scholarship with modern teaching methods. 
              Learn Arabic and deepen your Islamic knowledge with expert instructors.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="hover:bg-primary/10 hover:text-primary">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-primary/10 hover:text-primary">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-primary/10 hover:text-primary">
                <Youtube className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-primary/10 hover:text-primary">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</a></li>
              <li><a href="#courses" className="text-muted-foreground hover:text-primary transition-colors text-sm">Courses</a></li>
              <li><a href="#coaching" className="text-muted-foreground hover:text-primary transition-colors text-sm">Coaching</a></li>
              <li><a href="#faculty" className="text-muted-foreground hover:text-primary transition-colors text-sm">Our Faculty</a></li>
              <li><a href="#blogs" className="text-muted-foreground hover:text-primary transition-colors text-sm">Blogs</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Popular Courses</h3>
            <ul className="space-y-2">
              <li><a href="#arabic-adults" className="text-muted-foreground hover:text-primary transition-colors text-sm">Arabic for Adults</a></li>
              <li><a href="#arabic-kids" className="text-muted-foreground hover:text-primary transition-colors text-sm">Arabic for Kids</a></li>
              <li><a href="#quran-study" className="text-muted-foreground hover:text-primary transition-colors text-sm">Quran Study</a></li>
              <li><a href="#islamic-foundation" className="text-muted-foreground hover:text-primary transition-colors text-sm">Islamic Foundation</a></li>
              <li><a href="#personal-arabic" className="text-muted-foreground hover:text-primary transition-colors text-sm">1-on-1 Arabic</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Stay Connected</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@oneislamacademy.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Online Classes Worldwide</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">Subscribe to our newsletter</p>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Enter your email" 
                  className="text-sm"
                />
                <Button size="sm" className="bg-gradient-to-r from-primary to-primary-glow">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 One Islam Academy. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <a href="#privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};