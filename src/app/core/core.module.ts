import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AuthModule } from 'app/core/auth/auth.module';
import { IconsModule } from 'app/core/icons/icons.module';
import { TranslocoCoreModule } from 'app/core/transloco/transloco.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './reducer.interface';

import { AuthSandbox } from './auth/auth.sandbox';
import { AuthService } from './auth/auth.service';
import { AuthEffects } from './auth/auth.effect';

@NgModule({
    imports: [
        AuthModule,
        IconsModule,
        TranslocoCoreModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([
            AuthEffects
        ]),
    ],
    providers: [
        AuthSandbox,
        AuthService,
    ]
})
export class CoreModule
{
    /**
     * Constructor
     */
    constructor(
        @Optional() @SkipSelf() parentModule?: CoreModule
    )
    {
        // Do not allow multiple injections
        if ( parentModule )
        {
            throw new Error('CoreModule has already been loaded. Import this module in the AppModule only.');
        }
    }
}
