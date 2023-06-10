/* constuctor functions and factorial functions are used to creat objects
 */

var person = {
    name: 'John',
    age: 30,
    gender: 'male',
    sayHello: function() {
      console.log('Hello!');
    }
  };
  
  var propertyName = 'name';
  console.log(person[propertyName]); // Accessing property using bracket notation
  
  var methodName = 'sayHello';
  person[methodName](); // Invoking method using bracket notation
  

  var obj1 = { a: 1 };
var obj2 = { b: 2 };
var obj3 = { c: 3 };

var mergedObject = {};
for (var key in obj1) {
  mergedObject[key] = obj1[key];
}
for (var key in obj2) {
  mergedObject[key] = obj2[key];
}
for (var key in obj3) {
  mergedObject[key] = obj3[key];
}
console.log(mergedObject); // Output: { a: 1, b: 2, c: 3 }
