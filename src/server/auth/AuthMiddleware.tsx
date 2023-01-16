import React from 'react';

type AuthMiddlewareProps = {
  children: React.ReactElement;
};

function AuthMiddleware({ children }: AuthMiddlewareProps) {
  return children;
}

export default AuthMiddleware;
