// 01. Create an array called fruits with 3 fruits inside it.

let fruits = ["orange", "banana", "apple"]

// 02. Access the second item from an array called colors and print it.

console.log(fruits[1])

// 03. Add a new fruit to the end of the fruits array using .push().

fruits.push("ananas")
console.log(fruits)

// 04. Remove the last fruit from the fruits array using .pop().

fruits.pop()
console.log(fruits) // if I wanted to store the removed item -> let removedFruit = fruits.pop();

// 05. Create an array of numbers and print its length.

let numbers = [1, 2, 3, 4]
console.log(numbers.length)

// 06. Replace the first item in an array with a new value.

numbers.splice(0, 1, 10)
console.log(numbers)

// OR more simplier, just reassign the value of the first item (numbers[0] = 10;)

// 07. Check if a value exists in an array using .includes().

console.log(numbers.includes(2))

// 08. Create an array of 5 names and print the third one.

let names = ["john", "leah", "bob", "naru", "matt"]
console.log(names[2])

// 09. Use .indexOf() to find the position of "apple" in a fruits array.

console.log(fruits.indexOf("apple")) // Will return -1 if the item doesn't exist

// 10. Create an array with multiple data types: a number, a string, and a boolean.

let dataTypeArray = [
    1,
    "Hi there!",
    true
]
console.log(dataTypeArray)