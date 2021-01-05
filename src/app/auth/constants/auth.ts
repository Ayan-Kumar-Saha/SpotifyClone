import { environment } from '../../../environments/environment';

const scopes: string[] = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const loginUrl: string = `${environment.authEndPoint}?client_id=${environment.clientId}&redirect_uri=${environment.redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;