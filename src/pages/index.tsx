import Head from 'next/head';
import MyRefrigerator from '@/components/MyRefrigerator';

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <MyRefrigerator />
    </>
  );
};

export default Home;
