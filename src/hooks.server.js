export async function handle({ event, resolve }) {
  // Apply CORS header for API routes before handling the request
  if (event.url.pathname.startsWith("/api")) {
    // Handle preflight requests
    if (event.request.method === "OPTIONS") {
      return new Response(null, {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods":
            "GET, POST, PUT, DELETE, PATCH, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      });
    }
  }

  const response = await resolve(event);

  if (event.url.pathname.startsWith("/api")) {
    response.headers.append("Access-Control-Allow-Origin", "*");
  }

  return response;
}
