import {Alert} from 'react-native';

export function req(url, method, body){

  return fetch('https://fitr-server.herokuapp.com' + url, {
    method: method 
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(response => response.json(), e => console.log(e))
}

