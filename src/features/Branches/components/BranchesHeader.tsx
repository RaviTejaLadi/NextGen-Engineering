import { Grid, List } from 'lucide-react';
import { useGridViewStore } from '../stores/useGridViewStore';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const BranchesHeader = () => {
  const { isGridView, setIsGridView } = useGridViewStore();
  return (
    <div className="flex items-center justify-between mb-12">
      <div className="text-start mb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground  mb-4">Engineering Branches</h1>
        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore different fields of engineering and their applications in modern technology and society
        </p>
      </div>

      {/* View Toggle */}
      <div className="flex justify-center mb-8 bg-background rounded-lg p-1 shadow-md border">
        <Button
          onClick={() => setIsGridView(true)}
          variant={'ghost'}
          className={cn(
            'flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200',
            isGridView ? 'bg-primary text-foreground shadow-sm' : 'text-muted-foreground hover:bg-muted'
          )}
        >
          <Grid className="w-4 h-4" />
        </Button>
        <Button
          onClick={() => setIsGridView(false)}
          variant={'ghost'}
          className={cn(
            'flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200',
            !isGridView ? 'bg-primary text-foreground shadow-sm' : 'text-muted-foreground hover:bg-muted'
          )}
        >
          <List className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default BranchesHeader;
