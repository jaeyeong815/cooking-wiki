import { checkApiKey, configuration, hasValues, openai } from '@/pages/api/instance/openaiInstance';
import { NextApiRequest, NextApiResponse } from 'next';

const foodQuestion = async (req: NextApiRequest, res: NextApiResponse) => {
  checkApiKey(configuration, res);

  const ingredient = req.body.ingredient || '';
  hasValues(ingredient, res);

  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `${ingredient}가 모두 사용되는 요리 레시피 5개 이름 알려줘`,
      temperature: 0.6,
      max_tokens: 1888,
      top_p: 1,
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch (error) {
    console.log(error);
  }
};

export default foodQuestion;
