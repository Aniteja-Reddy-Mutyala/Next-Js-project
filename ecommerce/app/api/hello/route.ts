export async function GET() {
  return new Response("Hello from a next js route handler", {
    status: 200,
    statusText: "Done!!!",
  });
}

export async function POST() {
  return new Response("This is a post request", {
    status: 200,
  });
}
