import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const formatTitle = (str: string) => {
    return str.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
  };

  return (
    <nav className="flex items-center space-x-1 text-sm text-muted-foreground mb-6">
      <Link to="/" className="flex items-center hover:text-foreground transition-colors">
        <Home className="h-4 w-4" />
      </Link>

      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        return (
          <React.Fragment key={name}>
            <ChevronRight className="h-4 w-4" />
            {isLast ? (
              <span className="text-foreground font-medium">{formatTitle(name)}</span>
            ) : (
              <Link to={routeTo} className="hover:text-foreground transition-colors">
                {formatTitle(name)}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
