import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QrDialogComponent } from '../whatsapp/qr-dialog/qr-dialog.component';
import { WhatsappSandbox } from '../../../../core/whatsapp/whatsapp.sandbox';
import { SocketService } from 'app/core/socket/socket.service';
import { Subscription } from 'rxjs';

@Component({
    selector     : 'whatsapp',
    templateUrl  : './whatsapp.component.html',
    styleUrls  : ['./whatsapp.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class WhatsappComponent
{
    private subscriptions: Array<Subscription> = [];
    private _socket: any;
    /**
     * Constructor
     */
    constructor(
        public _matDialog: MatDialog,
        public _whatsappSandbox: WhatsappSandbox,
        public _socketService: SocketService
    ) { }

    ngOnInit(): void {
        this._getWhatsappAuth();
    }

    public openDialog(): void {
        this._matDialog.open(QrDialogComponent, {data: this._socket});
    }

    private _getWhatsappAuth(): void {
        this._whatsappSandbox.getAuth();
        this.subscriptions.push(this._whatsappSandbox.getAuthData$.subscribe(data => console.log(data)));
        this.subscriptions.push(this._whatsappSandbox.getAuthFail$.subscribe((res) => {
            if (!!res) {
                this._socket = this._socketService.initSocket();
            }
        }))
    }
}
