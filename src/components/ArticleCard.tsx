import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { Topic } from '../types';

interface ArticleCardProps {
  topic: Topic;
  showCategory?: boolean;
}

export function ArticleCard({ topic, showCategory = false }: ArticleCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Link to={`/article/${topic.id}`}>
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer group overflow-hidden">
        {topic.image && (
          <div className="aspect-video overflow-hidden">
            <img
              src={topic.image}
              alt={topic.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <CardHeader className="pb-3">
          <div className="space-y-2">
            {showCategory && (
              <Badge variant="outline" className="text-xs capitalize w-fit">
                {topic.category.replace('-', ' ')}
              </Badge>
            )}
            <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
              {topic.title}
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground line-clamp-3">
              {topic.description}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {topic.readTime}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {formatDate(topic.publishedDate)}
                </div>
              </div>
              <ArrowRight className="h-4 w-4 group-hover:text-primary transition-colors" />
            </div>

            <div className="flex flex-wrap gap-1">
              {topic.tags.slice(0, 3).map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {topic.tags.length > 3 && (
                <Badge variant="secondary" className="text-xs">
                  +{topic.tags.length - 3}
                </Badge>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
