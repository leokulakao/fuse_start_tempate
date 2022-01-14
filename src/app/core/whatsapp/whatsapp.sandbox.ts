import { Injectable, PLATFORM_ID, Inject } from "@angular/core";

import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";

import * as whatsappAction from './whatsapp.action';

import * as store from '../state.interface';


import {
  getAuthData,
  getAuthLoading,
  getAuthLoaded,
  getAuthFail
} from './whatsapp.selector';

@Injectable()
export class WhatsappSandbox {
  private subscriptions: Array<Subscription> = [];

  public getAuthData$ = this.appState$.select(getAuthData);
  public getAuthLoading$ = this.appState$.select(getAuthLoading);
  public getAuthLoaded$ = this.appState$.select(getAuthLoaded);
  public getAuthFail$ = this.appState$.select(getAuthFail);
  

  constructor(
    protected appState$: Store<store.AppState>,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  public getAuth(): void {
    this.appState$.dispatch(new whatsappAction.AuthAction());
  }

}