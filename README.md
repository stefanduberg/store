flux-store
==========

# example
`mystore.js`
```js
var store = require('flux-store')

// store state
var _name = 'Bender'

// create store
var myStore = store({
  getName: function () {
    return _name
  }
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

# install
```bash
npm install git://github.com/stefanduberg/flux-store.git
```

Not yet published to npm.
