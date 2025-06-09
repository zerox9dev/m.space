import { NextResponse } from 'next/server';

export async function GET() {
  const accessToken = process.env.DRIBBBLE_ACCESS_TOKEN;

  if (!accessToken) {
    return NextResponse.json(
      { error: 'Dribbble access token is not configured' },
      { status: 500 }
    );
  }

  try {
    const response = await fetch('https://api.dribbble.com/v2/user/shots', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      // Установим временные ограничения запроса
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch shots: ${response.statusText}`);
    }

    // Получаем данные в виде текста
    const text = await response.text();
    
    // Проверяем, что текст не пустой
    if (!text || text.trim() === '') {
      console.error('Empty response received from Dribbble API');
      return NextResponse.json([]);
    }
    
    try {
      // Безопасный парсинг с обработкой ошибок
      const shots = JSON.parse(text);
      
      // Валидируем данные, убедившись что это массив
      const validShots = Array.isArray(shots) ? shots : [];
      
      // Проверяем что данные соответствуют ожидаемой структуре
      const sanitizedShots = validShots.map(shot => ({
        id: shot.id || 0,
        title: shot.title || '',
        description: shot.description || null,
        images: {
          normal: shot.images?.normal || '',
          hidpi: shot.images?.hidpi || shot.images?.normal || '',
        },
        html_url: shot.html_url || '',
      }));
      
      // Отключаем кэширование на стороне браузера
      const headers = new Headers();
      headers.append('Cache-Control', 'no-cache, no-store, must-revalidate');
      headers.append('Pragma', 'no-cache');
      headers.append('Expires', '0');
      
      return new NextResponse(JSON.stringify(sanitizedShots), {
        status: 200,
        headers: headers,
      });
    } catch (jsonError) {
      console.error('Error parsing JSON from Dribbble API:', jsonError);
      return NextResponse.json([], { status: 200 });
    }
  } catch (error) {
    console.error('Error fetching Dribbble shots:', error);
    return NextResponse.json([], { status: 200 });
  }
} 