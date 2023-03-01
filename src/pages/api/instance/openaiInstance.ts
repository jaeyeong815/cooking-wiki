import { NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

export const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

export const openai = new OpenAIApi(configuration);

export const checkApiKey = (configuration: Configuration, res: NextApiResponse) => {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: 'OpenAI API key 확인필요!',
      },
    });
    return;
  }
};

export const hasValues = (values: string, res: NextApiResponse) => {
  if (values.length === 0) {
    res.status(400).json({
      error: {
        message: '재료를 선택해주세요!',
      },
    });
    return;
  }
};
