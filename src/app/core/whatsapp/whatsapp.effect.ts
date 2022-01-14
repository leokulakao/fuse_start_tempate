import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Observable, of, map, switchMap } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';

import * as actions from './whatsapp.action';
import { WhatsappService } from './whatsapp.service';

@Injectable()
export class WhatsappEffects {
  constructor(
    private actions$: Actions,
    private _whatsappService: WhatsappService
    ) { }
    
    auth$ = createEffect(() => this.actions$.pipe(
        ofType(actions.ActionTypes.AUTH),
        map((action: actions.AuthAction) => action.payload),
        switchMap(state => {
            return this._whatsappService.auth().pipe(
                map(data => new actions.AuthSuccessAction(data)),
                catchError(err => of(new actions.AuthFailAction(err)))
            );
        })
    ));
}