import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Breadcrumb } from '../components/Breadcrumb';
import { categories } from '../data/categories';
import { ArrowLeft, Clock, Calendar, Share, User, Tag } from 'lucide-react';

// Import content components
import StrengthOfMaterialsContent from '../content/strengthOfMaterials';
import ThermodynamicsContent from '../content/thermodynamics';
import FluidMechanicsContent from '../content/fluidMechanics';
import ICEnginesContent from '../content/icEngines';

const contentMap: Record<string, React.ComponentType> = {
  'strength-of-materials': StrengthOfMaterialsContent,
  thermodynamics: ThermodynamicsContent,
  'fluid-mechanics': FluidMechanicsContent,
  'ic-engines': ICEnginesContent,
};

export function ArticlePage() {
  const { articleId } = useParams();

  const topic = categories.flatMap((cat) => cat.topics).find((topic) => topic.id === articleId);

  const category = categories.find((cat) => cat.topics.some((topic) => topic.id === articleId));

  if (!topic || !category) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">Article not found</h1>
        <Link to="/categories">
          <Button>Back to Categories</Button>
        </Link>
      </div>
    );
  }

  const ContentComponent = contentMap[topic.id];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
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

            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs capitalize">
                    {category.title}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {topic.readTime}
                  </Badge>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold leading-tight">{topic.title}</h1>

                <p className="text-xl text-muted-foreground leading-relaxed">{topic.description}</p>

                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>Engineering Team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(topic.publishedDate)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{topic.readTime}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <Button variant="outline" size="sm">
                    <Share className="h-4 w-4 mr-2" />
                    Share Article
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
            {ContentComponent ? (
              <ContentComponent />
            ) : (
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Content Coming Soon</h2>
                  <p className="text-muted-foreground mb-6">
                    We're working on creating comprehensive content for "{topic.title}". This article will cover all the
                    essential concepts, practical applications, and real-world examples related to this topic.
                  </p>
                  <div className="space-y-3">
                    <h3 className="font-semibold">This article will include:</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                      <li>Fundamental principles and theoretical foundations</li>
                      <li>Mathematical formulations and derivations</li>
                      <li>Practical examples and case studies</li>
                      <li>Interactive diagrams and illustrations</li>
                      <li>Real-world engineering applications</li>
                      <li>Problem-solving techniques and methodologies</li>
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
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Article Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Category</span>
                  <Badge variant="outline">{category.title}</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Reading Time</span>
                  <span>{topic.readTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Published</span>
                  <span>{formatDate(topic.publishedDate)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Tag className="h-4 w-4" />
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {topic.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Related Articles</h3>
              <div className="space-y-3">
                {category.topics
                  .filter((t) => t.id !== topic.id)
                  .slice(0, 3)
                  .map((relatedTopic) => (
                    <Link
                      key={relatedTopic.id}
                      to={`/article/${relatedTopic.id}`}
                      className="block p-3 rounded-lg border hover:bg-accent transition-colors"
                    >
                      <div className="font-medium text-sm line-clamp-2">{relatedTopic.title}</div>
                      <div className="text-xs text-muted-foreground mt-1">{relatedTopic.readTime}</div>
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
