export const prerender = false;

export async function GET() {
  return new Response(
    JSON.stringify({
      name: 'Astro',
      url: 'https://astro.build/',
      time: new Date().toISOString()
    })
  )
}
