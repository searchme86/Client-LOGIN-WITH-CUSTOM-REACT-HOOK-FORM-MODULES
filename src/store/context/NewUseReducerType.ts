import { ILoginResponse } from '../../pages/User/UserRequestType';

const contextAction = {
  ADD_ERRORMESSAGE: 'addErrorMessage' as const,
  SET_USER: 'setUser' as const,
};

const contextActionCreator = {
  addErrorMessage: (error: string) => ({
    type: contextAction.ADD_ERRORMESSAGE,
    payload: { message: error },
  }),

  setUser: (user: ILoginResponse) => ({
    type: contextAction.SET_USER,
    paylod: { user: user },
  }),
};

type contextActionType =
  | ReturnType<typeof contextActionCreator.addErrorMessage>
  | ReturnType<typeof contextActionCreator.setUser>;
