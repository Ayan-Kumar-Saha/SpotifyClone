import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private _accessToken: string;
  
  constructor() { }

  public set accessToken(value: string) {
    this._accessToken = value;
  }
  public get accessToken(): string {
    return this._accessToken;
  }
}
