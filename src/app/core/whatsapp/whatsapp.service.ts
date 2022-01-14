import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, switchMap, throwError } from 'rxjs';
import { environment } from 'environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class WhatsappService
{
    private _env: any;

    constructor(
        private _httpClient: HttpClient,
        private _authService: AuthService
    ) {
        this._env = environment
    }

    public auth(): Observable<any> {
        return this._httpClient.get(this._env.API + 'api/wappauth')
    }
}
