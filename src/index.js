/**
 * @this
 *
 * @flow
 */
import rversion from './utils/rversion'

const StickView = rversion(() => {
  return require('./stick-view/index_17_after.js')
}, () => {
  return require('./stick-view/index.js')
})

module.exports = StickView