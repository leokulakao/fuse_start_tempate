import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SharedModule } from 'app/shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { QRCodeModule } from 'angular2-qrcode';

import { WhatsappComponent } from 'app/modules/admin/apis/whatsapp/whatsapp.component';
import { QrDialogComponent } from 'app/modules/admin/apis/whatsapp/qr-dialog/qr-dialog.component';

const whatsappRoutes: Route[] = [
    {
        path     : '',
        component: WhatsappComponent
    }
];

@NgModule({
    declarations: [
      WhatsappComponent,
      QrDialogComponent
    ],
    imports     : [
        RouterModule.forChild(whatsappRoutes),
        MatButtonModule,
        MatIconModule,
        MatProgressBarModule,
        SharedModule,
        QRCodeModule
    ]
})
export class WhatsappModule
{
}
