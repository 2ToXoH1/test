function PrintOdd(a, b) {
    for (let i = a; i <= b; i++) {
        if (i % 2!== 0) {
            console.log(i);
        }
    }
}

let a = 1
let b = 20

PrintOdd(a, b);