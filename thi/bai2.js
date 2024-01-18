let myArray = [1, 2, 3, 4, 5];
let indexToDelete = 2;

function deleteNumberFromArray(arr, index) {
    if (index < 0 || index >= arr.length) {
      console.log("Vị trí index không hợp lệ.");
      return arr; 
    }
  
    const newArray = [...arr];
    newArray.splice(index, 1);
    return newArray;
  }
  let resultArray = deleteNumberFromArray(myArray, indexToDelete);
  console.log("Mảng sau khi xóa phần tử tại vị trí " + indexToDelete + " là:", resultArray);
  