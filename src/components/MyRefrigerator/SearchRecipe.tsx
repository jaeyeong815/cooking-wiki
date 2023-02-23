import { useState } from 'react';
import { useSelector } from 'react-redux';
import { AxiosResponse } from 'axios';
import type { RootState } from '@/store/ingredientStore';
import { searchRequest } from '@/pages/api';

const SearchRecipe = () => {
  const selectList = useSelector((state: RootState) => state.ingredientList.selectList);
  const [response, setResponse] = useState<AxiosResponse | null>(null);

  const handleSearch = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (selectList.length === 0) alert('재료를 선택해주세요!');

    setResponse(await searchRequest(selectList.join(',')));
  };

  return (
    <>
      <button onClick={handleSearch}>검색하기</button>
      <p>결과</p>
      {response}
    </>
  );
};

export default SearchRecipe;
