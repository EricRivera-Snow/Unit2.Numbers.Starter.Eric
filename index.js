// Complete the Numbers class below
// the constructor has already been provided
class Numbers {
  constructor(data) {
    //data can either be a string or an array of numbers
    if (typeof data === "string") {
      this.data = str.split(",").map((number) => number * 1);
    } else {
      this.data = data;
    }
  }
  count() {
    //return the count of numbers in data
    return this.data.length;
  }
  printNumbers() {
    //print the numbers in data
    this.data.forEach((number, index) => {
      console.log(`Index: ${index}, Number: ${number}`);
    });
  }
  odds() {
    //return the odd numbers in data
    const odds = this.data.filter((number) => {
      return number % 2 !== 0;
    });
    return odds;
  }
  evens() {
    //return the even numbers in data
    const evens = this.data.filter((number) => {
      return number % 2 === 0;
    });
    return evens;
  }
  sum() {
    //return the sum of the numbers
    const sum = this.data.reduce((acc, currentNumber) => {
      return (acc += currentNumber);
    }, 0);
    return sum;
  }
  product() {
    //return the product of the numbers
    const product = this.data.reduce((acc, currentNumber) => {
      return (acc *= currentNumber);
    }, 1);
    return product;
  }
  greaterThan(target) {
    //return the numbers greater than the target
    const greaterThanTarget = this.data.filter((number) => {
      return number > target;
    });
    return greaterThanTarget;
  }
  howMany(target) {
    //return the count of a given number
    const howManyTarget = this.data.reduce((acc, number) => {
      if (number === target) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);
    return howManyTarget;
  }
}

//Prompt the user for a list of integers separated by commas
const str = prompt("enter some numbers, like this", "1,2,3,3,5,9");

//create an instance of numbers
const n1 = new Numbers(str);
console.log(`Count of numbers: ${n1.count()}`); //returns count of numbers
n1.printNumbers(); //prints the number along with their indexes
console.log(`Odd numbers: ${n1.odds()}`); //returns odd numbers
console.log(`Even numbers: ${n1.evens()}`); //returns even numbers
console.log(`Sum: ${n1.sum()}`); //returns sum of numbers
console.log(`Product: ${n1.product()}`); //returns product of numbers
console.log(`Numbers greater than 3: ${n1.greaterThan(3)}`); //returns numbers greater than another number
console.log(`Count of specific number: ${n1.howMany(3)}`); //return the count of a specific number
