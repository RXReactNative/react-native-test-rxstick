
# rxstick

小按钮 测试 用于测试


simple test framework

## Usage
`$ npm install react-native-test-rxstick --save`

```js

import Stick, { RXTheme, RXRoot } from '../react-native-test-rxstick'

// Stick
// RXTheme 
// RXRoot

```

<br />
![srxboys-stick](https://github.com/RXReactNative/react-native-test-rxstick/blob/master/screen_img/stick.jpeg)
![srxboys-detail](https://github.com/RXReactNative/react-native-test-rxstick/blob/master/screen_img/stick-detail.jpeg)

<br /><br />

####  demo
Stick 
```js
import React from 'react';
import Stick, { RXTheme, RXRoot } from '../react-native-test-rxstick'

import TestTheme from './TestTheme';
import TestRoot from './TestRoot';


export default class TestStick extends Stick {

  constructor(props) {
    super(props);
  }

  static allowAccess() {
    return true;
  }

  static setTheme() {
    RXTheme.update(TestTheme);
  }

  static setRoot() {
    RXRoot.replaceComponent(<TestRoot />)
  }
}
```

TestTheme
```js
export default {
  stickBackgroundColor: '#FFF68F', 
  stickColor: '#00FFFF',
  stickFontSize: 18,
}
```


TestRoot
```js
// Component
```