
export async function POST(req: Request) {

  let apiUrl : string = process.env.E2C_CHATBOT_API_BASE_URL!;
  const apiKey : string = process.env.E2C_CHATBOT_API_KEY!;

  const message  = await req.json();

  let payload;

  if (!message.session_id) {
    apiUrl = `${apiUrl}/chat/new_chat`;

    console.log(message);


    payload = {
      'question': message.question
    };
  } else {

    apiUrl = `${apiUrl}/chat/new_message`;

    payload = {
      'question': message.question,
      'session_id': message.session_id
    };

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