import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArticleCard } from './ArticleCard';
import { Topic } from '../types';
import { Search } from 'lucide-react';

interface SearchResultsProps {
  results: Topic[];
  query: string;
}

export function SearchResults({ results, query }: SearchResultsProps) {
  if (!query.trim()) {
    return null;
  }

  if (results.length === 0) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="flex flex-col items-center justify-center py-12">
          <Search className="h-16 w-16 text-muted-foreground mb-4" />
          <CardTitle className="text-xl mb-2">No articles found</CardTitle>
          <p className="text-muted-foreground text-center">
            No articles match your search for "{query}". Try different keywords or browse categories.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Search Results
            <Badge variant="secondary">{results.length} found</Badge>
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Found {results.length} article{results.length !== 1 ? 's' : ''} matching "{query}"
          </p>
        </CardHeader>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {results.map((topic) => (
          <ArticleCard key={topic.id} topic={topic} showCategory />
        ))}
      </div>
    </div>
  );
}
