export interface BaseComponent {
  id: string;
  type: string;
}

export interface TextComponent extends BaseComponent {
  type: 'text';
  content: string;
  variant?:
    | 'paragraph'
    | 'heading1'
    | 'heading2'
    | 'heading3'
    | 'heading4'
    | 'heading5'
    | 'heading6'
    | 'quote'
    | 'lead';
  className?: string;
}

export interface ButtonComponent extends BaseComponent {
  type: 'button';
  text: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
}

export interface AlertComponent extends BaseComponent {
  type: 'alert';
  title?: string;
  description: string;
  variant?: 'info' | 'warning' | 'success' | 'error';
}

export interface AccordionItem {
  title: string;
  content: string;
}

export interface AccordionComponent extends BaseComponent {
  type: 'accordion';
  items: AccordionItem[];
}

export interface ImageComponent extends BaseComponent {
  type: 'image';
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

export interface ListComponent extends BaseComponent {
  type: 'list';
  items: string[];
  ordered?: boolean;
}

export interface CardComponent extends BaseComponent {
  type: 'card';
  title?: string;
  description?: string;
  content?: ComponentSchema[];
  footer?: string;
  variant?: 'default' | 'featured' | 'minimal';
}

export interface BadgeComponent extends BaseComponent {
  type: 'badge';
  text: string;
  variant?: 'default' | 'featured' | 'outline' | 'gradient';
}

export interface SeparatorComponent extends BaseComponent {
  type: 'separator';
  variant?: 'line' | 'decorative' | 'dots';
}

export interface MetaComponent extends BaseComponent {
  type: 'meta';
  author?: string;
  date?: string;
  readTime?: string;
  tags?: string[];
}

export type ComponentSchema =
  | TextComponent
  | ButtonComponent
  | AlertComponent
  | AccordionComponent
  | ImageComponent
  | ListComponent
  | CardComponent
  | BadgeComponent
  | SeparatorComponent
  | MetaComponent;
