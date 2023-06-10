
/* retaral way of making an object */


var obj = {
    name: 'bob',
    age: '22',
    role() {
        return this.name + " has " + this.age + "years"
    }

}

console.log(obj.role())

for (const a in obj){
    console.log(a + ': '  /* obj.(a) */)    
}


/* Different ways of creating Objects*/

var house = {       

    key: 'av',      /* object literal */
    role() {
        console.log('functionality of an object')
    }
}

/* function object */

function obj(name, age, role){
    this.name = "valery",
    this.age = 25
    

}

/* Object Creat Method */

const body = object.create(being);


                    /* FACTORY FUNCTION  */

    /* this is a function that returns a new object */