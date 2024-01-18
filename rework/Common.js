x = [1, 2, 3, 4, 5];
y = [6, 7, 3, 9, 10];

function FindCommon(x, y) {
    for (let i = 0; i < x.length; i++) {
        for (let j = 0; j < y.length; j++) {
            if (x[i] === y[j]) {
                return x[i];
            }
        }
    }
}

console.log(FindCommon(x, y));