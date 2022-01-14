import { Injectable } from "@angular/core";
import { AuthService } from 'app/core/auth/auth.service';
import { WhatsappSandbox } from 'app/core/whatsapp/whatsapp.sandbox';
import { environment } from 'environments/environment';
import { Observable, of, Subject, switchMap } from 'rxjs';
import { io, Socket } from "socket.io-client";

@Injectable()
export class SocketService {

  private _env = environment;
  private _socket: any;

  private _QR_CODE_T: string = 'chat message';
  private _WHATSAPP_AUTH_T: string = 'info';

  public WHATSAPP_AUTH_RES_SUCCESS: string = 'sesion guardada';

  constructor(
    private _authService: AuthService,
    private _whatsappSandbox: WhatsappSandbox
  ) { }

  public override(newSocket: Socket): void {
    this._socket = newSocket;
  }

  public initSocket(): Socket {
    console.log('init socket');
    return io(this._env.API, {
      transports: ['websocket'],
      query: {
        "token": this._authService.accessToken,
      }
    });
  }

  public listenQr(): Observable<string> {
    return new Observable((subscriber)=>{
      this._socket.on(this._QR_CODE_T, (qrCode: any) => {
        subscriber.next(qrCode);
      })
    });
  }

  public listenWhtsAuth(): Observable<string> {
    return new Observable((subscriber)=>{
      this._socket.on(this._WHATSAPP_AUTH_T, (auth: any) => {
        subscriber.next(auth);
      })
    }).pipe(
      switchMap((response: any) => {
        if (response == this.WHATSAPP_AUTH_RES_SUCCESS) {
          this._whatsappSandbox.getAuth();
        }
          console.log('swithMap', response);
          return of(response);
      })
    );
  }
}