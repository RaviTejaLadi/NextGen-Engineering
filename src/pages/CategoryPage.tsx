import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArticleCard } from '../components/ArticleCard';
import { Breadcrumb } from '../components/Breadcrumb';
import { categories } from '../data/categories';
import { Calculator, Thermometer, Waves, Settings, Zap, Target, ArrowLeft } from 'lucide-react';

const iconMap = {
  Calculator,
  Thermometer,
  Waves,
  Settings,
  Zap,
  Target,
};

export function CategoryPage() {
  const { categoryId } = useParams();

  const category = categories.find((cat) => cat.id === categoryId);

  if (!category) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">Category not found</h1>
        <Link to="/categories">
          <Button>Back to Categories</Button>
        </Link>
      </div>
    );
  }

  const Icon = iconMap[category.icon as keyof typeof iconMap];

  return (
    <div className="space-y-8">
      <Breadcrumb />

      <div className="flex items-start justify-between">
        <div className="space-y-4">
          <Link to="/categories">
            <Button variant="ghost" size="sm" className="mb-2">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Categories
            </Button>
          </Link>

          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-lg ${category.color} bg-opacity-10`}>
              <Icon className={`h-8 w-8 ${category.color.replace('bg-', 'text-')}`} />
            </div>
            <div>
              <h1 className="text-4xl font-bold">{category.title}</h1>
              <p className="text-xl text-muted-foreground mt-2">{category.description}</p>
            </div>
          </div>
        </div>

        <Badge variant="secondary" className="text-sm">
          {category.topics.length} articles
        </Badge>
      </div>

      <div className="bg-card border rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">About This Category</h3>
        <p className="text-muted-foreground mb-4">
          Explore comprehensive articles covering {category.title.toLowerCase()} topics. From fundamental principles to
          advanced applications, these articles provide in-depth knowledge for students, professionals, and enthusiasts.
        </p>
        <div className="flex gap-2">
          <Badge variant="outline">{category.topics.length} Articles</Badge>
          <Badge variant="outline">Expert Written</Badge>
          <Badge variant="outline">Regularly Updated</Badge>
        </div>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-6">All Articles</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {category.topics
            .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
            .map((topic) => (
              <ArticleCard key={topic.id} topic={topic} />
            ))}
        </div>
      </section>
    </div>
  );
}
