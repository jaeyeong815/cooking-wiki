import { configuration, openai, checkApiKey, hasValues } from '@/pages/api/instance/openaiInstance';
import { NextApiRequest, NextApiResponse } from 'next';

const recipeQuestion = async (req: NextApiRequest, res: NextApiResponse) => {
  checkApiKey(configuration, res);

  const food = req.body.food || '';
  hasValues(food, res);

  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `${food} 레시피 알려줘`,
      temperature: 0.6,
      max_tokens: 1888,
      top_p: 1,
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch (error) {
    console.log(error);
  }
};

export default recipeQuestion;
