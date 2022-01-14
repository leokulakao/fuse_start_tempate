import { Map, Record } from 'immutable';

export interface WhatsappState extends Map<string, WhatsappState> {
  auth: {};
  authLoading: boolean;
  authLoaded: boolean;
  authFail: boolean;
}

export const whastappRecord = Record({
  auth: null,
  authLoading: false,
  authLoaded: false,
  authFail: false
})