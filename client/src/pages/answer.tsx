import Head from 'next/head';

import AnswerToQuestion from '@/components/AnswerToQuestion';

const Refrigerator = () => {
  return (
    <>
      <Head>
        <title>Answer from GPT [Cooking-Wiki]</title>
      </Head>
      <AnswerToQuestion />
    </>
  );
};

export default Refrigerator;
