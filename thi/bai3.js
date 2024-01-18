let x=[3, 5, 7, 13, 17];
function sumOfListPrime(x) {
    let sum = 1
      for (let i=0; i<x.length; i++) {
        sum += x[i]
    }
    return sum;
}
alert(sumOfListPrime(x))