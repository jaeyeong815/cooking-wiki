import { useSelector } from 'react-redux';
import { RootState } from '@/store/ingredientStore';
import { useState } from 'react';

const SearchRecipe = () => {
  const selectList = useSelector((state: RootState) => state.ingredientList.selectList);
  const [response, setResponse] = useState();

  const handleSearch = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ingredient: selectList.join(',') }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResponse(data.result);
    } catch (error) {
      console.error(error);
    }
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
