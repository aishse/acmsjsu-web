// pages/api/hello.js
export async function POST(req, res) {
  return new Response((JSON.stringify({ message: 'Hello world' })))
}