import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Breadcrumb } from '../components/Breadcrumb';
import { categories } from '../data/categories';
import { useProgress } from '../hooks/useProgress';
import { ArrowLeft, Clock, Bookmark, BookmarkCheck, CheckCircle2, Circle, Share, Play } from 'lucide-react';

// Import content components
import StrengthOfMaterialsContent from '../content/strengthOfMaterials';
import ThermodynamicsContent from '../content/thermodynamics';
import FluidMechanicsContent from '../content/fluidMechanics';

const contentMap: Record<string, React.ComponentType> = {
  'strength-of-materials': StrengthOfMaterialsContent,
  thermodynamics: ThermodynamicsContent,
  'fluid-mechanics': FluidMechanicsContent,
};

export function TopicPage() {
  const { topicId } = useParams();
  const { progress, toggleBookmark, markTopicCompleted, setCurrentTopic } = useProgress();

  const topic = categories.flatMap((cat) => cat.topics).find((topic) => topic.id === topicId);

  const category = categories.find((cat) => cat.topics.some((topic) => topic.id === topicId));

  useEffect(() => {
    if (topicId) {
      setCurrentTopic(topicId);
    }
  }, [topicId, setCurrentTopic]);

  if (!topic || !category) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">Topic not found</h1>
        <Link to="/categories">
          <Button>Back to Categories</Button>
        </Link>
      </div>
    );
  }

  const isBookmarked = progress.bookmarkedTopics.includes(topic.id);
  const isCompleted = progress.completedTopics.includes(topic.id);

  const ContentComponent = contentMap[topic.id];

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
    <div className="space-y-8">
      <Breadcrumb />

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 space-y-8">
          <div>
            <Link to={`/category/${category.id}`}>
              <Button variant="ghost" size="sm" className="mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to {category.title}
              </Button>
            </Link>

            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs capitalize">
                      {category.title}
                    </Badge>
                    <Badge variant="outline" className={`text-xs ${getDifficultyColor(topic.difficulty)}`}>
                      {topic.difficulty}
                    </Badge>
                  </div>
                  <h1 className="text-4xl font-bold">{topic.title}</h1>
                  <p className="text-xl text-muted-foreground">{topic.description}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {topic.duration}
                </div>
                <Button
                  variant={isBookmarked ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => toggleBookmark(topic.id)}
                >
                  {isBookmarked ? <BookmarkCheck className="h-4 w-4 mr-2" /> : <Bookmark className="h-4 w-4 mr-2" />}
                  {isBookmarked ? 'Bookmarked' : 'Bookmark'}
                </Button>
                <Button
                  variant={isCompleted ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => markTopicCompleted(topic.id)}
                  disabled={isCompleted}
                >
                  {isCompleted ? <CheckCircle2 className="h-4 w-4 mr-2" /> : <Circle className="h-4 w-4 mr-2" />}
                  {isCompleted ? 'Completed' : 'Mark Complete'}
                </Button>
                <Button variant="ghost" size="sm">
                  <Share className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                {topic.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-gray dark:prose-invert max-w-none">
            {ContentComponent ? (
              <ContentComponent />
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Play className="h-5 w-5" />
                    Coming Soon
                  </CardTitle>
                  <CardDescription>This topic content is currently being developed</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We're working on creating comprehensive content for "{topic.title}". In the meantime, you can
                    bookmark this topic to get notified when it's ready.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium">This topic will cover:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Fundamental concepts and principles</li>
                      <li>Mathematical formulations and derivations</li>
                      <li>Practical examples and applications</li>
                      <li>Interactive calculators and tools</li>
                      <li>Real-world engineering case studies</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-80 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Topic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Category</span>
                <Badge variant="outline">{category.title}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Difficulty</span>
                <Badge className={getDifficultyColor(topic.difficulty)}>{topic.difficulty}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Duration</span>
                <span className="text-sm">{topic.duration}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Status</span>
                <div className="flex items-center gap-2">
                  {isCompleted ? (
                    <Badge className="bg-green-100 text-green-800 border-green-200">Completed</Badge>
                  ) : isBookmarked ? (
                    <Badge className="bg-blue-100 text-blue-800 border-blue-200">In Progress</Badge>
                  ) : (
                    <Badge variant="outline">Not Started</Badge>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Related Topics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {category.topics
                  .filter((t) => t.id !== topic.id)
                  .slice(0, 3)
                  .map((relatedTopic) => (
                    <Link
                      key={relatedTopic.id}
                      to={`/topic/${relatedTopic.id}`}
                      className="block p-3 rounded-lg border hover:bg-accent transition-colors"
                    >
                      <div className="font-medium text-sm">{relatedTopic.title}</div>
                      <div className="text-xs text-muted-foreground">
                        {relatedTopic.difficulty} • {relatedTopic.duration}
                      </div>
                    </Link>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
