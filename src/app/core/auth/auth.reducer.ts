import * as actions from './auth.action';
import { AuthState, authRecord } from './auth.state';

import { AuthService } from './auth.service';

export const initialState: AuthState = (new authRecord() as unknown) as AuthState;

export function reducer(
  state = initialState,
  { type, payload }: any
): AuthState {
  if (!type) {
    return state;
  }
  switch (type) {
    case actions.ActionTypes.SIGNOUT: {
      localStorage.removeItem('accessToken');
      return Object.assign({}, state,{
        token: null,
        signInLoading: false,
        signInLoaded: false,
        signInFail: false
      })
    }

    case actions.ActionTypes.SIGNIN: {
      return Object.assign({}, state,{
        signInLoading: true,
        signInLoaded: false,
        signInFail: false
      })
    }
    case actions.ActionTypes.SIGNIN_SUCCESS: {
      console.log(payload.refreshToken);
      return Object.assign({}, state,{
        token: (payload && payload.accessToken)? payload.accessToken: '',
        signInLoading: false,
        signInLoaded: true,
        signInFail: false
      })
    }
    case actions.ActionTypes.SIGNIN_FAIL: {
      return Object.assign({}, state,{
        signInLoading: false,
        signInLoaded: true,
        signInFail: true
      })
    }

    case actions.ActionTypes.REGISTER: {
      return Object.assign({}, state, {
          registerLoading: true,
          registerLoaded: false,
          registerFailed: false
      });
  }

  case actions.ActionTypes.REGISTER_SUCCESS: {
    console.log('[REGISTER_SUCCESS] ->', payload);
      return Object.assign({}, state, {
          registerLoading: false,
          registerLoaded: true,
          registerFailed: false
      });
  }
  case actions.ActionTypes.REGISTER_FAIL: {
      return Object.assign({}, state, {
          registerLoading: false,
          registerLoaded: true,
          registerFailed: true
      });
  }

  case actions.ActionTypes.RESET_PASSWORD: {
    return Object.assign({}, state, {
        resetPassword: [],
        resetPasswordLoading: true,
        resetPasswordLoaded: false,
        resetPasswordFailed: false,
    });
}
case actions.ActionTypes.RESET_PASSWORD_SUCCESS: {
  console.log('[RESET_SUCCESS] ->', payload);
    return Object.assign({}, state, {
        resetPassword: payload,
        resetPasswordLoading: false,
        resetPasswordLoaded: true,
        resetPasswordFailed: false,
    });
}
case actions.ActionTypes.RESET_PASSWORD_FAIL: {
    return Object.assign({}, state, {
        resetPassword: [],
        resetPasswordLoading: false,
        resetPasswordLoaded: true,
        resetPasswordFailed: true,
    });
}
case actions.ActionTypes.FORGOT_PASSWORD: {
  return Object.assign({}, state, {
      resetPassword: [],
      resetPasswordLoading: true,
      resetPasswordLoaded: false,
      resetPasswordFailed: false,
  });
}
case actions.ActionTypes.FORGOT_PASSWORD_SUCCESS: {
console.log('[FORGOT_SUCCESS] ->', payload);
  return Object.assign({}, state, {
      resetPassword: payload,
      resetPasswordLoading: false,
      resetPasswordLoaded: true,
      resetPasswordFailed: false,
  });
}
case actions.ActionTypes.FORGOT_PASSWORD_FAIL: {
  return Object.assign({}, state, {
      resetPassword: [],
      resetPasswordLoading: false,
      resetPasswordLoaded: true,
      resetPasswordFailed: true,
  });
}
    default: {
      return state;
    }
  }
}

export const getToken = (state: AuthState) => state.token;
export const getTokenValid = (state: AuthState) => state.tokenValid;

export const getSignInLoading = (state: AuthState) => state.signInLoading;
export const getSignInLoaded = (state: AuthState) => state.signInLoaded;
export const getSignInFail = (state: AuthState) => state.signInFail;

export const getRegisterLoading = (state: AuthState) => state.registerLoading
export const getRegisterLoaded = (state: AuthState) => state.registerLoaded
export const getRegisterFailed = (state: AuthState) => state.registerFailed

export const resetPassword = (state: AuthState) => state.resetPassword;
export const resetPasswordLoading = (state: AuthState) => state.resetPasswordLoading;
export const resetPasswordLoaded = (state: AuthState) => state.resetPasswordLoaded;
export const resetPasswordFailed = (state: AuthState) => state.resetPasswordFailed;

export const forgotPassword = (state: AuthState) => state.forgotPassword
export const forgotPasswordLoading = (state: AuthState) => state.forgotPasswordLoading;
export const forgotPasswordLoaded = (state: AuthState) => state.forgotPasswordLoaded;
export const forgotPasswordFailed = (state: AuthState) => state.forgotPasswordFailed;
