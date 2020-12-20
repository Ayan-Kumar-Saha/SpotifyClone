import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { loginUrl } from '../constants/auth';
import { AuthResponse } from '../interface/authResponse';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginUrl: string = loginUrl;

  constructor(
    private _route: ActivatedRoute,
    private _tokenService: TokenService,
    private _router: Router,
    private _appService: AppService
  ) { }

  ngOnInit(): void {
    this.getAccessTokenFromUrl();
    this._tokenService.accessToken ? this._router.navigate(['/home']) : this._router.navigate(['/']);
  }

  getAccessTokenFromUrl() {
    this._route.fragment.subscribe((fragment: string) => {
      if (fragment) {
        let response: AuthResponse = fragment
          .split('&')
          .reduce((responseObj, item) => {
            let parts = item.split('=');
            responseObj[parts[0]] = decodeURIComponent(parts[1]);
            return responseObj;
          }, {
            "access_token": "",
            "token_type": "",
            "expires_in": ""
          })

        this._tokenService.accessToken = response?.access_token;
        this._appService.spotifyApp.setAccessToken(this._tokenService.accessToken);
      }
    })
  }

}
