'use strict'

var objectAssign = require('object-assign')

function createStore(spec) {
  spec = spec || {}

  var _listeners = []

  var store = Object.freeze(
    objectAssign({
      addListener: addListener,
      removeListener: removeListener,
      informListeners: informListeners
    }, spec)
  )

  function addListener(listener) {
    if (typeof listener !== 'function') {
      throw new TypeError('listener must be a function')
    }

    _listeners.push(listener)
  }

  function removeListener(listener) {
    if (typeof listener !== 'function') {
      throw new TypeError('listener must be a function')
    }

    _listeners = _listeners.filter(function (candidate) {
      return candidate !== listener
    })
  }

  function informListeners() {
    _listeners.forEach(function (listener) {
      listener.call(store)
    })
  }

  return store
}

module.exports = createStore
