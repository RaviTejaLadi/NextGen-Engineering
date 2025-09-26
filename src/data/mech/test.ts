import { DynamicBlogRendererProps } from '@/features/DynamicBlogRenderer/types/DynamicBlogRendererProps';

export const test: DynamicBlogRendererProps = {
  title: 'The Renaissance of Modern Technology',
  subtitle: 'Exploring the intersection of innovation, creativity, and human ingenuity in our digital age',
  components: [
    {
      id: 'meta-info',
      type: 'meta',
      author: 'Dr. Sarah Mitchell',
      date: 'September 25, 2025',
      readTime: '12 min read',
      tags: ['Technology', 'Innovation', 'Digital Transformation', 'Future', 'AI', 'Sustainability'],
    },
    {
      id: 'lead-intro',
      type: 'text',
      content:
        'In the tapestry of human progress, we stand at a remarkable crossroads where technology transcends mere functionality to become an extension of our creative spirit and collective consciousness.',
      variant: 'lead',
    },
    {
      id: 'safety-alert',
      type: 'alert',
      title: 'Important Notice',
      description:
        'This article discusses emerging technologies and their implications. Some concepts mentioned are still in experimental phases and should be approached with appropriate caution and research.',
      variant: 'warning',
    },
    {
      id: 'intro-paragraph',
      type: 'text',
      content:
        "Technology has always been humanity's greatest amplifier. From the first stone tools to quantum computers, each breakthrough has fundamentally altered not just how we work, but how we perceive reality itself. Today, we're witnessing an unprecedented acceleration in this evolution.",
      variant: 'paragraph',
    },
    {
      id: 'main-heading',
      type: 'text',
      content: 'The Dawn of Conscious Computing',
      variant: 'heading1',
    },
    {
      id: 'hero-image',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=800&fit=crop',
      alt: 'Futuristic digital landscape with glowing neural networks',
      caption: 'The convergence of artificial intelligence and human creativity',
    },
    {
      id: 'inspiring-quote',
      type: 'text',
      content: 'The future belongs not to machines or humans alone, but to the symphony they create together.',
      variant: 'quote',
    },
    {
      id: 'decorative-separator',
      type: 'separator',
      variant: 'decorative',
    },
    {
      id: 'section-heading-2',
      type: 'text',
      content: 'Revolutionary Paradigms',
      variant: 'heading2',
    },
    {
      id: 'paradigm-list',
      type: 'list',
      ordered: true,
      items: [
        'Quantum Computing - Harnessing the power of superposition to solve impossibly complex problems',
        'Artificial General Intelligence - Moving beyond narrow AI to systems that truly understand and reason',
        'Neural Interface Technology - Direct communication between human consciousness and digital systems',
        'Sustainable Tech Ecosystems - Creating technology that heals rather than harms our planet',
        'Decentralized Networks - Empowering individuals through distributed systems and blockchain',
        'Biotechnology Integration - Merging biological and digital systems for enhanced human capabilities',
      ],
    },
    {
      id: 'section-heading-3',
      type: 'text',
      content: 'Deep Dive: Emerging Technologies',
      variant: 'heading3',
    },
    {
      id: 'tech-accordion',
      type: 'accordion',
      items: [
        {
          title: 'Quantum Computing: Beyond Binary',
          content:
            "Quantum computers don't just process information faster—they process it fundamentally differently. By exploiting quantum phenomena like superposition and entanglement, these machines can explore multiple solution paths simultaneously, promising breakthroughs in drug discovery, cryptography, and climate modeling that were previously impossible.",
        },
        {
          title: 'Artificial General Intelligence: The Next Frontier',
          content:
            "While today's AI excels at specific tasks, AGI represents the holy grail of artificial intelligence—systems that can understand, learn, and apply knowledge across diverse domains just like humans do. This technology could revolutionize every aspect of human society, from scientific research to creative expression.",
        },
        {
          title: 'Neural Interface Technology: Mind Meets Machine',
          content:
            'Brain-computer interfaces are moving from science fiction to reality. These systems can already help paralyzed individuals control devices with thought alone, but future applications could include direct knowledge transfer, enhanced memory, and seamless integration between human intuition and computational power.',
        },
        {
          title: 'Sustainable Computing: Green Innovation',
          content:
            'The tech industry is reimagining itself with sustainability at its core. From carbon-negative data centers powered by renewable energy to biodegradable electronics, the next generation of technology is designed to work in harmony with natural systems rather than against them.',
        },
      ],
    },
    {
      id: 'success-alert',
      type: 'alert',
      title: 'Breakthrough Achievement',
      description:
        'Recent advances in quantum error correction have brought us significantly closer to fault-tolerant quantum computers, marking a pivotal moment in computational history.',
      variant: 'success',
    },
    {
      id: 'impact-section',
      type: 'text',
      content: 'Societal Impact and Transformation',
      variant: 'heading2',
    },
    {
      id: 'impact-card',
      type: 'card',
      title: 'The Human Element',
      description: "Technology's true power lies in its ability to amplify human potential",
      variant: 'featured',
      content: [
        {
          id: 'human-impact-text',
          type: 'text',
          content:
            "As we advance into an age of unprecedented technological capability, the most important factor remains distinctly human: our capacity for empathy, creativity, and moral reasoning. The challenge isn't just building smarter machines, but ensuring they serve humanity's highest aspirations.",
          variant: 'paragraph',
        },
        {
          id: 'human-impact-list',
          type: 'list',
          ordered: false,
          items: [
            'Enhanced education through personalized AI tutors',
            'Medical breakthroughs enabling precision treatments',
            'Creative tools that amplify artistic expression',
            'Environmental solutions powered by advanced modeling',
          ],
        },
      ],
      footer: 'The future is not about replacing humans, but empowering them',
    },
    {
      id: 'info-alert',
      type: 'alert',
      title: 'Research Insight',
      description:
        'Studies show that human-AI collaboration produces results 23% better than either humans or AI working alone, highlighting the power of symbiotic relationships.',
      variant: 'info',
    },
    {
      id: 'challenges-heading',
      type: 'text',
      content: 'Navigating the Challenges',
      variant: 'heading3',
    },
    {
      id: 'challenges-card',
      type: 'card',
      title: 'Ethical Considerations',
      description: 'With great power comes great responsibility',
      variant: 'minimal',
      content: [
        {
          id: 'ethics-text',
          type: 'text',
          content:
            'The rapid pace of technological advancement brings unprecedented ethical challenges. How do we ensure AI systems are fair and unbiased? How do we protect privacy in an interconnected world? How do we prevent technology from exacerbating social inequalities?',
          variant: 'paragraph',
        },
      ],
      footer: 'These questions require ongoing dialogue between technologists, ethicists, and society',
    },
    {
      id: 'line-separator',
      type: 'separator',
      variant: 'line',
    },
    {
      id: 'future-heading',
      type: 'text',
      content: 'Envisioning Tomorrow',
      variant: 'heading2',
    },
    {
      id: 'future-paragraph',
      type: 'text',
      content:
        'The technologies emerging today will reshape tomorrow in ways we can barely imagine. Yet, history teaches us that the most profound changes often come not from the technology itself, but from how we choose to use it.',
      variant: 'paragraph',
    },
    {
      id: 'future-image',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop',
      alt: 'Futuristic cityscape with sustainable technology integration',
      caption: 'A vision of cities where technology and nature coexist in harmony',
    },
    {
      id: 'vision-card',
      type: 'card',
      title: 'A Sustainable Digital Future',
      description: 'Technology as a force for planetary healing',
      variant: 'default',
      content: [
        {
          id: 'sustainability-text',
          type: 'text',
          content:
            "Imagine cities where AI optimizes energy consumption in real-time, where quantum computers design new materials for carbon capture, and where biotechnology helps restore damaged ecosystems. This isn't science fiction—it's the future we're building today.",
          variant: 'paragraph',
        },
      ],
    },
    {
      id: 'dots-separator',
      type: 'separator',
      variant: 'dots',
    },
    {
      id: 'call-to-action-heading',
      type: 'text',
      content: 'Join the Renaissance',
      variant: 'heading2',
    },
    {
      id: 'cta-paragraph',
      type: 'text',
      content:
        "We stand at the threshold of a new renaissance—one defined not by rediscovering ancient wisdom, but by creating entirely new forms of knowledge and capability. The question isn't whether you'll be part of this transformation, but how you'll contribute to shaping it.",
      variant: 'paragraph',
    },
    {
      id: 'primary-cta-button',
      type: 'button',
      text: 'Explore Emerging Technologies',
      variant: 'primary',
      size: 'lg',
      href: 'https://example.com/emerging-tech',
    },
    {
      id: 'secondary-cta-button',
      type: 'button',
      text: 'Join Our Research Community',
      variant: 'gradient',
      size: 'md',
      href: 'https://example.com/community',
    },
    {
      id: 'outline-cta-button',
      type: 'button',
      text: 'Download Whitepaper',
      variant: 'outline',
      size: 'sm',
      href: 'https://example.com/whitepaper',
    },
    {
      id: 'error-alert',
      type: 'alert',
      title: 'Critical Reminder',
      description:
        "While we celebrate technological progress, we must remain vigilant about potential risks and work together to ensure these powerful tools serve humanity's best interests.",
      variant: 'error',
    },
    {
      id: 'conclusion-heading',
      type: 'text',
      content: 'The Renaissance Continues',
      variant: 'heading2',
    },
    {
      id: 'conclusion-paragraph',
      type: 'text',
      content:
        "Every generation faces the choice between being passive observers of change or active architects of the future. Today's technologies offer us unprecedented tools to solve humanity's greatest challenges—from climate change to disease, from poverty to the limits of human knowledge itself.",
      variant: 'paragraph',
    },
    {
      id: 'final-quote',
      type: 'text',
      content:
        "The future is not something that happens to us—it's something we create, one innovation, one decision, one dream at a time.",
      variant: 'quote',
    },
    {
      id: 'final-separator',
      type: 'separator',
      variant: 'decorative',
    },
    {
      id: 'topics-heading',
      type: 'text',
      content: 'Explore Related Topics',
      variant: 'heading4',
    },
    {
      id: 'topic-badge-1',
      type: 'badge',
      text: 'Quantum Computing',
      variant: 'featured',
    },
    {
      id: 'topic-badge-2',
      type: 'badge',
      text: 'Artificial Intelligence',
      variant: 'gradient',
    },
    {
      id: 'topic-badge-3',
      type: 'badge',
      text: 'Sustainable Technology',
      variant: 'outline',
    },
    {
      id: 'topic-badge-4',
      type: 'badge',
      text: 'Neural Interfaces',
      variant: 'default',
    },
    {
      id: 'topic-badge-5',
      type: 'badge',
      text: 'Biotechnology',
      variant: 'featured',
    },
    {
      id: 'topic-badge-6',
      type: 'badge',
      text: 'Digital Ethics',
      variant: 'outline',
    },
    {
      id: 'topic-badge-7',
      type: 'badge',
      text: 'Future Studies',
      variant: 'gradient',
    },
    {
      id: 'topic-badge-8',
      type: 'badge',
      text: 'Innovation Strategy',
      variant: 'default',
    },
  ],
};
