import { Injectable } from '@angular/core';
import SpotifyWebApi from 'spotify-web-api-js';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public spotifyApp = new SpotifyWebApi();

  constructor() { }
}
