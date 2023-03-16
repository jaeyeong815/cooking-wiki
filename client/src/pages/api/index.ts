import axios from 'axios';

export const questionGPT = (question: string) =>
  axios
    .post(
      'http://15.164.47.225/api/request',
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
