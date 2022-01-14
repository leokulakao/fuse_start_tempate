import { Action } from '@ngrx/store';
import { type } from '../shared/utility/utilityHelper';

export const ActionTypes = {
  AUTH: type('[auth] do auth'),
  AUTH_SUCCESS: type('[auth] do auth success'),
  AUTH_FAIL: type('[auth] do auth fail')
}

export class AuthAction implements Action {
  type = ActionTypes.AUTH;
  constructor(public payload: any = null) {}
}
export class AuthSuccessAction implements Action {
  type  = ActionTypes.AUTH_SUCCESS;
  constructor(public payload: any) {}
}
export class AuthFailAction implements Action {
  type = ActionTypes.AUTH_FAIL;
  constructor(public payload: any) {}
}

export type Actions =
AuthAction
  | AuthSuccessAction
  | AuthFailAction;