import axios from 'axios';

export const questionGPT = (question: string) =>
  axios
    .post(
      'http://localhost:3000/api/request',
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
