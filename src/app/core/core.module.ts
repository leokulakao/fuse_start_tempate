import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AuthModule } from 'app/core/auth/auth.module';
import { IconsModule } from 'app/core/icons/icons.module';
import { TranslocoCoreModule } from 'app/core/transloco/transloco.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './reducer.interface';

import { SocketService } from '../core/socket/socket.service';

import { AuthSandbox } from './auth/auth.sandbox';
import { AuthService } from './auth/auth.service';
import { AuthEffects } from './auth/auth.effect';

import { WhatsappSandbox } from './whatsapp/whatsapp.sandbox';
import { WhatsappService } from './whatsapp/whatsapp.service';
import { WhatsappEffects } from './whatsapp/whatsapp.effect';

@NgModule({
    imports: [
        AuthModule,
        IconsModule,
        TranslocoCoreModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([
            AuthEffects,
            WhatsappEffects
        ]),
    ],
    providers: [
        SocketService,
        AuthSandbox,
        AuthService,
        WhatsappSandbox,
        WhatsappService
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
