import stringformat from 'string-format'

import { getStoreValue } from "../store";

export function stringFormat() {
  var args = [].slice.apply(arguments)
  return stringformat.apply(null, args)
}

export function printJson(obj) {
  console.log(JSON.stringify(obj, null, 2))
}
export function printLog(message, cat, type) {
  type = type || 'log'
  if (Array.isArray(message)) {
    message = message.join('')
  }
  var str = message
  if (cat) {
    str = stringFormat('[ {0} ] {1}', cat, message)
  }
  console[type].call(null, str)
}

export function getToken() {
  return getStoreValue('app.token')
}

export function copyAsPureObject(obj) {
  return JSON.parse(JSON.stringify(obj))
}