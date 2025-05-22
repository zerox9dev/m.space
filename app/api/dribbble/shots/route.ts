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
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch shots: ${response.statusText}`);
    }

    const shots = await response.json();
    
    // Логируем структуру первого изображения, чтобы увидеть доступные размеры
    if (shots && shots.length > 0) {
      console.log('Sample Dribbble shot structure:', JSON.stringify(shots[0], null, 2));
    }
    
    return NextResponse.json(shots);
  } catch (error) {
    console.error('Error fetching Dribbble shots:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Dribbble shots' },
      { status: 500 }
    );
  }
} 