import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { engineeringData } from '../constants/engineeringData';
import { useGridViewStore } from '../stores/useGridViewStore';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { CategoryName } from '../types/CategoryName';
import { categoryColors } from '../constants/categoryColors';

const BranchesContent = () => {
  const { isGridView } = useGridViewStore();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="space-y-16">
      {engineeringData.map((category, categoryIndex) => {
        const colorScheme =
          categoryColors[category.category as CategoryName] || categoryColors['Emerging Technologies'];

        return (
          <div key={categoryIndex} className="relative">
            {/* Category Header with Enhanced Styling */}
            <div className="relative mb-10">
              <div className={cn('absolute inset-0 bg-gradient-to-r opacity-20 blur-xl', colorScheme.gradient)}></div>
              <div className="relative">
                <div className={cn('w-16 h-1 rounded-full mb-4', colorScheme.dot)}></div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent mb-2">
                  {category.category}
                </h2>
              </div>
            </div>

            {/* Cards Grid */}
            <div
              className={cn(
                'relative',
                isGridView
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8'
                  : 'space-y-6'
              )}
            >
              {category.branches.map((branch, branchIndex) => {
                const IconComponent = branch.icon;
                const cardId = `${categoryIndex}-${branchIndex}`;
                const isHovered = hoveredCard === cardId;

                return (
                  <Card
                    key={branchIndex}
                    className={cn(
                      'group relative overflow-hidden transition-all duration-500 ease-out transform-gpu',
                      'border-2 backdrop-blur-sm',
                      colorScheme.border,
                      isGridView ? 'h-full' : 'w-full',
                      isHovered && ['scale-105 shadow-2xl', colorScheme.glow, 'border-opacity-100'],
                      !isHovered && 'hover:scale-[1.02] hover:shadow-xl'
                    )}
                    onMouseEnter={() => setHoveredCard(cardId)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Gradient Background Overlay */}
                    <div
                      className={cn(
                        'absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500',
                        colorScheme.gradient
                      )}
                    ></div>

                    {/* Animated Border Glow */}
                    <div
                      className={cn(
                        'absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500',
                        `bg-gradient-to-r ${colorScheme.gradient.replace('/10', '/5').replace('/5', '/3')} blur-sm`
                      )}
                    ></div>

                    <CardHeader className="relative z-10 pb-4">
                      <div className="flex items-start gap-4">
                        {/* Enhanced Icon Container */}
                        <div
                          className={cn(
                            'relative p-3 rounded-xl shadow-lg transition-all duration-300 group-hover:scale-110',
                            'bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900',
                            'border border-white/20 dark:border-gray-700/50'
                          )}
                        >
                          <div
                            className={cn(
                              'absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300',
                              colorScheme.gradient
                            )}
                          ></div>
                          <IconComponent
                            className={cn(
                              'w-7 h-7 relative z-10 transition-all duration-300',
                              'text-foreground/80 group-hover:text-foreground'
                            )}
                          />

                          {/* Pulse Effect */}
                          <div
                            className={cn(
                              'absolute inset-0 rounded-xl animate-pulse opacity-0 group-hover:opacity-30',
                              colorScheme.accent
                            )}
                          ></div>
                        </div>

                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground leading-tight mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-foreground group-hover:to-foreground/70 transition-all duration-300">
                            {branch.name}
                          </CardTitle>
                          <div
                            className={cn(
                              'w-0 h-0.5 rounded-full transition-all duration-500 group-hover:w-full',
                              colorScheme.dot
                            )}
                          ></div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="relative z-10 pt-0 space-y-6">
                      <CardDescription
                        className={cn(
                          'text-muted-foreground leading-relaxed text-sm sm:text-base',
                          'group-hover:text-muted-foreground/90 transition-colors duration-300'
                        )}
                      >
                        {branch.description}
                      </CardDescription>

                      {/* Key Areas Section - Always expanded */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <h4 className="font-semibold text-foreground text-sm sm:text-base">Key Areas</h4>
                          <div
                            className={cn(
                              'flex-1 h-px bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500',
                              colorScheme.dot
                            )}
                          ></div>
                        </div>

                        <div className="grid gap-3">
                          {branch.keyPoints.map((point, pointIndex) => (
                            <div
                              key={pointIndex}
                              className={cn(
                                'group/item flex items-start gap-3  rounded-lg transition-all duration-300',
                                'hover:bg-muted/30 hover:translate-x-1'
                              )}
                            >
                              {/* Enhanced Bullet Point */}
                              <div className="relative mt-2 flex-shrink-0">
                                <div
                                  className={cn(
                                    'w-2 h-2 rounded-full transition-all duration-300',
                                    colorScheme.dot,
                                    'group-hover/item:scale-125 group-hover/item:shadow-lg'
                                  )}
                                ></div>
                                <div
                                  className={cn(
                                    'absolute inset-0 w-2 h-2 rounded-full animate-ping opacity-0 group-hover/item:opacity-75',
                                    colorScheme.accent
                                  )}
                                ></div>
                              </div>

                              <span className="text-xs sm:text-sm text-muted-foreground leading-relaxed group-hover/item:text-foreground/90 transition-colors duration-300">
                                {point}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BranchesContent;
