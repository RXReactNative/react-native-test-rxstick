
# rxstick

小按钮 测试 用于测试

----

这个只是框架(也可以说是 入口)，具体页面，以及功能需要自己定义。


simple test framework

## Installation
Open a Terminal in the project root and run:

```sh
  yarn add react-native-test-rxstick -dev
```
or if you use npm:

```sh
  npm install react-native-test-rxstick --save-dev
```

If you are using Expo, you are done.

If you don't use Expo, install  [react-native-rxemitter](https://github.com/RXReactNative/react-native-rxemitter).

<br />

![srxboys-stick](https://github.com/RXReactNative/react-native-test-rxstick/blob/master/screen_img/stick.jpg)
![srxboys-detail](https://github.com/RXReactNative/react-native-test-rxstick/blob/master/screen_img/stick-detail.jpeg)

<br /><br />

## Usage
```js
import React from 'react';
import Stick, { RXTheme, RXRoot } from '../react-native-test-rxstick'

//第一种
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
    // const TestTheme = require('./TestTheme').default; //第二种
    RXTheme.update(TestTheme);
  }

  static setRoot() {
    // const TestRoot = require('./TestRoot').default; //第二种
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

<br />

### 我的处理方法:
1. 配置react-native bundle打包 <br />
2. 在打包前替换stick入口文件，debug/release <br />
<br />
坏处：不可调试
<br />

---