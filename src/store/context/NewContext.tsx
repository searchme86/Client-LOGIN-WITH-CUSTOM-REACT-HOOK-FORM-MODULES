import { ReactNode, useContext, createContext, useReducer } from 'react';
import { contextStateType } from './NewContextUtils/NewContextType';

import {
  contextReducerAction,
  contextActionType,
} from './NewContextUtils/NewContextType';

const initialContextState: contextStateType = {
  authUser: {
    LoginUserNickname: '',
    userProfileImage: [],
    roles: [],
    accessToken: '',
  },
  errorMessage: '',
};

const StateContext = createContext<{
  contextValue: contextStateType;
  dispatch: (action: contextActionType) => void;
}>({
  contextValue: {
    authUser: {
      LoginUserNickname: '',
      userProfileImage: [],
      roles: [],
      accessToken: '',
    },
    errorMessage: '',
  },
  dispatch: () => null,
});

const contextStateReducer = (
  state: contextStateType = initialContextState,
  action: contextActionType
) => {
  switch (action.type) {
    case contextReducerAction.SET_USER: {
      return {
        ...state,
        authUser: {
          ...state.authUser,
          LoginUserNickname: action.paylod.LoginUserNickname,
          userProfileImage: action.paylod.userProfileImage,
          roles: action.paylod.roles,
          accessToken: action.paylod.accessToken,
        },
        errorMessage: '',
      };
    }
    case contextReducerAction.ADD_ERRORMESSAGE: {
      return {
        ...state,
        errorMessage: action.payload.message,
      };
    }
    default:
      return state;
  }
};

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

  if (context) {
    return context;
  }
};

export { StateContextProvider, useStateContext };
