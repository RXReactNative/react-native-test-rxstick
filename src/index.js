/**
 *  @this 
 * 
 * @flow
 */

'use strict'
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Keyboard,
  Dimensions,
  Platform,
} from 'react-native';

import Navigation from './root';
import RXEmitter from 'react-native-rxemitter';
import RXTheme from './utils/theme/RXTheme';

const {height, width} = Dimensions.get('window');


export default class StickView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      min: true,
      x: 10,
      y: 70,
      preX: 0,
      preY: 0,
      newRoot: null,
    }
    this.currentLocal = null;
    this._PanResponder = null;
  }

  static replaceComponent(view) {
    RXEmitter.emit('replace', view);
  }

  componentDidMount() {
    RXEmitter.addListener(this, 'gotoHome', ()=> {
      this.setState({ min: true });
    });
    RXEmitter.addListener(this, 'replace', (newRoot)=>{
      this.setState({newRoot});
    })
  }

  render(){
    let { min, x, y, preX, preY, newRoot } = this.state;
    if(min) {

      let styleContainer = [styles.container].concat({
        width: RXTheme.stickWidth,
        height: RXTheme.stickHeight,
        borderRadius: RXTheme.stickBorderRadius,
        backgroundColor: RXTheme.stickBackgroundColor,
      });

      let styleText = {
        fontSize: RXTheme.stickFontSize,
        color: RXTheme.stickColor,
        padding: RXTheme.stickPadding,
      };


      return(
        <View
          style={[styleContainer, {left: x, top: y}]}

          onMoveShouldSetResponder={()=>{
            // if(Platform.OS === 'ios') return true;
            // return false;
            return true;
          }}
          onResponderGrant={(event)=>{
            Keyboard.dismiss();
            this.currentLocal = event.nativeEvent;
            this.setState({ preX: 0, preY: 0});
          }}
          onResponderMove={(event)=>{
            const {locationX, locationY, pageX, pageY } = event.nativeEvent;
            var newX = 0, newY = 0;
            if(Platform.OS === 'android') {
              newX = pageX - this.currentLocal.pageX;
              newY = pageY - this.currentLocal.pageY;
            }
            else {
              newX = locationX - this.currentLocal.locationX;
              newY = locationY - this.currentLocal.locationY;
            }
            x += newX;
            y += newY
            preX += newX;
            preY += newY; 
            this.setState({ x, y, preX, preY });
          }}

          onResponderRelease={(event)=>{
            if(x<-20) {
              x = -20;
            }
            else if(x>width-20) {
              x = width-20;
            }

            if(y<20) {
              y = 20
            }
            else if(y>height-40) {
              y = height-40;
            }
            
            if(Math.abs(this.state.preX) <= 10 && 
              Math.abs(this.state.preY) <= 10) {
                this.setState({min: false})
            }

            this.setState({ x, y, preX: 0, preY: 0});
          }}
        >
          <Text style={styleText} onPress={()=>{
            this.setState({min: false})
          }}>{'stick'}</Text>
        </View>
      )
    }
    return(
      <View style={styles.other}>
        <Navigation newRoot={newRoot}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    zIndex: 1000,
    position: 'absolute',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  other: {
    position: 'absolute',
    left: 0,
    top: 0,
    height,
    width,
  }
});