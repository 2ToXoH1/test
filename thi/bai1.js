let myArray = [8, 6, 4, 9, 10];
let result = findSecondMax(myArray)

function findSecondMax(arr) {
    let max = -Infinity;
    let secondMax = -Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        secondMax = max;
        max = arr[i];
      } else if (arr[i] > secondMax && arr[i] < max) {
        secondMax = arr[i];
      }
    }
  
    return secondMax;
  }
  
  console.log("Giá trị lớn thứ hai trong mảng là: " + result);
  