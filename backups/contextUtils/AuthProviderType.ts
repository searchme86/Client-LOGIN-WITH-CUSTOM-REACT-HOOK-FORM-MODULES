import { ReactElement, SetStateAction } from 'react';

export interface AuthTokenShape {
  pwd: string;
  roles: number[];
  accessToken: string;
  user: string;
}

export interface AuthProviderInterface {
  children: ReactElement;
}

export interface ContextAuthType {
  auth: AuthTokenShape;
  setAuth: React.Dispatch<SetStateAction<AuthTokenShape>>;
  persist: boolean;
  setPersist: React.Dispatch<SetStateAction<ContextAuthType['persist']>>;
}
