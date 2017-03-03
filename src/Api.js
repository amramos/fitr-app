import {Alert} from 'react-native';

export function post(url, body){

  return fetch('https://fitr-server.herokuapp.com' + url, {
    method: 'POST',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(response => response.json(), e => console.log(e))
}

