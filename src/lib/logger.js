import Logger from 'licia/Logger.js'

let logger

export default logger = new Logger(
  '[Eruda]',
  
  'production'
  //ENV === 'production' ? 'warn' : 'debug'
)

logger.formatter = function (type, argList) {
  argList.unshift(this.name)

  return argList
}
