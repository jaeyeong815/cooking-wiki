import axios from 'axios';

const apiKey =
  process.env.NODE_ENV === 'production' ? process.env.OPENAI_API_KEY : process.env.NEXT_PUBLIC_OPENAI_API_KEY;

export const questionGPT = (question: string) =>
  axios
    .post(
      'https://api.openai.com/v1/engines/text-davinci-003/completions',
      {
        prompt: question,
        temperature: 0.4,
        max_tokens: 1888,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    )
    .then((response) => {
      return response.data.choices[0].text;
    })
    .catch((error) => {
      console.log(error);
    });
