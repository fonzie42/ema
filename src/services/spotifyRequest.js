import axios from 'axios';
export function spotifyRequest(params) {
  const stateKey = 'spotify_auth_state';

  const access_token = params.access_token,
    state = params.state,
    storedState = localStorage.getItem(stateKey);

  localStorage.setItem('access_token', access_token);

  if (access_token && (state == null || state !== storedState)) {
    alert('There was an error during the authentication');
  } else {
    localStorage.removeItem(stateKey);
    if (access_token) {
      axios
        .get('https://api.spotify.com/v1/me', {
          headers: {
            Authorization: 'Bearer ' + access_token
          }
        })
        .then(function(response) {
          if (response.status >= 200 && response.status < 400) {
            const userId = response.data.id;
            localStorage.setItem('userId', userId);
          } else {
            alert('Login não efetuado');
          }
        });
    }
  }
}
