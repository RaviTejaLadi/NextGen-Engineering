# Dynamic Blog Content Generator Prompt

## Instructions:
Generate a comprehensive blog content schema in JSON format for the topic: **[INSERT TOPIC HERE]**

## Required Schema Structure:
```json
{
  "title": "[Compelling title about the topic]",
  "subtitle": "[Engaging subtitle that expands on the title]",
  "components": [
    // Array of component objects as specified below
  ]
}
```

## MANDATORY: Include ALL Component Types (in this exact order):

### 1. Meta Information
```json
{
  "id": "meta-info",
  "type": "meta",
  "author": "[Professional author name]",
  "date": "[Current or recent date]",
  "readTime": "[X min read]",
  "tags": ["[4-6 relevant tags for the topic]"]
}
```

### 2. Lead Introduction
```json
{
  "id": "lead-intro",
  "type": "text",
  "content": "[Compelling opening paragraph that hooks the reader]",
  "variant": "lead"
}
```

### 3. Warning/Info Alert
```json
{
  "id": "alert-1",
  "type": "alert",
  "title": "[Alert Title]",
  "description": "[Important notice or disclaimer related to the topic]",
  "variant": "warning" // or "info"
}
```

### 4. Introduction Paragraph
```json
{
  "id": "intro-paragraph",
  "type": "text",
  "content": "[Detailed introduction explaining the topic's importance and context]",
  "variant": "paragraph"
}
```

### 5. Main Heading
```json
{
  "id": "main-heading",
  "type": "text",
  "content": "[Creative section heading related to the topic]",
  "variant": "heading1"
}
```

### 6. Hero Image
```json
{
  "id": "hero-image",
  "type": "image",
  "src": "https://images.unsplash.com/photo-[relevant-unsplash-photo-id]?w=1200&h=800&fit=crop",
  "alt": "[Descriptive alt text for the image]",
  "caption": "[Professional caption describing the image's relevance]"
}
```

### 7. Inspirational Quote
```json
{
  "id": "quote-1",
  "type": "text",
  "content": "[Inspiring or thought-provoking quote related to the topic]",
  "variant": "quote"
}
```

### 8. Decorative Separator
```json
{
  "id": "separator-1",
  "type": "separator",
  "variant": "decorative"
}
```

### 9. Section Heading 2
```json
{
  "id": "section-heading-2",
  "type": "text",
  "content": "[Second major section heading]",
  "variant": "heading2"
}
```

### 10. Ordered List (Key Points)
```json
{
  "id": "key-points-list",
  "type": "list",
  "ordered": true,
  "items": [
    "[6-8 key points about the topic, each being substantial and informative]"
  ]
}
```

### 11. Subsection Heading
```json
{
  "id": "subsection-heading",
  "type": "text",
  "content": "[Subsection heading for detailed exploration]",
  "variant": "heading3"
}
```

### 12. Detailed Accordion
```json
{
  "id": "detailed-accordion",
  "type": "accordion",
  "items": [
    {
      "title": "[4 accordion items, each with detailed title]",
      "content": "[Comprehensive content for each accordion item, 2-3 sentences minimum]"
    }
    // Repeat for 4 items total
  ]
}
```

### 13. Success Alert
```json
{
  "id": "success-alert",
  "type": "alert",
  "title": "[Positive achievement or breakthrough]",
  "description": "[Success story or positive development in the field]",
  "variant": "success"
}
```

### 14. Impact Section Heading
```json
{
  "id": "impact-heading",
  "type": "text",
  "content": "[Heading about impact or applications]",
  "variant": "heading2"
}
```

### 15. Featured Card with Nested Content
```json
{
  "id": "impact-card",
  "type": "card",
  "title": "[Card title about impact/applications]",
  "description": "[Brief description of the card's content]",
  "variant": "featured",
  "content": [
    {
      "id": "card-text-1",
      "type": "text",
      "content": "[Detailed paragraph about the topic's impact]",
      "variant": "paragraph"
    },
    {
      "id": "card-list-1",
      "type": "list",
      "ordered": false,
      "items": ["[4-5 specific examples or applications]"]
    }
  ],
  "footer": "[Concluding thought or call-to-action for the card]"
}
```

### 16. Info Alert
```json
{
  "id": "info-alert",
  "type": "alert",
  "title": "[Research or Study Insight]",
  "description": "[Interesting fact, statistic, or research finding]",
  "variant": "info"
}
```

### 17. Challenges Section
```json
{
  "id": "challenges-heading",
  "type": "text",
  "content": "[Heading about challenges or considerations]",
  "variant": "heading3"
}
```

### 18. Minimal Card
```json
{
  "id": "challenges-card",
  "type": "card",
  "title": "[Challenge or consideration title]",
  "description": "[Brief description of challenges]",
  "variant": "minimal",
  "content": [
    {
      "id": "challenges-text",
      "type": "text",
      "content": "[Detailed discussion of challenges or ethical considerations]",
      "variant": "paragraph"
    }
  ],
  "footer": "[Thoughtful conclusion about addressing challenges]"
}
```

### 19. Line Separator
```json
{
  "id": "line-separator",
  "type": "separator",
  "variant": "line"
}
```

### 20. Future/Vision Section
```json
{
  "id": "future-heading",
  "type": "text",
  "content": "[Future-focused heading]",
  "variant": "heading2"
}
```

