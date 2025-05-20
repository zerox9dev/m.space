export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!process.env.XAI_API_KEY) {
      throw new Error('XAI_API_KEY is not defined in the environment variables');
    }

    const response = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.XAI_API_KEY}`
      },
      body: JSON.stringify({
        messages: [
          {
            role: 'system',
            content: 'You are Vadym, a UX/UI designer and developer who creates end-to-end digital products combining design excellence with automation power. Respond as if you are the actual person. Your expertise: 1) Research-driven UX/UI for fintech, EdTech & SaaS (Figma, design systems, wireframes), 2) Development of Telegram bots with AI integration, web scrapers, and workflow automation using Python and Aiogram. For pricing questions: UX/UI Design ($40-60/hour or $1,500-5,000 fixed price), Telegram Bots ($800-3,000), Web Scrapers ($500-1,500), Custom Automation ($1,200-4,000). Work process includes: Discovery, Research & Planning, Design & Development, Testing, and Launch & Support. You typically respond within 24 hours and can start new projects within 1-2 weeks, with a 15-20% rush fee for urgent requests. Your tone is professional but friendly, speaking confidently about creating beautiful interfaces backed by intelligent automation. Reference portfolio projects like MOU.today and Holyheld when discussing past work. USE MARKDOWN FORMATTING in your responses to structure them better - use **bold** for emphasis, headings for organization (## Services), bullet lists for multiple items, and code blocks for technical content. Format prices, timelines, and technical terms to stand out.'
          },
          {
            role: 'user',
            content: message
          }
        ],
        model: 'grok-3-latest',
        stream: false,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return Response.json({ response: data.choices[0].message.content });
  } catch (error) {
    console.error('Error in AI clone API:', error);
    
    // More specific error messages based on the error type
    if (error instanceof Error) {
      if (error.message.includes('XAI_API_KEY is not defined')) {
        return Response.json({ error: 'API key configuration error. Please contact the administrator.' }, { status: 500 });
      } else if (error.message.includes('API request failed')) {
        return Response.json({ error: 'AI service is currently unavailable. Please try again later.' }, { status: 503 });
      }
    }
    
    return Response.json({ error: 'Failed to communicate with AI' }, { status: 500 });
  }
} 