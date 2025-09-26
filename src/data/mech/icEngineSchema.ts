import { DynamicBlogRendererProps } from '@/features/DynamicBlogRenderer/types/DynamicBlogRendererProps';

export const icEngineSchema: DynamicBlogRendererProps = {
  title: 'The Art of Internal Combustion',
  subtitle: 'A journey through the elegant mechanics of automotive engines',
  components: [
    {
      id: 'meta-1',
      type: 'meta',
      author: 'Alexandra Chen',
      date: 'March 15, 2024',
      readTime: '8 min read',
      tags: ['Engineering', 'Automotive', 'Innovation', 'Technology'],
    },
    {
      id: 'intro-text',
      type: 'text',
      content:
        'For over a century, internal combustion engines have been the beating heart of our mechanical world. These extraordinary machines transform the simple act of combustion into the complex dance of pistons, valves, and gears that power our daily lives.',
      variant: 'lead',
    },
    {
      id: 'alert-1',
      type: 'alert',
      title: 'Safety First',
      description:
        'Working with engines requires proper safety equipment and knowledge. Always consult professionals when dealing with fuel systems and mechanical components.',
      variant: 'warning',
    },
    {
      id: 'quote-1',
      type: 'text',
      content: 'The engine is the heart of the car, and understanding its rhythm is the key to automotive mastery.',
      variant: 'quote',
    },
    {
      id: 'separator-1',
      type: 'separator',
      variant: 'decorative',
    },
    {
      id: 'heading-1',
      type: 'text',
      content: 'The Four-Stroke Symphony',
      variant: 'heading2',
    },
    {
      id: 'engine-image',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop',
      alt: 'Modern car engine compartment showcasing engineering precision',
      caption: 'The intricate beauty of modern automotive engineering',
    },
    {
      id: 'accordion-1',
      type: 'accordion',
      items: [
        {
          title: 'The Intake Stroke: Breathing Life',
          content:
            'Like a lung drawing breath, the piston moves down, creating a vacuum that pulls the fuel-air mixture into the cylinder. This delicate balance of air and fuel sets the stage for the controlled explosion that follows.',
        },
        {
          title: 'Compression: Building Tension',
          content:
            'The piston rises, compressing the mixture to a fraction of its original volume. This compression creates the perfect conditions for combustion, like a coiled spring ready to release its energy.',
        },
        {
          title: 'Power: The Moment of Truth',
          content:
            'A precisely timed spark ignites the compressed mixture, creating a controlled explosion that drives the piston down with tremendous force. This is where chemical energy becomes mechanical motion.',
        },
        {
          title: 'Exhaust: Clearing the Stage',
          content:
            'The final act sees the piston rise once more, pushing the spent gases out through the exhaust valve, clearing the cylinder for the cycle to begin anew.',
        },
      ],
    },
    {
      id: 'types-heading',
      type: 'text',
      content: 'A Spectrum of Powerplants',
      variant: 'heading2',
    },
    {
      id: 'engine-types-list',
      type: 'list',
      items: [
        'Gasoline engines - The versatile workhorses of passenger vehicles, refined over decades',
        'Diesel engines - Torque-rich powerhouses that excel in heavy-duty applications',
        'Two-stroke engines - Compact marvels found in motorcycles and specialized equipment',
        'Rotary engines - The unique Wankel design with its mesmerizing triangular rotor dance',
      ],
    },
    {
      id: 'efficiency-card',
      type: 'card',
      title: 'The Quest for Efficiency',
      description: "Modern engineering pushes the boundaries of what's possible",
      variant: 'featured',
      content: [
        {
          id: 'efficiency-text',
          type: 'text',
          content:
            "Today's engines achieve thermal efficiencies approaching 40%, with cutting-edge designs incorporating variable valve timing, direct injection, and sophisticated engine management systems. Each innovation brings us closer to the theoretical limits of thermodynamic efficiency.",
          variant: 'paragraph',
        },
      ],
      footer: 'The future promises even greater efficiency through hybrid and electric integration',
    },
    {
      id: 'separator-2',
      type: 'separator',
      variant: 'dots',
    },
    {
      id: 'success-alert',
      type: 'alert',
      title: 'The Beauty of Understanding',
      description:
        'When we understand the intricate dance of combustion, compression, and motion, we gain a deeper appreciation for the engineering marvels that surround us every day.',
      variant: 'success',
    },
    {
      id: 'cta-section',
      type: 'text',
      content: 'Continue Your Journey',
      variant: 'heading3',
    },
    {
      id: 'cta-button',
      type: 'button',
      text: 'Explore Advanced Engine Technologies',
      variant: 'gradient',
      href: 'https://example.com/engines',
      size: 'lg',
    },
    {
      id: 'separator-3',
      type: 'separator',
      variant: 'line',
    },
    {
      id: 'badges-container',
      type: 'text',
      content: 'Related Topics',
      variant: 'heading4',
    },
    {
      id: 'topic-badge-1',
      type: 'badge',
      text: 'Automotive Engineering',
      variant: 'featured',
    },
    {
      id: 'topic-badge-2',
      type: 'badge',
      text: 'Mechanical Design',
      variant: 'gradient',
    },
    {
      id: 'topic-badge-3',
      type: 'badge',
      text: 'Thermodynamics',
      variant: 'outline',
    },
    {
      id: 'topic-badge-4',
      type: 'badge',
      text: 'Innovation',
      variant: 'default',
    },
  ],
};
