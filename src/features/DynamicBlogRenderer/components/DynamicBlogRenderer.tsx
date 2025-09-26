import { ComponentRenderer } from '@/features/DynamicBlogRenderer/components/ComponentRenderer';
import { BookOpen, Heart } from 'lucide-react';
import { DynamicBlogRendererProps } from '../types/DynamicBlogRendererProps';
import { Separator } from '@/components/ui/separator';

const DynamicBlogRenderer: React.FC<{ schema: DynamicBlogRendererProps }> = ({ schema }) => {
  return (
    <div className="container min-h-screen bg-background">
      <article className="relative  mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        {/* Header */}
        <header className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-12 lg:mb-20">
          <div className="flex-shrink-0">
            <BookOpen className="h-10 w-10 sm:h-12 sm:w-12 text-purple-500" />
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-snug">{schema.title}</h1>
            {schema.subtitle && (
              <p className="mt-3 text-lg sm:text-xl lg:text-2xl font-light text-slate-600 leading-relaxed">
                {schema.subtitle}
              </p>
            )}
          </div>
        </header>

        {/* Body */}
        <div className="prose prose-base sm:prose-lg lg:prose-xl max-w-none prose-slate">
          {schema.components.map((component) => (
            <ComponentRenderer key={component.id} component={component} />
          ))}
        </div>
        <Separator className="h-[1px] bg-slate-200 my-12" />
        {/* Footer */}
        <footer className="mt-16 sm:mt-20 pt-8 sm:pt-12">
          <div className="text-center">
            <div className="mb-3 sm:mb-4">
              <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-red-400 mx-auto" />
            </div>
            <p className="text-muted-foreground  text-sm sm:text-base font-light italic">Thank you for reading!</p>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default DynamicBlogRenderer;
