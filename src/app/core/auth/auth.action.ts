import { Action } from '@ngrx/store';
import { type } from '../shared/utility/utilityHelper';

export const ActionTypes = {
  SIGNOUT: type('[signout] do signout'),
  SIGNOUT_SUCCESS: type('[signout] do signout success'),
  SIGNOUT_FAIL: type('[signout] do signout fail'),

  SIGNIN: type('[signin] do signin'),
  SIGNIN_SUCCESS: type('[signin] do signin success'),
  SIGNIN_FAIL: type('[signin] do signin fail'),

  SIGNUP: type('[signup] do signup'),
  SIGNUP_SUCCESS: type('[signup] do signup success'),
  SIGNUP_FAIL: type('[signup] do signup fail'),

  RESET_PASSWORD: type('[login] do reset password'),
  RESET_PASSWORD_SUCCESS: type('[login] do reset password success'),
  RESET_PASSWORD_FAIL: type('[login] do reset password fail'),

  FORGOT_PASSWORD: type('[login] do forgot password'),
  FORGOT_PASSWORD_SUCCESS: type('[login] do forgot password success'),
  FORGOT_PASSWORD_FAIL: type('[login] do forgot password fail')
}

export class SignOutAction implements Action {
  type = ActionTypes.SIGNOUT;
  constructor() {}
}
export class SignInAction implements Action {
  type = ActionTypes.SIGNIN;
  constructor(public payload: any = null) {}
}
export class SignInSuccessAction implements Action {
  type  = ActionTypes.SIGNIN_SUCCESS;
  constructor(public payload: any) {}
}
export class SignInFailAction implements Action {
  type = ActionTypes.SIGNIN_FAIL;
  constructor(public payload: any) {}
}


export class SignUpAction implements Action {
  type = ActionTypes.SIGNUP
  constructor(public payload: any) {}
}
export class SignUpSuccessAction implements Action {
  type = ActionTypes.SIGNUP_SUCCESS
  constructor(public payload: any) {}
}
export class SignUpFailAction implements Action {
  type = ActionTypes.SIGNUP_FAIL
  constructor(public payload: any) {}
}

export class ResetPasswordAction implements Action {
  type = ActionTypes.RESET_PASSWORD
  constructor(public payload: any) {}
}
export class ResetPasswordSuccess implements Action {
  type = ActionTypes.RESET_PASSWORD_SUCCESS
  constructor(public payload: any) {}
}
export class ResetPasswordFail implements Action {
  type = ActionTypes.RESET_PASSWORD_FAIL
  constructor(public payload: any) {}
}

export class ForgotPasswordAction implements Action {
  type = ActionTypes.FORGOT_PASSWORD
  constructor(public payload: any) {}
}
export class ForgotPasswordSuccess implements Action {
  type = ActionTypes.FORGOT_PASSWORD_SUCCESS
  constructor(public payload: any) {}
}
export class ForgotPasswordFail implements Action {
  type = ActionTypes.FORGOT_PASSWORD_FAIL
  constructor(public payload: any) {}
}

export type Actions =
SignInAction
  | SignInSuccessAction
  | SignInFailAction
  | SignUpAction
  | SignUpSuccessAction
  | SignUpFailAction
  | ResetPasswordAction
  | ResetPasswordSuccess
  | ResetPasswordFail
  | ForgotPasswordAction
  | ForgotPasswordSuccess
  | ForgotPasswordSuccess
  | SignOutAction;