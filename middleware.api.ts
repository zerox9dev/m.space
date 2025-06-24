import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Get current url
  const url = request.nextUrl.clone()
  
  // Check if the request is for the Dribbble shots API
  if (url.pathname === '/api/dribbble/shots') {
    // Add headers for CORS protection and caching
    const response = NextResponse.next()
    
    // Set headers to prevent caching
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
    response.headers.set('Pragma', 'no-cache')
    response.headers.set('Expires', '0')
    
    // Set CORS headers to prevent conflicts with extensions
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