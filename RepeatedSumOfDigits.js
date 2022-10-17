const sum = (number) => {
  convertToString = number + "";

  convertToArray = convertToString.split("").map((data) => {
    return parseInt(data);
  });
  const finalOutput = convertToArray.reduce((a, b) => a + b);

if(finalOutput>9){
    sum(finalOutput)
}
else console.log(finalOutput);
};
sum(1234);
