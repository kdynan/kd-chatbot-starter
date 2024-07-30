
export async function POST(req: Request) {

  const apiUrl : string = process.env.E2C_CHATBOT_API_URL!;
  const apiKey : string = process.env.E2C_CHATBOT_API_KEY!;
  const message  = await req.json();
  console.log(message);

 
  const payload = {
    'question' : message.question
  }

  const result = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key':  `${apiKey}`
    },
    body: JSON.stringify(payload)
  });

  const response = await result.json();
  console.log(response);

  return Response.json({response});
}