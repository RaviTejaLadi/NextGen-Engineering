import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { GraduationCap, BookOpen, TrendingUp } from 'lucide-react';
import Branches from '@/features/Branches/components';

export function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950 rounded-3xl">
        <GraduationCap className="h-20 w-20 mx-auto mb-8 text-primary" />
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Engineering Knowledge Hub
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Explore comprehensive articles on engineering topics, from fundamental principles to cutting-edge
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

      <Branches />
    </div>
  );
}
