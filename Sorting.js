let arr = [6, 7, 3, 4, 9, 2, 5, 1];
//   let sortedArray = arr.sort();               // one method is using a javaScript sort method
//   console.log(sortedArray)

for (i = 0; i < arr.length; i++) {
  for (j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      let temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
  }
}
console.log(arr);
