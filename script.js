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

// CREATIVE FUNCTION + ARRAY CHALLENGES

// 01. getFirstItem(arr)
// Write a function that returns the first item in an array.

let arr = ["london", "paris", "nyc", "tokyo"]

function getFirstItem(arr) {
    return arr[0]
}
console.log(getFirstItem(arr))

// 02. getLastItem(arr)
// Write a function that returns the last item in an array.

function getLastItem(arr) {
    return arr[arr.length - 1];

}
console.log(getLastItem(arr))

// 03. addItem(arr, item)
// Write a function that adds an item to an array and returns the updated array.

let item = "dublin"
function addItem(arr, item) {
    arr.push(item)
    return arr
}
console.log(addItem(arr, item))

// 04. describeArray(arr)
// Write a function that returns a string: 
// "The array has X items. The first item is Y."

// Example: describeArray(["apple", "banana"]) → 
// "The array has 2 items. The first item is apple."

function describeArray(arr) {
    return `The array has ${arr.length} items. The first item is ${arr[0]}.`
}
console.log(describeArray(arr))


// 05. getUppercaseItems(arr)
// Write a function that returns a new array with all string items converted to uppercase.
// Example: getUppercaseItems(["hi", "bye"]) → ["HI", "BYE"]

function getUppercaseItems(arr) {
    return arr.map(item => item.toUpperCase());
}
console.log(getUppercaseItems(arr))

// 01. getMiddleItem(arr)
// Write a function that returns the middle item in an array.
// If the array has an even number of items, return the one just before the middle.

let colors = ["blue", "red", "pink","yellow","aqua", "green"]

function getMiddleItem(arr) {
    let middleIndex = Math.floor(colors.length / 2)
    return colors[middleIndex]
}
console.log(getMiddleItem(arr))

// 02. removeLastItem(arr)
// Write a function that removes the last item in an array and returns the updated array.

function removeLastItem(arr) {
    colors.pop()
    return colors
}
console.log(removeLastItem(arr))

// 03. startsWithA(arr)
// Write a function that returns a new array with only the items that start with the letter "A" (uppercase or lowercase).

function startsWithA(arr) {
    let colorWithA = colors.filter(name => name.startsWith("a"))
    return colorWithA
}
console.log(startsWithA(arr))

// 04. getNumberItems(arr)
// Write a function that returns how many numbers are in an array.
// Example: [1, "hello", 5, true] → returns 2

let numbersArray = [1, "hello", 5, true]
function getNumberItems(arr) {
    let result = arr.filter(item => typeof item === "number")
    return result.length
}
console.log(getNumberItems(arr))

// 05. reverseArray(arr)
// Write a function that returns a new array with the items in reverse order.

function reverseArray(arr) {
    return [...arr].reverse();
}
console.log(reverseArray(arr))