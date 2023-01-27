import React from 'react';
import { PageContainer } from '@components/styles/common/pageLayout.style';
import { useStateContext } from '@context/index';

function Home() {
  const {
    contextValue: { authUser },
  } = useStateContext();

  console.log('authUser', authUser);

  return (
    <PageContainer>
      <p>메인 페이지 영역입니다.</p>
    </PageContainer>
  );
}

export default Home;
