import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '../assets/styles/common/PageLayout.style';

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
