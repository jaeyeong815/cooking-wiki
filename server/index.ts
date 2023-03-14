const express = require('express');
const app = express();

const axios = require('axios');
require('dotenv').config();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/api/request', async (req, res) => {
  const { question } = req.body;
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/text-davinci-003/completions',
      {
        prompt: question,
        temperature: 0.4,
        max_tokens: 1888,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );
    const answer = response.data.choices[0].text;
    res.status(200).json(answer);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'An error occurred while getting the answer from OpenAI API.' });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
