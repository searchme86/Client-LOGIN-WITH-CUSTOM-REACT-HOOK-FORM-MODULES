import { initialContextState } from '@context/index';
import { contextReducerAction } from '@context/contextConfig/contextAction';
import {
  contextStateType,
  contextActionType,
} from '@context/contextConfig/contextType';

export const contextStateReducer = (
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

    case contextReducerAction.REFRESH_TOKEN: {
      return {
        ...state,
        authUser: {
          ...state.authUser,
          roles: action.payload.roles,
          accessToken: action.payload.accessToken,
        },
        errorMessage: '',
      };
    }

    case contextReducerAction.SET_USER_LOGOUT: {
      return {
        ...state,
        authUser: {
          ...state.authUser,
          LoginUserNickname: '',
          userProfileImage: [],
          roles: [],
          accessToken: '',
        },
        errorMessage: '',
      };
    }

    default:
      return state;
  }
};
