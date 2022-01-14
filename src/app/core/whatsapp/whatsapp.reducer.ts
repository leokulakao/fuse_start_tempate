import * as actions from './whatsapp.action';
import { WhatsappState, whastappRecord } from './whatsapp.state';

export const initialState: WhatsappState = (new whastappRecord() as unknown) as WhatsappState;

export function reducer(
  state = initialState,
  { type, payload }: any
): WhatsappState {
  if (!type) {
    return state;
  }
  switch (type) {

    case actions.ActionTypes.AUTH: {
      return Object.assign({}, state,{
        authLoading: true,
        authLoaded: false,
        authFail: false
      })
    }
    case actions.ActionTypes.AUTH_SUCCESS: {
      return Object.assign({}, state,{
        auth: payload,
        authLoading: false,
        authLoaded: false,
        authFail: true
      })
    }
    case actions.ActionTypes.AUTH_FAIL: {
      return Object.assign({}, state,{
        authLoading: false,
        authLoaded: false,
        authFail: true
      })
    }

    default: {
      return state;
    }
  }
}

export const getAuthData = (state: WhatsappState) => state.auth;
export const getAuthLoading = (state: WhatsappState) => state.authLoading;
export const getAuthLoaded = (state: WhatsappState) => state.authLoaded;
export const getAuthFail = (state: WhatsappState) => state.authFail;
