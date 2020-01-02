/**
 * 
 */
"use strict";
// import { createStackNavigator, createAppContainer} from 'react-navigation';

// import RXNavigationConfig from './utils/navigation/RXNavigationConfig';

// let nav = RXNavigationConfig.default;

// var Navigator = createStackNavigator({
//   ...nav
// }, {
//   initialRouteName: 'index',
//   headerMode: 'screen',
//   mode: 'card',
//   defaultNavigationOptions: () => ({
//     gesturesEnabled: true,
//     headerStyle: {
//       backgroundColor: '#54FF9F',
//       shadowColor: 'transparent',
//       shadowOpacity: 0,
//       borderBottomWidth: 0.5,
//       borderBottomColor: '#698B69',
//       elevation: 0,
//     }
//   })
// })

// export default createAppContainer(Navigator);



// ----  test

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  findNodeHandle,
} from 'react-native';
import RXEmitter from 'react-native-rxemitter';

export default class Root extends Component {


  constructor(props) {
    super(props);
  }

  render() {
    let { newRoot } = this.props;
    if(newRoot) {
      return newRoot;
    }
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={()=>{
          RXEmitter.emit('gotoHome');
        }}>
          <Text style={styles.text}>close - 关闭</Text>
        </TouchableOpacity>
        <Text>需要再次实现</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  button: {
    padding: 20,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    lineHeight: 30,
    fontSize: 12,
    color: 'white',
  },
})