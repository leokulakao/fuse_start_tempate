import { Injectable, PLATFORM_ID, Inject } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";

import * as authAction from './auth.action';

import * as store from '../state.interface';

import { SignInModel } from './models/SignInModel';

import {
  getToken,
  getTokenValid,
  getSignInLoading,
  getSignInLoaded,
  getSignInFail,
  getregisterLoading,
  getregisterLoaded,
  getregisterFailed,
  resetPassword,
  resetPasswordLoading,
  resetPasswordFailed,
  forgotPassword
} from './auth.selector';

@Injectable()
export class AuthSandbox {
  private subscriptions: Array<Subscription> = [];

  public getToken$ = this.appState$.select(getToken);
  public getTokenValid$ = this.appState$.select(getTokenValid);
  public getSignInLoading$ = this.appState$.select(getSignInLoading);
  public getSignInLoaded$ = this.appState$.select(getSignInLoaded);
  public getSignInFail$ = this.appState$.select(getSignInFail);

  public registerLoading$ = this.appState$.select(getregisterLoading);
  public registerLoaded$ = this.appState$.select(getregisterLoaded);
  public registerFailed$ = this.appState$.select(getregisterFailed);

  public resetPassword$ = this.appState$.select(resetPassword);
  public resetPasswordLoading$ = this.appState$.select(resetPasswordLoading);
  public resetPasswordFailed$ = this.appState$.select(resetPasswordFailed);

  public forgotPassword$ = this.appState$.select(forgotPassword);
  public forgotasswordLoading$ = this.appState$.select(resetPasswordLoading);
  public forgotPasswordFailed$ = this.appState$.select(resetPasswordFailed);
  

  constructor(
    protected appState$: Store<store.AppState>,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  public signOut(): void {
    this.appState$.dispatch(new authAction.SignOutAction());
  }

  public signIn(params): void {
    this.appState$.dispatch(new authAction.SignInAction(new SignInModel (params)));
  }

  public isAuth(): boolean {
    return !!localStorage.getItem('accessToken') ? true : false;
  }
  
  public register(params:any): void {
    this.appState$.dispatch(new authAction.RegisterAction(params));
  }

  public resetPassword(params:any): void {
    this.appState$.dispatch(new authAction.ResetPasswordAction(params));
  }

  public forgot(params:any): void {
    this.appState$.dispatch(new authAction.ForgotPasswordAction(params));
  }
}