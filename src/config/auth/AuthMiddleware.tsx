import React, { ReactNode } from 'react';

type AuthMiddlewareProps = {
  children: ReactNode;
};

function AuthMiddleware({ children }: AuthMiddlewareProps) {
  return children;
}

export default AuthMiddleware;
