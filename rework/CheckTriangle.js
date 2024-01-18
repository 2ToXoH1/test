function CheckTriangle(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c && c === a) {
        return "tam giac deu";
    } else if (a === b) {
        return "tam giac can";
    } else {
        return "tam giac";
    }
    } else {
        return "khong phai tam giac";
    }
}    
 
let canhA = 4;
let canhB = 4;
let canhC = 5;
let Triangle = CheckTriangle(canhA, canhB, canhC);

console.log(Triangle)