var store = require('../store.js')

// store state
var _state = {
  name: 'Bender'
}

var myStore = store({

  get: function (key) {
    return _state[key]
  },

  set: function (key, value) {
    _state[key] = value
    myStore.informListeners()
  },

  getState: function () {
    return _state
  }

})

module.exports = myStore
