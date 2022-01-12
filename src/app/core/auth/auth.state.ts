import { Map, Record } from 'immutable';

export interface AuthState extends Map<string, AuthState> {
  token: string;
  tokenValid: boolean;
  signInLoading: boolean;
  signInLoaded: boolean;
  signInFail: boolean;

  registerLoading: boolean;
  registerLoaded: boolean;
  registerFailed: boolean;

  resetPassword: any;
  resetPasswordLoading: boolean;
  resetPasswordLoaded: boolean;
  resetPasswordFailed: boolean;

  forgotPassword: any;
  forgotPasswordLoading: boolean;
  forgotPasswordLoaded: boolean;
  forgotPasswordFailed: boolean;
}

export const authRecord = Record({
  token: localStorage.getItem('accessToken') || null,
  tokenValid: false,
  signInLoading: false,
  signInLoaded: false,
  signInFail: false,

  registerLoading: false,
  registerLoaded: false,
  registerFailed: false,

  resetPassword: [],
  resetPasswordLoading: false,
  resetPasswordLoaded: false,
  resetPasswordFailed: false,

  forgotPassword: [],
  forgotPasswordLoading: false,
  forgotPasswordLoaded: false,
  forgotPasswordFailed: false,
})