### 21. Future Paragraph
```json
{
  "id": "future-paragraph",
  "type": "text",
  "content": "[Paragraph about future developments or possibilities]",
  "variant": "paragraph"
}
```

### 22. Second Image
```json
{
  "id": "future-image",
  "type": "image",
  "src": "https://images.unsplash.com/photo-[another-relevant-photo-id]?w=1200&h=800&fit=crop",
  "alt": "[Alt text for future/vision image]",
  "caption": "[Caption describing the future vision]"
}
```

### 23. Default Card
```json
{
  "id": "vision-card",
  "type": "card",
  "title": "[Vision or future application title]",
  "description": "[Description of future possibilities]",
  "variant": "default",
  "content": [
    {
      "id": "vision-text",
      "type": "text",
      "content": "[Detailed vision of the future related to this topic]",
      "variant": "paragraph"
    }
  ]
}
```

### 24. Dots Separator
```json
{
  "id": "dots-separator",
  "type": "separator",
  "variant": "dots"
}
```

### 25. Call-to-Action Section
```json
{
  "id": "cta-heading",
  "type": "text",
  "content": "[Engaging CTA heading]",
  "variant": "heading2"
}
```

### 26. CTA Paragraph
```json
{
  "id": "cta-paragraph",
  "type": "text",
  "content": "[Motivational paragraph encouraging reader engagement]",
  "variant": "paragraph"
}
```

### 27. Three Buttons (All Variants)
```json
{
  "id": "primary-cta",
  "type": "button",
  "text": "[Primary action text]",
  "variant": "primary",
  "size": "lg",
  "href": "https://example.com/[relevant-link]"
},
{
  "id": "secondary-cta",
  "type": "button",
  "text": "[Secondary action text]",
  "variant": "gradient",
  "size": "md",
  "href": "https://example.com/[relevant-link]"
},
{
  "id": "tertiary-cta",
  "type": "button",
  "text": "[Tertiary action text]",
  "variant": "outline",
  "size": "sm",
  "href": "https://example.com/[relevant-link]"
}
```

### 28. Error/Critical Alert
```json
{
  "id": "critical-alert",
  "type": "alert",
  "title": "[Critical consideration title]",
  "description": "[Important warning or critical consideration about the topic]",
  "variant": "error"
}
```

### 29. Conclusion Section
```json
{
  "id": "conclusion-heading",
  "type": "text",
  "content": "[Conclusion heading]",
  "variant": "heading2"
}
```

### 30. Conclusion Paragraph
```json
{
  "id": "conclusion-paragraph",
  "type": "text",
  "content": "[Thoughtful conclusion tying everything together]",
  "variant": "paragraph"
}
```

### 31. Final Quote
```json
{
  "id": "final-quote",
  "type": "text",
  "content": "[Memorable closing quote related to the topic]",
  "variant": "quote"
}
```

### 32. Final Decorative Separator
```json
{
  "id": "final-separator",
  "type": "separator",
  "variant": "decorative"
}
```

### 33. Topics Heading
```json
{
  "id": "topics-heading",
  "type": "text",
  "content": "Explore Related Topics",
  "variant": "heading4"
}
```

### 34. Eight Badges (All Variants)
```json
{
  "id": "badge-1",
  "type": "badge",
  "text": "[Related topic 1]",
  "variant": "featured"
},
{
  "id": "badge-2",
  "type": "badge",
  "text": "[Related topic 2]",
  "variant": "gradient"
},
{
  "id": "badge-3",
  "type": "badge",
  "text": "[Related topic 3]",
  "variant": "outline"
},
{
  "id": "badge-4",
  "type": "badge",
  "text": "[Related topic 4]",
  "variant": "default"
},
{
  "id": "badge-5",
  "type": "badge",
  "text": "[Related topic 5]",
  "variant": "featured"
},
{
  "id": "badge-6",
  "type": "badge",
  "text": "[Related topic 6]",
  "variant": "outline"
},
{
  "id": "badge-7",
  "type": "badge",
  "text": "[Related topic 7]",
  "variant": "gradient"
},
{
  "id": "badge-8",
  "type": "badge",
  "text": "[Related topic 8]",
  "variant": "default"
}
```

## Content Guidelines:

### Quality Standards:
- **Professional tone** throughout
- **Accurate information** relevant to the topic
- **Engaging language** that maintains reader interest
- **Proper flow** between sections
- **Educational value** in every component

### Content Length Requirements:
- **Lead paragraph**: 2-3 sentences
- **Regular paragraphs**: 3-4 sentences minimum
- **Accordion content**: 2-3 sentences each
- **Card content**: Substantial and informative
- **List items**: Comprehensive, not just single words

### Technical Requirements:
- **Unique IDs** for every component
- **Relevant Unsplash URLs** for images (search for appropriate photos)
- **Realistic author names** and dates
- **Professional-sounding button text and links**
- **Topic-appropriate tags and badges**

## Usage:
Replace **[INSERT TOPIC HERE]** with your desired topic and run this prompt. The output will be a complete, ready-to-use JSON schema that demonstrates every component type, variant, and feature of your dynamic blog system.

## Example Topics:
- "Renewable Energy Solutions"
- "Space Exploration Technologies"
- "Digital Art and NFTs"
- "Sustainable Agriculture"
- "Virtual Reality in Education"
- "Blockchain Applications"
- "Mental Health in the Digital Age"

---

**Note**: Always ensure the generated content is factually accurate and appropriate for the intended audience.