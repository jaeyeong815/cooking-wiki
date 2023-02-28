import Head from 'next/head';
import AnswerToQuestion from '@/components/AnswerToQuestion';

const Refrigerator = () => {
  return (
    <>
      <Head>
        <title>마이 냉장고</title>
      </Head>
      <AnswerToQuestion />
    </>
  );
};

export default Refrigerator;
