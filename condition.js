// 1. Simple IF
let temperature = 35;

if (temperature > 30) {
    console.log("It's a hot day.");
}


// 2. IF - ELSE
let age = 16;

if (age >= 18) {
    console.log("You can drive.");
} else {
    console.log("You are too young to drive.");
}


// 3. IF - ELSE IF - ELSE
let score = 72;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 75) {
    console.log("Grade: B");
} else if (score >= 60) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}


// 4. SWITCH
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number.");
}


// 5. TERNARY OPERATOR
let number =19299;
let result = (number % 2 === 0) ? "Even" : "Odd";
console.log("The number is: " + result);