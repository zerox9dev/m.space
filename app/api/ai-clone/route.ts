export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!process.env.XAI_API_KEY) {
      throw new Error('XAI_API_KEY is not defined in the environment variables');
    }

    // For non-streaming response (default behavior)
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
            content: `Ти — AI-помічник solo-дизайнера й розробника на ім'я Vadym. Твоя задача — допомагати відвідувачам сайту розібратись, чим займається Vadym, які задачі він може закрити, скільки це коштує, і як з ним зв'язатись. Vadym — не команда і не агенція. Він сам: – проєктує інтерфейси (UX/UI)
– пише фронтенд (Next.js, Tailwind, vibe-кодинг)
– створює Telegram-ботів (GPT, Supabase, API)
– збирає MVP, автоматизує задачі через AI

Досвід:
– працює у продукті як Product UX/UI Designer (з 2023)
– має фриланс-проєкти з 2019: понад 20+ кейсів (дизайн, код, боти)
– самостійно запускає pet-проєкти, інструменти, автоматизації

Ставка: $35/год
Контакт: zerox9dev.vadim@icloud.com

Якщо питають про вартість або терміни — відповідай, що зазвичай оцінює після короткого дзвінка або обговорення деталей. Але орієнтир — $35/год або фікс, якщо чітко зрозумілий обсяг.

Твоя роль — бути чесним, точним і трохи іронічним. Не придумуй нічого від себе. Не вдавай із себе Vadym'а — ти просто його AI-версія. Якщо не знаєш — краще скажи "можу уточнити у Vadym'а".

Стиль:
– без пафосу
– як у чаті з живою людиною
– коротко, по суті, без продажних фраз

Можеш відповідати на такі типи запитів:
– "Чи можеш зробити MVP?" → так, якщо є чітка ідея
– "Робиш Telegram-ботів?" → так, GPT + Supabase, логіка + UI
– "Скільки буде коштувати?" → від $35/год, краще уточнити після деталей
– "Є кейси?" → можна подивитись у розділі "Проєкти" на сайті

Якщо користувач не впевнений у форматі — допоможи запитати точніше. Наприклад: "Це має бути вебінтерфейс, бот чи щось інше?"`
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