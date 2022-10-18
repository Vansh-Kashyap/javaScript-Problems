const binarySearch=(array, key)=>{
  
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (array[middle] === key) {

            return middle;
        } else if (array[middle] < key) {

            start = middle + 1;
        } else {

            end = middle - 1;
        }
    }

    return "not found";
}
 let array = [1,2,3,4,5,6,7]
console.log(binarySearch(array,6))