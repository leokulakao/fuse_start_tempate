import { Map, Record } from 'immutable';

export interface AuthState extends Map<string, AuthState> {
  token: string;
  tokenValid: boolean;
  signInLoading: boolean;
  signInLoaded: boolean;
  signInFail: boolean;

  signUp: any;
  signUpLoading: boolean;
  signUpLoaded: boolean;
  signUpFailed: boolean;

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

  signUp: null,
  signUpLoading: false,
  signUpLoaded: false,
  signUpFailed: false,

  resetPassword: [],
  resetPasswordLoading: false,
  resetPasswordLoaded: false,
  resetPasswordFailed: false,

  forgotPassword: [],
  forgotPasswordLoading: false,
  forgotPasswordLoaded: false,
  forgotPasswordFailed: false,
})