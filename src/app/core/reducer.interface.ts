import { ActionReducer, ActionReducerMap } from '@ngrx/store';
import { AppState as State } from './state.interface';

import * as fromAuth from './auth/auth.reducer';

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer
} 

export function logger(reducer: ActionReducer<State>): ActionReducer<any, any> {
  return function (state: State, action: any): State {
    return reducer(state, action);
  };
}
