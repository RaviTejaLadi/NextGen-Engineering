import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calculator, Thermometer, Waves, Settings, Zap, Target } from 'lucide-react';
import { Category } from '../types';

const iconMap = {
  Calculator,
  Thermometer,
  Waves,
  Settings,
  Zap,
  Target,
};

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const Icon = iconMap[category.icon as keyof typeof iconMap];

  return (
    <Link to={`/category/${category.id}`}>
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer group">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className={`p-3 rounded-lg ${category.color} bg-opacity-20 group-hover:bg-opacity-30 transition-all`}>
              <Icon className={`h-8 w-8 ${category.color.replace('bg-', 'text-')} opacity-80`} />
            </div>
            <Badge variant="secondary" className="text-xs">
              {category.topics.length} articles
            </Badge>
          </div>
          <CardTitle className="text-xl group-hover:text-primary transition-colors">{category.title}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">{category.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Latest articles:</p>
            <div className="space-y-1">
              {category.topics.slice(0, 3).map((topic) => (
                <div key={topic.id} className="text-sm truncate">
                  • {topic.title}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
