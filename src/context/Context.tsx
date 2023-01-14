import { ReactNode, useContext, createContext, useReducer } from 'react';
import {
  contextStateType,
  contextActionType,
} from './contextConfig/contextType';
import { contextStateReducer } from './contextConfig/contextStateReducer';

export const initialContextState: contextStateType = {
  authUser: {
    LoginUserNickname: '',
    userProfileImage: [],
    roles: [],
    accessToken: '',
  },
  errorMessage: '',
};

const StateContext = createContext<
  | {
      contextValue: contextStateType;
      dispatch: (action: contextActionType) => void;
    }
  | undefined
>(undefined);

const StateContextProvider = ({ children }: { children: ReactNode }) => {
  const [contextValue, dispatch] = useReducer(
    contextStateReducer,
    initialContextState
  );
  const value = { contextValue, dispatch };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

const useStateContext = () => {
  const context = useContext(StateContext);

  if (!context)
    throw new Error('useCtx must be inside a Provider with a value');

  return context;
};

export { StateContextProvider, useStateContext };
