Para crear el Hola Mundo

Instalamos brew
https://brew.sh/index_es

update de npm
```
npm update -gf
brew unlink node && brew link --overwrite node
```

update de node
```
brew upgrade node
```

Instalar watchman
```
brew install watchman
```

Instalamos la herramienta de React native
```
npm install -g create-react-native-app
```

Y luego para crear la app

```
create-react-native-app AwesomeProject

cd AwesomeProject
npm start
```


Para generar el .ipa o .apk

Instalar Expo
```
npm install -g exp
```


# Test con Jest

snapshots: Es una "imagen" de la pantalla. Lo que esperamos es que cada vez que corremos un test, el nuevo snapshots coincida con el previo. Si la pantalla cambia, el trst falla y hay que actualizar el snapshots si corresponde

```
// Install dependencies
npm install --save-dev jest babel-jest jest-react-native babel-preset-react-native react-test-renderer

// Add this to your package.json
"scripts": {
  "test": "jest"
},
"jest": {
  "preset": "jest-react-native"
}

// Add this to your .babelrc
{
  "presets": ["react-native"]
}
```

Luego para correr los test

```
npm test
```

Y corre el test por defecto ``App.test.js``

Creo la carpeta ``src/test`` y los archivos ``sum.js`` y ``sum.test.js``. Vuelvo a correr los test y los toma.