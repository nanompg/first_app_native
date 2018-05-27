import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, AppRegistry, Image, TextInput, Alert, ScrollView } from 'react-native';
import Intro from './src/test/Intro';

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 2000);
  }
  
  render() {
    
    let texto = this.state.isShowingText ? this.props.algo : ' ';
    
    return (
      
      <Text>Hello {texto}!</Text>
    );
  }
}

export default class App extends React.Component {

  onPressLearnMore(){
    alert("Alert Hola Mundo");
  } 

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  
  render() {

    let pic = {
      uri: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/f5/7c/f2/eiffel-tower-priority.jpg'
    };

    return (
      <Intro/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    //justifyContent: 'center',
    //flexDirection: 'column',
    //justifyContent: 'space-between',
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  container1: {
    //flex: 1,
    backgroundColor: 'white',
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 2,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container3: {
    flex: 3,
    backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container4: {
    flex: 4,
    backgroundColor: 'darkblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  contentContainer: {
    paddingVertical: 20
  },
});
