import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Observable, of, map, switchMap } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';

import * as actions from './auth.action';
import { AuthService } from './auth.service';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService
    ) { }
    
    signInUser$ = createEffect(() => this.actions$.pipe(
        ofType(actions.ActionTypes.SIGNIN),
        map((action: actions.SignInAction) => action.payload),
        switchMap(state => {
            return this.authService.signIn(state).pipe(
                map(data => new actions.SignInSuccessAction(data)),
                catchError(err => of(new actions.SignInFailAction(err)))
            );
        })
    ));

    signUpUser$ = createEffect(() => this.actions$.pipe(
        ofType(actions.ActionTypes.SIGNUP),
        map((action: actions.SignUpAction) => action.payload),
        switchMap(state => {
            return this.authService.signUp(state).pipe(
                map(data => new actions.SignUpSuccessAction(data)),
                catchError(err => of(new actions.SignUpFailAction(err)))
            );
        })
    ));

    // resetpassword$ = createEffect(() => this.actions$.pipe(
    //     ofType(actions.ActionTypes.RESET_PASSWORD),
    //     map((action: actions.ResetPasswordAction) => action.payload),
    //     switchMap(state => {
    //         return this.authService.resetPassword(state).pipe(
    //             map(data => new actions.ResetPasswordSuccess(data)),
    //             catchError(err => of(new actions.ResetPasswordFail(err)))
    //         );
    //     })
    // ));

    // forgotpassword$ = createEffect(() => this.actions$.pipe(
    //     ofType(actions.ActionTypes.FORGOT_PASSWORD),
    //     map((action: actions.ForgotPasswordAction) => action.payload),
    //     switchMap(state => {
    //         return this.authService.forgotPassword(state).pipe(
    //             map(data => new actions.ForgotPasswordSuccess(data)),
    //             catchError(err => of(new actions.ForgotPasswordFail(err)))
    //         );
    //     })
    // ));
}