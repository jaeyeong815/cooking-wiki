import { Configuration, OpenAIApi } from 'openai';
import { NextApiRequest, NextApiResponse } from 'next';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const question = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: 'OpenAI API key 확인필요!',
      },
    });
    return;
  }

  const ingredient = req.body.ingredient || '';
  if (ingredient.length === 0) {
    res.status(400).json({
      error: {
        message: '재료를 선택해주세요!',
      },
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `${ingredient}가 사용되는 요리 레시피 5개 이름 알려줘`,
      temperature: 0.6,
      max_tokens: 1888,
      top_p: 1,
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch (error) {
    console.log(error);
  }
};

export default question;
