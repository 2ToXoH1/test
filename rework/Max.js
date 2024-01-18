x = [1, 2, 3]
function FindMax(x) {
    let Max = Math.max(...x);
    return Max;
}    
console.log(FindMax(x));