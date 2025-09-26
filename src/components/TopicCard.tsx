import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Bookmark, BookmarkCheck, CheckCircle2, Circle, ArrowRight } from 'lucide-react';
import { Topic } from '../types';
import { useProgress } from '../hooks/useProgress';

interface TopicCardProps {
  topic: Topic;
  showCategory?: boolean;
}

export function TopicCard({ topic, showCategory = false }: TopicCardProps) {
  const { progress, toggleBookmark, markTopicCompleted } = useProgress();

  const isBookmarked = progress.bookmarkedTopics.includes(topic.id);
  const isCompleted = progress.completedTopics.includes(topic.id);

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleBookmark(topic.id);
  };

  const handleCompleteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isCompleted) {
      markTopicCompleted(topic.id);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900 dark:text-green-300 dark:border-green-700';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900 dark:text-yellow-300 dark:border-yellow-700';
      case 'advanced':
        return 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900 dark:text-red-300 dark:border-red-700';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700';
    }
  };

  return (
    <Link to={`/topic/${topic.id}`}>
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer group">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="space-y-2 flex-1">
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 p-0 hover:bg-transparent"
                  onClick={handleCompleteClick}
                >
                  {isCompleted ? (
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  ) : (
                    <Circle className="h-5 w-5 text-muted-foreground hover:text-green-600 transition-colors" />
                  )}
                </Button>
                {showCategory && (
                  <Badge variant="outline" className="text-xs capitalize">
                    {topic.category.replace('-', ' ')}
                  </Badge>
                )}
              </div>
              <CardTitle className="text-lg group-hover:text-primary transition-colors">{topic.title}</CardTitle>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0" onClick={handleBookmarkClick}>
              {isBookmarked ? (
                <BookmarkCheck className="h-4 w-4 text-primary" />
              ) : (
                <Bookmark className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
              )}
            </Button>
          </div>
          <CardDescription className="text-sm text-muted-foreground mt-2">{topic.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {topic.duration}
                </div>
                <Badge variant="outline" className={`text-xs ${getDifficultyColor(topic.difficulty)}`}>
                  {topic.difficulty}
                </Badge>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
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
