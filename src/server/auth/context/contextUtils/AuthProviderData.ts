import { AuthTokenShape } from './AuthProviderType';

export const ContextInitialValue: AuthTokenShape = {
  pwd: '',
  roles: [],
  accessToken: '',
  user: '',
};
