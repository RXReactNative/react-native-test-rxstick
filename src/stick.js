
import RXEmitter from 'react-native-rxemitter'
import Register from './register';

export default class Stick {

  static allowAccess() {
    if(__DEV__) return true
    return false;
  }

  static show() {
    if(this.allowAccess()) {
      this.setTheme();

      setTimeout(() => {
        RXEmitter.emit('pattern', {hidden: false});
        this.setRoot();
      }, 10);
    }
    else {
      setTimeout(() => {
        RXEmitter.emit('pattern', {hidden: true});
      }, 100);
    }
  }

  static setTheme() {
    // RXTheme.update(RXThemeDefault);
  }

  static setRoot() {
    // RXRoot.replaceComponent(...)
  }
}

