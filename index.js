
import RXTheme from './src/utils/theme/RXTheme'
import RXIndex from './src/index'

import RXStick from './src/stick'
export default RXStick

// safe export
const RXRoot = { replaceComponent: RXIndex.replaceComponent }

export {
  RXTheme,
  RXRoot,
}