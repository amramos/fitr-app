import {Alert} from 'react-native';

export function http(url, method, body){
  return fetch('https://fitr-server.herokuapp.com' + url, {
    method: method,
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(response => {
    console.log(response);
    return response.json()
  })
    .then(json => {
      return json
    })
}

