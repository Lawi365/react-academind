const myname = "does_not_change";
console.log(myname);

// #arrow function
// bypass the this keyword.

function print_my_name(var_1) {
  console.log(var_1);
}
print_my_name(myname);

function multiply(number) {
    return number * 2;
}

// # Export and Import (Modules)
// named exports and default exports

//  Classes.
// #property.
class Human{
        gender = 'male';
    
    printGender(){
        console.log(this.gender)
    }
}

class Person extends Human {
    name = "max";
  printMyName() {
    console.log(this.name); 
  }
}

const person =  new Person();
person.printMyName();
person.printGender();

// modern syntax to classes properties and methods.
// direct assignments to properties/variables 

//  Spread & Rest Operators.

const numbers = [1,2,3]
const new_numbers = [...numbers,4]

//obj
const persona ={
    name: 'max'
};
const newpersona ={
    ...person,
    age:28
}

//function
const fil = (...args) =>{
    return args.filter(el => el === 1);
}
console.log(fil(1,2,3))
console.log(newpersona)
console.log(new_numbers);

// Destructuring.
//array.
const what = [1,2,3,4,5,6];
[num1, , num2] = what;
console.log(num2,num1);

//object destructuring.

const where  = {name: 'Max', age: 23};
// not supported by this version of es {named} = where
// console.log(named)
// console.log(age)


//primitive and refernced types
const numeral = 1;
const num3= numeral;

console.log(num3)

// array functions.
// double what array.

const doublewhat = what.map((num) => {
  return num * 3
})

console.log(doublewhat)