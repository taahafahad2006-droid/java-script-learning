// Arrays Practice

// Create an array of fruits
let fruits = ["apple", "banana", "mango", "grape", "orange"];

// Access elements
console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[fruits.length - 1]);

// Add new item
fruits.push("pineapple");
console.log("After push:", fruits);

// Remove last item
fruits.pop();
console.log("After pop:", fruits);

// Replace item
fruits[1] = "kiwi";
console.log("After replace:", fruits);

// Loop through array
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}
