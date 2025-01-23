console.log(5 + 5);
console.log();
console.log("hi" + (10 + 50));

console.log(5 - 5);
console.log("5" - 5);
console.log("5" - "5");

console.log(5 * 5);
console.log("5" * 5);

console.log(10 / 5);
console.log("10" / 5);
console.log("5" ** "5");

console.log(10 % "5");

console.log(10 % 5);
console.log("10" % 5);
console.log("5" % "5");


//increment
let a = 10
console.log(a++);//10
console.log(a);//11

//decrement

let b = 10
console.log(b--);
console.log(b);

//assignment
let c = 10;
console.log(a += 5);
console.log(a -= 5);
console.log(a *= 5);
console.log(a /= 5);
console.log(a %= 5);
console.log(a **= 5);

//comparision
let d = 10;
let e = "10";
console.log(d == e);
console.log(d === e);
console.log(d != e);
console.log(d !== e);
console.log(d > e);
console.log(d < e);
console.log(d >= e);
console.log(d <= e);

//logical
console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log(!true);
console.log(!false);



//Conditionals
//if
let g = 10;
if (g > 5) {
    console.log("true");
} else {
    console.log("false");
}

//if-else
let h = 10;
if (h > 5) {
    console.log("true");
} else {
    console.log("false");
}

//ternary
let f = 10;
console.log(f > 5 ? "true" : "false");

//if-else-if
let i = 10;
if (i > 5) {
    console.log("true");
} else if (i < 5) {
    console.log("false");
}

//switch
let sringday = prompt("Enter the day");
let day = parseInt(sringday); ``
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
        break;
}















