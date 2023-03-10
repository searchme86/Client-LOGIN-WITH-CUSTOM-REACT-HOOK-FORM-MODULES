import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '@components/styles/common/pageLayout.style';

function Unauthorized() {
  const navigate = useNavigate();
  const ReturnToHome = () => navigate('/');

  return (
    <PageContainer>
      <h1>Unauthorized</h1>
      <button onClick={ReturnToHome}>홈으로 이동</button>
    </PageContainer>
  );
}

export default Unauthorized;
