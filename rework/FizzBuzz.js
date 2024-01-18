function FizzBuzz(a, b) {
    for (let i = a; i <= b; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            return "FizzBuzz";
        } else if (i % 3 === 0) {
            return "Fizz";
        } else if (i % 5 === 0) {
            return "Buzz";
        } else {
            return (i);
        }
    }
}

let a = 5;
let b = 5;

console.log(FizzBuzz(a, b));