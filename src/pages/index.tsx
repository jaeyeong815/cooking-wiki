import Head from 'next/head';
import MyIngredient from '@/components/MyIngredient';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      {/* 임시로 컴포넌트 추가해둠, 이후 home 구현 시 삭제 예정 */}
      <MyIngredient />
    </div>
  );
};

export default Home;
