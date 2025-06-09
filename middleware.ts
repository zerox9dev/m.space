import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Получаем текущий url
  const url = request.nextUrl.clone()
  
  // Проверяем, что запрос идет к API для получения shots
  if (url.pathname === '/api/dribbble/shots') {
    // Добавляем заголовки для защиты от CORS и кэширования
    const response = NextResponse.next()
    
    // Устанавливаем заголовки для предотвращения кэширования
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
    response.headers.set('Pragma', 'no-cache')
    response.headers.set('Expires', '0')
    
    // Устанавливаем заголовки CORS для предотвращения конфликтов с расширениями
    response.headers.set('Access-Control-Allow-Origin', '*')
    response.headers.set('Access-Control-Allow-Methods', 'GET')
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type')
    
    return response
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: '/api/:path*',
} 