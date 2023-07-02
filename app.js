// Refactor the code to use two arrow functions. Turn it into a one-liner.
function double1(arr) {
    return arr.map(function (val) {
        return val * 2;
    });
}

// ES2015 Arrow Functions Shorthand
const double = (arr) => arr.map((val) => val * 2)

// Replace ALL functions with arrow functions:
function squareAndFindEvens(numbers) {
    var squares = numbers.map(function (num) {
        return num ** 2;
    });
    var evens = squares.filter(function (square) {
        return square % 2 === 0;
    });
    return evens;
}

// Answer
const squareAndFindEvensShortHand = (numbers) => numbers.map((num) => num ** 2).filter((num) => num % 2 === 0);