export const enum StatusCode {
  Unauthorized = 401,
  Forbidden = 403,
}

export type AxiosContentType =
  | 'application/json'
  | 'application/x-www-form-urlencoded'
  | 'mutipart/form-data';
