
# rxstick

小按钮 测试 用于测试


simple test framework

## Installation
Open a Terminal in the project root and run:

```sh
  yarn add react-native-test-rxstick
```
or if you use npm:

```sh
  npm install react-native-test-rxstick
```

If you are using Expo, you are done.

If you don't use Expo, install  [react-native-rxemitter](https://github.com/RXReactNative/react-native-rxemitter).

## Usage
```js

import Stick, { RXTheme, RXRoot } from '../react-native-test-rxstick'

// Stick
// RXTheme 
// RXRoot

```

<br />

![srxboys-stick](https://github.com/RXReactNative/react-native-test-rxstick/blob/master/screen_img/stick.jpg)
![srxboys-detail](https://github.com/RXReactNative/react-native-test-rxstick/blob/master/screen_img/stick-detail.jpeg)

<br /><br />

## demo
Stick 
```js
import React from 'react';
import Stick, { RXTheme, RXRoot } from '../react-native-test-rxstick'

import TestTheme from './xx/xx'
import TestRoot from './xx/xx'

export default class TestStick extends Stick {

  constructor(props) {
    super(props);
  }

  static allowAccess() {
    return true;
  }

  static setTheme() {
    const TestTheme = require('./TestTheme').default;
    RXTheme.update(TestTheme);
  }

  static setRoot() {
    const TestRoot = require('./TestRoot').default;
    RXRoot.replaceComponent(<TestRoot />)
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

---

### My approach:
1. Configure react native bundle packaging <br />
2. Replace the stick entry file before packaging, debug / release <br />
<br />
Disadvantage: not debuggable <br />

---

### 我的处理方法:
1. 配置react-native bundle打包 <br />
2. 在打包前替换stick入口文件，debug/release <br />
<br />
坏处：不可调试
<br />