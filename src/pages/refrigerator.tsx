import Head from 'next/head';
import MyRefrigerator from '@/components/MyRefrigerator';

const Refrigerator = () => {
  return (
    <>
      <Head>
        <title>마이 냉장고</title>
      </Head>
      <MyRefrigerator />
    </>
  );
};

export default Refrigerator;
