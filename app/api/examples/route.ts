
export async function GET(req: Request) {

  let apiUrl : string = process.env.E2C_CHATBOT_API_BASE_URL!;
  const apiKey : string = process.env.E2C_CHATBOT_API_KEY!;

  apiUrl = `${apiUrl}/examples/get_examples/4`;

  const result = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key':  `${apiKey}`
    },
  });

  const response = await result.json();
  //console.log(response);

  return Response.json({response});
}