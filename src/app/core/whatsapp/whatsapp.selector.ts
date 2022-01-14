import { createSelector } from "reselect";

import * as fromWhatsapp from './whatsapp.reducer';
import { AppState } from '../state.interface';

export const getState = (state: AppState) => state.whatsapp;

export const getAuthData = createSelector(getState, fromWhatsapp.getAuthData);
export const getAuthLoading = createSelector(getState, fromWhatsapp.getAuthLoading);
export const getAuthLoaded = createSelector(getState, fromWhatsapp.getAuthLoaded);
export const getAuthFail = createSelector(getState, fromWhatsapp.getAuthFail);

