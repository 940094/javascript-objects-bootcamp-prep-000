function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
 
  return obj
}
 
const recipe = { eggs: 3 }
 
console.log(destructivelyUpdateObjectWithKeyAndValue(recipe, 'flour', '3 cups'))
// returns { eggs: 3, flour: '3 cups' }
 
// but also, recipe is permanently alterted
 
console.log(recipe) // { eggs: 3, flour: '3 cups' }