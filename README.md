store
==========

# React Flux example
`mystore.js`
```js
var store = require('store')
var myDispatcher = require('./mydispatcher.js')

// store state
var _name = 'Bender'

// create store
var myStore = store({

  getName: function () {
    return _name
  },

  dispatchToken: myDispatcher.register(function (action) {
    // do stuff based on action
  })

})

module.exports = myStore
````

`mycomponent.js`
```js
var React = require('react')
var myStore = require('./mystore.js')

var MyComponent = React.createClass({

  componentDidMount: function () {
    myStore.addListener(this.onStoreChange)
  },

  componentWillUnmount: function () {
    myStore.removeListener(this.onStoreChange)
  },

  onStoreChange: function () {
    this.setState({name: myStore.getName()})
  }

  render: function () {
    return React.DOM.div(null, this.state.name)
  }

})

module.exports = MyComponent
```

# another example
`mystore.js`
```js
var store = require('store')

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
```

`somefunction.js`
```js
var myStore = require('./mystore.js')

console.log('initial store state:')
console.log(myStore.getState())

function onStoreChange() {
  console.log('store changed, new state:')
  console.log(myStore.getState())
}

myStore.addListener(onStoreChange)

myStore.set('fullName', 'Bender Bending Rodriguez')
myStore.set('species', 'Robot')
myStore.set('serialNumber', 2716057)

function dispose() {
  myStore.removeListener(onStoreChange)
}
```

# install
```bash
npm install git://github.com/stefanduberg/store.git
```

Not yet published to npm.
