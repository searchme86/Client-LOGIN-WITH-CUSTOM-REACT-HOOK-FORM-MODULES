import { createContext, useState } from 'react';
import { ContextAuthType, AuthProviderInterface } from './AuthProviderType';
import { ContextInitialValue } from './AuthProviderData';

const AuthContext = createContext<ContextAuthType>({
  auth: ContextInitialValue,
  setAuth: () => null,
  persist: false,
  setPersist: () => null,
});

export const AuthProvider = ({ children }: AuthProviderInterface) => {
  let localStoragePersitValue = localStorage.getItem('persist');

  const [auth, setAuth] =
    useState<ContextAuthType['auth']>(ContextInitialValue);

  const [persist, setPersist] = useState<ContextAuthType['persist']>(() => {
    if (typeof localStoragePersitValue === 'string') {
      const InitialLocalStorageValue =
        JSON.parse(localStoragePersitValue) || false;
      return InitialLocalStorageValue;
    }
  });

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        persist,
        setPersist,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
