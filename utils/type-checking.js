// check if typeof arg number
export function isNumber(arg) {
  return typeof(arg) === 'number'
}

// check if typeof arg function
export function isFunction(arg) {
  return typeof(arg) === 'function'
}

// check if typeof arg string
export function isString(arg) {
  return typeof(arg) === 'string'
}

// check if typeof arg object
export function isObject(arg) {
  return typeof(arg) === 'object' && arg !== null
}

// check if object is readable stream
export function isReadableStream(arg) {
  return isObject(arg) && isFunction(arg._read)
}

// check if arg is boolean
export function isBoolean(arg) {
  return typeof(arg) === 'boolean'
}

// check if arg is array
export function isArray(arg) {
  return Array.isArray(arg)
}

// check if arg is a date
export function isDate(arg) {
  return arg instanceof Date && !isNaN(arg)
}
