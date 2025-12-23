import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ error: 'Missing Supabase env vars.' }, { status: 500 })
    }

    const { searchParams } = new URL(request.url)
    const requestedLimit = Number(searchParams.get('limit'))
    const limit = Number.isFinite(requestedLimit) && requestedLimit > 0
      ? Math.min(requestedLimit, 2000)
      : 200
    
    const url = `${supabaseUrl}/rest/v1/products?select=*&order=created_at.desc&limit=${limit}`

    const response = await fetch(url, {
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    })

    if (!response.ok) {
      const text = await response.text()
      console.error('Supabase REST error:', response.status, text)
      return NextResponse.json(
        { error: `Supabase error: ${response.status}`, details: text },
        { status: response.status }
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}
