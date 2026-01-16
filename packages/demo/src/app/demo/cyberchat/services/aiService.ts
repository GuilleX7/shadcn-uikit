/**
 * AI Service for generating realistic chat responses
 * This is a demo implementation that generates contextual responses
 * based on keywords and patterns in the user's input
 */

interface AIResponse {
  content: string
  badges?: Array<{ text: string; variant?: 'default' | 'outline' | 'secondary' }>
}

/**
 * Generate a realistic AI response based on user input
 */
export async function generateAIResponse(userMessage: string): Promise<AIResponse> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000))

  const lowerMessage = userMessage.toLowerCase()

  // Contextual responses based on keywords
  if (lowerMessage.includes('feedback') || lowerMessage.includes('triage')) {
    return {
      content: `I'll help you analyze customer feedback triage strategies.

**Key Framework Recommendations:**

**RICE Prioritization Model**
- Reach: Number of customers affected
- Impact: Degree of improvement
- Confidence: Certainty in estimates
- Effort: Time and resources required

**Categorization Approach**
1. **Urgent Issues** - Critical bugs, security concerns
2. **Feature Requests** - New functionality suggestions
3. **Improvements** - Enhancement to existing features
4. **Questions** - Support and clarification needs

**Modern Tools & AI/NLP Solutions**
- Sentiment analysis for priority detection
- Automatic categorization using ML models
- HEART framework (Happiness, Engagement, Adoption, Retention, Task Success)
- Kano Model for feature prioritization

Would you like me to dive deeper into any specific framework or provide implementation examples?`,
      badges: [
        { text: 'Product Management', variant: 'outline' },
        { text: 'AI/ML', variant: 'outline' },
      ],
    }
  }

  if (lowerMessage.includes('security') || lowerMessage.includes('cybersecurity')) {
    return {
      content: `Here's a comprehensive overview of modern cybersecurity best practices:

**Core Security Principles:**

**1. Zero Trust Architecture**
- Never trust, always verify
- Micro-segmentation of networks
- Continuous authentication and authorization

**2. Defense in Depth**
- Multiple layers of security controls
- Endpoint protection
- Network security
- Application security

**3. Key Implementation Areas**
- Multi-factor authentication (MFA)
- Encryption at rest and in transit
- Regular security audits and penetration testing
- Incident response planning
- Security awareness training

**Emerging Threats:**
- AI-powered attacks
- Supply chain vulnerabilities
- Cloud misconfigurations
- Ransomware evolution

Would you like specific recommendations for any particular area?`,
      badges: [
        { text: 'Security', variant: 'outline' },
        { text: 'Best Practices', variant: 'outline' },
      ],
    }
  }

  if (lowerMessage.includes('design') || lowerMessage.includes('ui') || lowerMessage.includes('ux')) {
    return {
      content: `Let me share insights on modern UI/UX design principles:

**Core Design Principles:**

**1. User-Centered Design**
- Understand user needs and pain points
- Create user personas and journey maps
- Conduct usability testing

**2. Visual Hierarchy**
- Use size, color, and spacing effectively
- Guide user attention to important elements
- Maintain consistency across interfaces

**3. Accessibility (WCAG)**
- Color contrast ratios (4.5:1 minimum)
- Keyboard navigation support
- Screen reader compatibility
- Focus indicators

**Modern Trends:**
- Design systems and component libraries
- Dark mode support
- Micro-interactions and animations
- Responsive and adaptive design

**Tools & Frameworks:**
- Figma for design collaboration
- Tailwind CSS for utility-first styling
- React/Vue for component-based architecture

What specific aspect would you like to explore further?`,
      badges: [
        { text: 'Design', variant: 'outline' },
        { text: 'UX', variant: 'outline' },
      ],
    }
  }

  if (lowerMessage.includes('code') || lowerMessage.includes('programming') || lowerMessage.includes('development')) {
    return {
      content: `I can help with software development best practices:

**Clean Code Principles:**

**1. Readability**
- Use meaningful variable and function names
- Keep functions small and focused
- Write self-documenting code

**2. SOLID Principles**
- Single Responsibility Principle
- Open/Closed Principle
- Liskov Substitution Principle
- Interface Segregation Principle
- Dependency Inversion Principle

**3. Testing Strategy**
- Unit tests for individual components
- Integration tests for system interactions
- End-to-end tests for user workflows

**Modern Development Practices:**
- Version control with Git
- CI/CD pipelines
- Code reviews and pair programming
- Documentation and API design
- Performance optimization

**Popular Tech Stacks:**
- Frontend: React, Vue, TypeScript
- Backend: Node.js, Python, Go
- Database: PostgreSQL, MongoDB, Redis

What specific technology or concept would you like to discuss?`,
      badges: [
        { text: 'Development', variant: 'outline' },
        { text: 'Best Practices', variant: 'outline' },
      ],
    }
  }

  // Default response for general queries
  return {
    content: `I understand you're asking about: "${userMessage}"

I can help you with:
- **Analysis and Research** - Deep dive into topics with structured insights
- **Best Practices** - Industry standards and recommendations
- **Technical Guidance** - Implementation strategies and frameworks
- **Problem Solving** - Breaking down complex challenges

Could you provide more details about what specific aspect you'd like to explore? For example:
- What's your main goal or challenge?
- Are you looking for strategic guidance or technical implementation?
- Do you have any specific constraints or requirements?

I'm here to provide detailed, actionable insights tailored to your needs.`,
    badges: [
      { text: 'General', variant: 'outline' },
    ],
  }
}
