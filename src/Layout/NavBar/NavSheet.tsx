import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { GraduationCap, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <SheetHeader>
          <SheetTitle className="flex items-center">
            <GraduationCap className="mr-2 h-5 w-5" />
            NextGen Engineering Blogs
          </SheetTitle>
          <SheetDescription>Engineering Knowledge Hub</SheetDescription>
        </SheetHeader>
        <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            <Link to="/categories" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Categories
            </Link>
            <Link to="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">
              About
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavSheet;
