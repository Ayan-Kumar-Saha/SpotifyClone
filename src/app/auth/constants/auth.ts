const authEndPoint: string = 'https://accounts.spotify.com/authorize';
const redirectUri: string = 'http://localhost:4200/';
const cliendId: string = 'fec25aa109f543f781c9d873270451ab';

const scopes: string[] = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const loginUrl: string = `${authEndPoint}?client_id=${cliendId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;