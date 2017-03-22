import {Alert} from 'react-native';

export function http(url, method, body){
  return fetch('http://localhost:5000' + url, {
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
