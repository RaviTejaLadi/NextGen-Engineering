import React from 'react';
import { CategoryCard } from '../components/CategoryCard';
import { categories } from '../data/categories';
import { Breadcrumb } from '../components/Breadcrumb';

export function CategoriesPage() {
  return (
    <div className="space-y-8">
      <Breadcrumb />

      <div>
        <h1 className="text-4xl font-bold mb-4">Learning Categories</h1>
        <p className="text-xl text-muted-foreground">Explore mechanical engineering topics organized by discipline</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
