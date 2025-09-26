import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CategoryCard } from '../components/CategoryCard';
import { ArticleCard } from '../components/ArticleCard';
import { categories } from '../data/categories';
import { GraduationCap, BookOpen, TrendingUp, Clock, Users } from 'lucide-react';

export function HomePage() {
  const allTopics = categories.flatMap((cat) => cat.topics);
  const featuredArticles = allTopics
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, 6);

  const recentArticles = allTopics
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, 3);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950 rounded-3xl">
        <GraduationCap className="h-20 w-20 mx-auto mb-8 text-primary" />
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Mechanical Engineering Hub
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Explore comprehensive articles on mechanical engineering topics, from fundamental principles to cutting-edge
          technologies. Written by experts for students, professionals, and enthusiasts.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/categories">
            <Button size="lg" className="min-w-40">
              <BookOpen className="mr-2 h-5 w-5" />
              Browse Articles
            </Button>
          </Link>
          <Link to="/article/ic-engines">
            <Button variant="outline" size="lg" className="min-w-40">
              <TrendingUp className="mr-2 h-5 w-5" />
              Featured Article
            </Button>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <BookOpen className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Articles</p>
                  <p className="text-3xl font-bold">{allTopics.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Categories</p>
                  <p className="text-3xl font-bold">{categories.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                  <Clock className="h-6 w-6 text-green-600 dark:text-green-300" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Reading Time</p>
                  <p className="text-3xl font-bold">15+ hrs</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recent Articles */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold">Latest Articles</h2>
            <p className="text-muted-foreground">Stay updated with our newest content</p>
          </div>
          <Link to="/categories">
            <Button variant="outline">View All</Button>
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recentArticles.map((topic) => (
            <ArticleCard key={topic.id} topic={topic} showCategory />
          ))}
        </div>
      </section>

      {/* Categories Overview */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold">Explore Categories</h2>
            <p className="text-muted-foreground">Discover articles organized by engineering discipline</p>
          </div>
          <Link to="/categories">
            <Button variant="outline">View All Categories</Button>
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.slice(0, 6).map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Featured Articles */}
      <section>
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Featured Articles</h2>
          <p className="text-muted-foreground">Hand-picked articles covering essential mechanical engineering topics</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredArticles.map((topic) => (
            <ArticleCard key={topic.id} topic={topic} showCategory />
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950 rounded-3xl text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Get the latest mechanical engineering articles and insights delivered to your inbox. Join our community of
          engineers and students.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-lg border border-input bg-background"
          />
          <Button>Subscribe</Button>
        </div>
      </section>
    </div>
  );
}
