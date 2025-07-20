import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, BookOpen, Monitor, GraduationCap } from "lucide-react";

interface CourseLevel {
  title: string;
  duration: string;
  description: string;
}

interface CourseCardProps {
  title: string;
  duration: string;
  classSize: number;
  platform: string;
  book: string;
  description: string;
  levels?: CourseLevel[];
  subjects?: string[];
  image?: string;
  variant?: "primary" | "secondary" | "accent";
}

export const CourseCard = ({
  title,
  duration,
  classSize,
  platform,
  book,
  description,
  levels,
  subjects,
  image,
  variant = "primary"
}: CourseCardProps) => {
  const variantClasses = {
    primary: "border-primary/20 hover:border-primary/40",
    secondary: "border-secondary/20 hover:border-secondary/40",
    accent: "border-islamic-teal/20 hover:border-islamic-teal/40"
  };

  const iconColor = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-islamic-teal"
  };

  return (
    <Card className={`group hover:shadow-lg transition-all duration-300 h-full ${variantClasses[variant]}`}>
      {image && (
        <div className="relative overflow-hidden rounded-t-lg aspect-[16/9] sm:aspect-[4/3]">
          <img
            src={image}
            alt={`${title} course image`}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-semibold">
          <BookOpen className={`h-6 w-6 ${iconColor[variant]}`} />
          {title}
        </CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          <Badge variant="outline" className="text-xs">
            <Clock className="h-3 w-3 mr-1" />
            30 mins
          </Badge>
          <Badge variant="outline" className="text-xs">
            <GraduationCap className="h-3 w-3 mr-1" />
            {duration}
          </Badge>
          <Badge variant="outline" className="text-xs">
            <Users className="h-3 w-3 mr-1" />
            {classSize} students
          </Badge>
          <Badge variant="outline" className="text-xs">
            <Monitor className="h-3 w-3 mr-1" />
            {platform}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 p-4 sm:p-6">
        <div>
          <h4 className="font-semibold text-sm mb-2">Course Book:</h4>
          <p className="text-sm text-muted-foreground bg-muted/50 p-2 rounded">{book}</p>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-2">Description:</h4>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>

        {levels && levels.length > 0 && (
          <div>
            <h4 className="font-semibold text-sm mb-3">Course Levels:</h4>
            <div className="space-y-3">
              {levels.map((level, index) => (
                <div key={index} className="border-l-2 border-primary/20 pl-3">
                  <h5 className="font-medium text-sm">{level.title}</h5>
                  <p className="text-xs text-muted-foreground mb-1">{level.duration}</p>
                  <p className="text-xs text-muted-foreground">{level.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {subjects && subjects.length > 0 && (
          <div>
            <h4 className="font-semibold text-sm mb-2">Subjects Covered:</h4>
            <div className="flex flex-wrap gap-1">
              {subjects.map((subject, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {subject}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <Button
          className={`w-full mt-4 ${
            variant === "primary" ? "bg-gradient-to-r from-primary to-primary-glow" :
            variant === "secondary" ? "bg-secondary hover:bg-secondary/90" :
            "bg-islamic-teal hover:bg-islamic-teal/90"
          }`}
        >
          Enroll Now
        </Button>
      </CardContent>
    </Card>
  );
};