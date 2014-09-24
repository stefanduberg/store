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
