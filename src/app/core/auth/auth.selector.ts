import { createSelector } from "reselect";

import * as fromAuth from './auth.reducer';
import { AppState } from '../state.interface';

export const getState = (state: AppState) => state.auth;

export const getToken = createSelector(getState, fromAuth.getToken);
export const getTokenValid = createSelector(getState, fromAuth.getTokenValid);
export const getSignInLoading = createSelector(getState, fromAuth.getSignInLoading);
export const getSignInLoaded = createSelector(getState, fromAuth.getSignInLoaded);
export const getSignInFail = createSelector(getState, fromAuth.getSignInFail);

export const getSignUpData = createSelector(getState, fromAuth.getSignUpData);
export const getSignUpLoading = createSelector(getState, fromAuth.getSignUpLoading);
export const getSignUpLoaded = createSelector(getState, fromAuth.getSignUpLoaded)
export const getSignUpFailed = createSelector(getState, fromAuth.getSignUpFailed)

export const resetPassword = createSelector(getState, fromAuth.resetPassword);
export const resetPasswordLoading = createSelector(getState, fromAuth.resetPasswordLoading);
export const resetPasswordLoaded = createSelector(getState, fromAuth.resetPasswordLoaded);
export const resetPasswordFailed = createSelector(getState, fromAuth.resetPasswordFailed);

export const forgotPassword = createSelector(getState, fromAuth.forgotPassword);
export const forgotPasswordLoading = createSelector(getState, fromAuth.forgotPasswordLoading);
export const forgotPasswordLoaded = createSelector(getState, fromAuth.forgotPasswordLoaded);
export const forgotPasswordFailed = createSelector(getState, fromAuth.forgotPasswordFailed);

