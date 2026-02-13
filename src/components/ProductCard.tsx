import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Download, Video, BookOpen, ExternalLink } from "lucide-react";
import { use3DTilt } from "../hooks/use3DTilt";

interface ProductCardProps {
  product: {
    title: string;
    description: string;
    image: string;
    brochureUrl: string;
    videoUrl: string;
    manualUrl: string;
  };
  gradient: string;
  theme: "dark" | "light";
  onDownload: (url: string) => void;
  onVideo: (url: string) => void;
  onDemo: (title: string) => void;
}

export function ProductCard({ product, gradient, theme, onDownload, onVideo, onDemo }: ProductCardProps) {
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
        className={`group overflow-hidden border-0 ${
          theme === "dark" 
            ? "bg-gray-900/50 backdrop-blur-sm hover:bg-gray-900/70" 
            : "shadow-lg hover:shadow-2xl"
        } transition-all duration-300`}
      >
        <div className="relative h-48 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-80`} />
          <img 
            src={product.image} 
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h4 className="text-xl text-white">{product.title}</h4>
          </div>
        </div>
        <CardContent className="p-5">
          <p className={`mb-5 text-sm ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}>
            {product.description}
          </p>
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="outline"
              size="sm"
              className={`gap-2 text-xs ${
                theme === "dark" 
                  ? "border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white" 
                  : ""
              }`}
              onClick={() => onDownload(product.brochureUrl)}
            >
              <Download className="h-3 w-3" />
              소개서
            </Button>
            <Button
              variant="outline"
              size="sm"
              className={`gap-2 text-xs ${
                theme === "dark" 
                  ? "border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white" 
                  : ""
              }`}
              onClick={() => onDemo(product.title)}
            >
              <ExternalLink className="h-3 w-3" />
              데모
            </Button>
            <Button
              variant="outline"
              size="sm"
              className={`gap-2 text-xs ${
                theme === "dark" 
                  ? "border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white" 
                  : ""
              }`}
              onClick={() => onVideo(product.videoUrl)}
            >
              <Video className="h-3 w-3" />
              동영상
            </Button>
            <Button
              variant="outline"
              size="sm"
              className={`gap-2 text-xs ${
                theme === "dark" 
                  ? "border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white" 
                  : ""
              }`}
              onClick={() => onDownload(product.manualUrl)}
            >
              <BookOpen className="h-3 w-3" />
              매뉴얼
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
