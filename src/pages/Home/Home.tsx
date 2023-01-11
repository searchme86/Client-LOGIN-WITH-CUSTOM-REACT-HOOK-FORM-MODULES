import React from 'react';

import { useStateContext } from '../../store/context/NewContext';

function Home() {
  const { contextValue } = useStateContext();
  console.log('Home에서 ', contextValue);

  return (
    <>
      <p>여기는 메인 페이지 영역입니다.</p>
    </>
  );
}

export default Home;
