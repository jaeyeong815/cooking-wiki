import axios from 'axios';

export const questionGPT = (question: string) =>
  axios
    .post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/request`,
      {
        question,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
