import { Action } from '@ngrx/store';
import { type } from '../shared/utility/utilityHelper';

export const ActionTypes = {
  SIGNOUT: type('[signout] do signout'),
  SIGNOUT_SUCCESS: type('[signout] do signout success'),
  SIGNOUT_FAIL: type('[signout] do signout fail'),

  SIGNIN: type('[signin] do signin'),
  SIGNIN_SUCCESS: type('[signin] do signin success'),
  SIGNIN_FAIL: type('[signin] do signin fail'),

  REGISTER: type('[login] do register'),
  REGISTER_SUCCESS: type('[login] do register success'),
  REGISTER_FAIL: type('[login] do register fail'),

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


export class RegisterAction implements Action {
  type = ActionTypes.REGISTER
  constructor(public payload: any) {}
}
export class RegisterSuccessAction implements Action {
  type = ActionTypes.REGISTER_SUCCESS
  constructor(public payload: any) {}
}
export class RegisterFailAction implements Action {
  type = ActionTypes.REGISTER_FAIL
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
  | RegisterAction
  | RegisterSuccessAction
  | RegisterFailAction
  | ResetPasswordAction
  | ResetPasswordSuccess
  | ResetPasswordFail
  | ForgotPasswordAction
  | ForgotPasswordSuccess
  | ForgotPasswordSuccess
  | SignOutAction;