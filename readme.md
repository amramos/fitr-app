### FITR app
Aplicativo do sistema para gestão de treinos FITR.


## Estrutura
A ideia é separar o redux dos componentes react e reaproveitar o máximo de código possível.

```
--android
--ios 
--src
  |--components (componentes gerais)
  |--config 
     |-- Api (funcoes para chamdas do back)
  |--ducks (reducers, action types e action creators, separado por scene)
  |--imgs (imagens em geral)
  |--scenes (app routes, com containers e componentes especificos)
     |--Sign (scene folder)
        |--index.js 
        |--scenes (nested)
           |--Login
              |--index.js
              |--components (componentes definidos aqui só podem ser utilizados daqui pra baixo)
                 |--loginForm.js
           |--Register
  |--store (redux store)
  |--app (inicio, com a definicao das rotas)
--index.android.js (inicio do android)
--index.ios.js (inicio do ios)
```

Se um componente começar a ficar muito pesado (pedir muitas props), quebrar em dois. Mesmo que se duplique um pouco de código.


## Side effects
Os side effects são feitos com thunks normais dentro das actions, mas a action tem que iniciar com do, ex:

```
export function doRequestExercisesList()){
  return dispatch => {
    dispatch(requestExercisesList())
    return Api.http(...)
  }
}
```

Assim facilita saber o que é uma action simples e o que não é.
Talvez no futuro a gente use sagas, mas por enquanto não é necessário.



