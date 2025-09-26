import { ComponentSchema } from './ComponentsProps';

export interface DynamicBlogRendererProps {
  title: string;
  subtitle?: string;
  components: ComponentSchema[];
}
