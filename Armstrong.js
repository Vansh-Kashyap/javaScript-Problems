

  const arm = (num)=>{
      let string =num+"";
      let array = string.split("").map((data)=>{
          return parseInt(data)
      });
      const number= array.map((data)=>{
          return Math.pow(data,array.length)
      })
     const finalOutput = (number.reduce((a,b)=> a+b ))
     if(finalOutput==num){
         console.log("Armstrong number")
     }
     else{
         console.log("Not an armstrong number")
      }
  }
  arm(153);