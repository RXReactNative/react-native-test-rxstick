import rversion from './utils/rversion'

const Register = rversion(() => {
  return require('./re/register_16.js')
}, () => {
  return require('./re/register.js')
})

module.exports = Register
