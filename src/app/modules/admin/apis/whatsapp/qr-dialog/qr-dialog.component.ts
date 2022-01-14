import { Component, ViewEncapsulation, Inject, ChangeDetectorRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA}  from '@angular/material/dialog';
import { SocketService } from 'app/core/socket/socket.service';

@Component({
    selector     : 'qr-dialog',
    templateUrl  : './qr-dialog.component.html',
    encapsulation: ViewEncapsulation.None
})
export class QrDialogComponent
{
    public qrcode_str: string = '';

    constructor(
      private _cd: ChangeDetectorRef,
      public dialogRef: MatDialogRef<QrDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public socket: any,
      public _socketService: SocketService
    ) {
      console.log('dialog opened', socket);
      if (!!socket.connected) {
        this._socketService.override(socket);
      }
    }

    ngOnInit(): void {
      this._socketService.listenQr().subscribe(qrcode => {
        this.qrcode_str = qrcode;
        this._cd.markForCheck();
      });
      this._socketService.listenWhtsAuth().subscribe(auth => {
        if (auth == this._socketService.WHATSAPP_AUTH_RES_SUCCESS) {
          this.dialogRef.close();
        }
      });
    }
}
