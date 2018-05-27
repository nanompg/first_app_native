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