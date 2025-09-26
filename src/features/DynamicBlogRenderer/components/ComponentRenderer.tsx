import React from 'react';
import { Info, AlertTriangle, CheckCircle, XCircle, Calendar, ExternalLink, Heart, Coffee, Hash } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import {
  AccordionComponent,
  AlertComponent,
  BadgeComponent,
  ButtonComponent,
  CardComponent,
  ComponentSchema,
  ImageComponent,
  ListComponent,
  MetaComponent,
  SeparatorComponent,
  TextComponent,
} from '@/features/DynamicBlogRenderer/types/ComponentsProps';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { tagColors } from '../constants/tagColors';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const TextRenderer: React.FC<{ component: TextComponent }> = ({ component }) => {
  const { content, variant = 'paragraph', className = '' } = component;

  const baseClasses = {
    paragraph: 'text-base md:text-lg leading-relaxed text-muted-foreground mb-6 font-light tracking-wide',
    heading1: 'text-3xl text-foreground md:text-5xl lg:text-6xl  font-bold  mb-8 leading-tight ',
    heading2: 'text-2xl  text-foreground md:text-3xl lg:text-4xl font-semibold  mb-6 leading-tight',
    heading3: 'text-xl text-foreground md:text-2xl lg:text-3xl font-medium  mb-4 leading-tight',
    heading4: 'text-lg text-foreground md:text-xl lg:text-2xl font-medium  mb-3 leading-tight',
    heading5: 'text-base text-foreground md:text-lg lg:text-xl font-medium  mb-2 leading-tight',
    heading6: 'text-sm text-foreground md:text-base lg:text-lg font-medium  mb-2 leading-tight',
    quote:
      'text-lg md:text-xl lg:text-2xl font-light italic text-foreground border-l-4 border-purple-400 pl-6 my-8 leading-relaxed',
    lead: 'text-lg md:text-xl lg:text-2xl font-light text-foreground mb-8 leading-relaxed',
  };

  const variantToElement: Record<string, keyof JSX.IntrinsicElements> = {
    paragraph: 'p',
    heading1: 'h1',
    heading2: 'h2',
    heading3: 'h3',
    heading4: 'h4',
    heading5: 'h5',
    heading6: 'h6',
    quote: 'blockquote',
    lead: 'p',
  };

  const Component = variantToElement[variant] || 'p';

  return (
    <Component className={cn(baseClasses[variant], className)}>
      {variant === 'quote' && <span className="text-4xl text-foreground">"</span>}
      {content}
      {variant === 'quote' && <span className="text-4xl text-foreground">"</span>}
    </Component>
  );
};

const ButtonRenderer: React.FC<{ component: ButtonComponent }> = ({ component }) => {
  const { text, variant = 'primary', size = 'md', href, onClick } = component;

  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-lg shadow-md hover:shadow-lg';

  const variants = {
    primary:
      'bg-gradient-to-r from-purple-600 to-blue-600 text-foreground hover:from-purple-700 hover:to-blue-700 focus:ring-purple-500',
    secondary: 'bg-slate-800 text-foreground hover:bg-slate-900 focus:ring-slate-500',
    outline: 'border-2 border-purple-400 text-foreground hover:bg-purple-50 focus:ring-purple-500',
    ghost: 'text-foreground hover:bg-slate-100 focus:ring-slate-400',
    gradient:
      'bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-foreground hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 focus:ring-purple-500',
  };

  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  const className = cn(baseClasses, variants[variant], sizes[size]);

  if (href) {
    return (
      <div className="inline-block mb-4">
        <a href={href} className={className} target="_blank" rel="noopener noreferrer">
          {text}
          <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </div>
    );
  }

  return (
    <div className="inline-block mb-4">
      <Button className={className} onClick={() => typeof onClick === 'function' && onClick()}>
        {text}
      </Button>
    </div>
  );
};

const AlertRenderer: React.FC<{ component: AlertComponent }> = ({ component }) => {
  const { title, description, variant = 'info' } = component;

  const variantMapping = {
    info: 'info',
    warning: 'warning',
    success: 'default',
    error: 'destructive',
  } as const;

  const icons = {
    info: <Info className="h-5 w-5 text-blue-500" />,
    error: <XCircle className="h-5 w-5 text-red-500" />,
    warning: <AlertTriangle className="h-5 w-5 text-amber-500" />,
    success: <CheckCircle className="h-5 w-5 text-emerald-500" />,
  };

  return (
    <Alert variant={variantMapping[variant]} className={cn('relative w-full rounded-lg border-2 p-6 mb-8 shadow-md')}>
      <div className="flex items-start">
        <div className="flex-shrink-0 mt-1">{icons[variant]}</div>
        <div className="ml-4">
          {title && <AlertTitle className="mb-2 font-semibold text-lg tracking-wide">{title}</AlertTitle>}
          <AlertDescription className="text-base leading-relaxed font-light">{description}</AlertDescription>
        </div>
      </div>
    </Alert>
  );
};

const AccordionRenderer: React.FC<{ component: AccordionComponent }> = ({ component }) => {
  return (
    <div className="w-full mb-8 bg-white rounded-lg shadow-md overflow-hidden">
      <Accordion
        type="single"
        collapsible={true}
        className="w-full"
        defaultValue={component.items.length > 0 ? '0' : undefined}
      >
        {component.items.map((item, index) => (
          <AccordionItem
            key={index}
            value={index.toString()}
            className={cn('border-b border-slate-100', index === component.items.length - 1 ? 'border-b-0' : '')}
          >
            <AccordionTrigger className="flex justify-between items-center w-full py-3 px-4 text-left hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 hover:no-underline">
              <span className="font-semibold text-slate-800 text-lg pr-4 leading-relaxed">{item.title}</span>
            </AccordionTrigger>
            <AccordionContent className="overflow-hidden">
              <div className="px-4 py-3">
                <p className="text-slate-600 leading-relaxed font-light text-base">{item.content}</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

const ImageRenderer: React.FC<{ component: ImageComponent }> = ({ component }) => {
  const { src, alt, caption, className = '' } = component;

  return (
    <figure className={cn('mb-10', className)}>
      <div className="relative overflow-hidden rounded-lg shadow-md group">
        <img src={src} alt={alt} className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      {caption && (
        <figcaption className="mt-4 text-start">
          <span className="text-muted-foreground font-light italic text-base px-4 py-2 bg-slate-50/10 rounded-lg inline-block">
            {caption}
          </span>
        </figcaption>
      )}
    </figure>
  );
};

const ListRenderer: React.FC<{ component: ListComponent }> = ({ component }) => {
  const { items, ordered = false } = component;
  const ListComponent = ordered ? 'ol' : 'ul';

  return (
    <div className="mb-8 bg-gradient-to-r from-slate-50 to-purple-50 rounded-lg p-6 shadow-md">
      <ListComponent className={ordered ? 'space-y-3' : 'space-y-3'}>
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            {ordered ? (
              <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4 mt-1">
                {index + 1}
              </span>
            ) : (
              <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-4 mt-3"></div>
            )}
            <span className="text-foreground leading-relaxed font-light flex-1">{item}</span>
          </li>
        ))}
      </ListComponent>
    </div>
  );
};

const CardRenderer: React.FC<{ component: CardComponent }> = ({ component }) => {
  const { title, description, content, footer, variant = 'default' } = component;

  const variants = {
    default: 'bg-white border-slate-200',
    featured: 'bg-gradient-to-br from-purple-50 via-white to-blue-50 border-purple-200',
    minimal: 'bg-slate-50 border-slate-100',
  };

  return (
    <Card
      className={cn(
        'rounded-lg border-2 transition-all duration-300 transform hover:scale-[1.02] mb-8 overflow-hidden shadow-md hover:shadow-lg',
        variants[variant]
      )}
    >
      <CardHeader className="p-8 pb-0">
        {title && <h3 className="text-2xl font-bold text-slate-800 mb-4 leading-tight">{title}</h3>}
        {description && <p className="text-slate-600 font-light mb-6 leading-relaxed">{description}</p>}
      </CardHeader>

      {content && (
        <CardContent className="p-8 pt-6">
          <div>
            {content.map((subComponent) => (
              <ComponentRenderer key={subComponent.id} component={subComponent} />
            ))}
          </div>
        </CardContent>
      )}

      {footer && (
        <CardFooter className="px-8 py-4 bg-gradient-to-r from-slate-50 to-purple-50 border-t border-slate-100 p-0">
          <p className="text-slate-500 font-light text-sm italic w-full p-8 pt-4">{footer}</p>
        </CardFooter>
      )}
    </Card>
  );
};

const BadgeRenderer: React.FC<{ component: BadgeComponent }> = ({ component }) => {
  const { text, variant = 'default' } = component;

  const variants = {
    default: 'bg-slate-100 text-foreground hover:bg-slate-200',
    featured: 'bg-gradient-to-r from-purple-500 to-blue-500 text-foreground hover:from-purple-600 hover:to-blue-600',
    outline: 'border-2 border-purple-300 text-foreground hover:bg-purple-50',
    gradient:
      'bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-foreground hover:from-pink-500 hover:via-purple-500 hover:to-blue-500',
  };

  return (
    <Badge
      className={cn(
        'inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg mr-3 mb-3 cursor-default',
        variants[variant]
      )}
    >
      {text}
    </Badge>
  );
};

const SeparatorRenderer: React.FC<{ component: SeparatorComponent }> = ({ component }) => {
  const { variant = 'line' } = component;

  if (variant === 'decorative') {
    return (
      <div className="flex items-center justify-center my-12">
        <div className="flex items-center space-x-2">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-purple-300"></div>
          <Heart className="h-4 w-4 text-purple-400" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-purple-300"></div>
        </div>
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className="flex items-center justify-center my-12 space-x-2">
        <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
      </div>
    );
  }

  return <Separator className="my-12" />;
};

const MetaRenderer: React.FC<{ component: MetaComponent }> = ({ component }) => {
  const { date, readTime, tags } = component;

  return (
    <div className="w-full mb-10">
      {/* Top Meta Info */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-lg border border-input  p-4 shadow-md">
        <div className="flex flex-wrap items-center gap-6 text-muted-foreground text-sm ">
          {date && (
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-indigo-500" />
              <span>{date}</span>
            </div>
          )}
          {readTime && (
            <div className="flex items-center gap-2">
              <Coffee className="h-4 w-4 text-indigo-500" />
              <span>{readTime}</span>
            </div>
          )}
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => {
              const colorClass = tagColors[index % tagColors.length];
              return (
                <div
                  key={index}
                  className={cn(
                    'flex items-center gap-1 transition-colors px-3 py-1 rounded-full text-xs font-medium',
                    colorClass
                  )}
                >
                  <Hash className="w-3 h-3" /> <p>{tag}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

// Main component renderer
export const ComponentRenderer: React.FC<{ component: ComponentSchema }> = ({ component }) => {
  switch (component.type) {
    case 'text':
      return <TextRenderer component={component} />;
    case 'button':
      return <ButtonRenderer component={component} />;
    case 'alert':
      return <AlertRenderer component={component} />;
    case 'accordion':
      return <AccordionRenderer component={component} />;
    case 'image':
      return <ImageRenderer component={component} />;
    case 'list':
      return <ListRenderer component={component} />;
    case 'card':
      return <CardRenderer component={component} />;
    case 'badge':
      return <BadgeRenderer component={component} />;
    case 'separator':
      return <SeparatorRenderer component={component} />;
    case 'meta':
      return <MetaRenderer component={component} />;
    default:
      return (
        <div className="text-red-500 bg-red-50 p-4 rounded-lg">
          Unknown component type: {(component as ComponentSchema).type}
        </div>
      );
  }
};
