import { AuthTokenShape } from './AuthProviderType';

export const ContextInitialValue: AuthTokenShape = {
  user: '',
  pwd: '',
  roles: [],
  accessToken: '',
};
