/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Switch,
  TextInput,
} from 'react-native'

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: null,
    };
  }
 
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{
            height: 62,
            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.5)",
            textAlign: 'center',
          }}
          placeholder={"Enter your name"}
          onChangeText={(text) => {this.setState({text})}}
          value={(this.state && this.state.text) || ''}
        />
        <Text style={styles.welcome}>
          Welcome to React Native CI{this.state.text ? `, ${this.state.text}` : ''}!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Project', () => Project);
