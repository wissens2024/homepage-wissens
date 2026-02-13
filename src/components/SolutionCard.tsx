import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { LucideIcon } from "lucide-react";
import { use3DTilt } from "../hooks/use3DTilt";

interface SolutionCardProps {
  solution: {
    icon: LucideIcon;
    title: string;
    description: string;
    features: string[];
    gradient: string;
  };
  theme: "dark" | "light";
}

export function SolutionCard({ solution, theme }: SolutionCardProps) {
  const Icon = solution.icon;
  const tilt = use3DTilt();

  return (
    <div
      ref={tilt.ref}
      style={{
        transform: tilt.transform,
        transition: 'transform 0.3s ease-out'
      }}
    >
      <Card 
        className={`group border-0 overflow-hidden ${
          theme === "dark" 
            ? "bg-gray-900/50 backdrop-blur-sm hover:bg-gray-900/70" 
            : "hover:shadow-2xl"
        } transition-all duration-300`}
      >
        <div className={`h-2 bg-gradient-to-r ${solution.gradient}`} />
        <CardHeader className="pb-4">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
            <Icon className="h-7 w-7 text-white" />
          </div>
          <CardTitle className={theme === "dark" ? "text-white text-2xl" : "text-2xl"}>
            {solution.title}
          </CardTitle>
          <CardDescription className={`text-base mt-2 ${
            theme === "dark" ? "text-gray-400" : ""
          }`}>
            {solution.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {solution.features.map((feature, idx) => (
              <li key={idx} className={`flex items-center gap-2 text-sm ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}>
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${solution.gradient}`} />
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
