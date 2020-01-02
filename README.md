
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

## demo
Stick 
```js
import React from 'react';
import Stick, { RXTheme, RXRoot } from '../react-native-test-rxstick'

export default class TestStick extends Stick {

  constructor(props) {
    super(props);
  }

  static allowAccess() {
    return true;
  }

  static setTheme() {
    if(__DEV__) { // must
      const TestTheme = require('./TestTheme').default;
      RXTheme.update(TestTheme);
    }
  }

  static setRoot() {
    if(__DEV__) { // must
      const TestRoot = require('./TestRoot').default;
      RXRoot.replaceComponent(<TestRoot />)
    }
  }
}
```

TestTheme (stick style)
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