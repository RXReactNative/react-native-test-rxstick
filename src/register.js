
'use strict'
import React, { Component } from 'react'
import { View,AppRegistry, StyleSheet } from 'react-native'

import RXEmitter from 'react-native-rxemitter'
import StickView from './index';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
    }
  }

  componentDidMount() {
    RXEmitter.addListener(this, 'pattern', ({hidden})=>{
      this.setState({ hidden })
    })
  }

  componentWillUnmount() {
    RXEmitter.removeLister(this)
  }

  renderStick() {
    const { hidden } = this.state;
    if(hidden) return null;
    return <StickView />;
  }

  render() {
    return (
      <View style={styles.container} pointerEvents='box-none'>
        {this.props.children}
        {this.renderStick()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'transparent',
  }
});

if (!AppRegistry.registerComponentForRXStick) {
  AppRegistry.registerComponentForRXStick = AppRegistry.registerComponent;
}


AppRegistry.registerComponent = function (appKey, componentProvider) {

  class RootElement extends Component {
    render() {
      let Component = componentProvider();
      return (
        <Register>
          <Component {...this.props} />
        </Register>
      );
    }
  }

  return AppRegistry.registerComponentForRXStick(appKey, () => RootElement);
}