let arr = [1,1,2,2,4,3,3,6];


const unique = (arr)=>{
   let obj = {};
    for(let i=0; i<arr.length; i++){
        if(obj[arr[i]]){
            obj[arr[i]] += 1;
        }else{
        obj[arr[i]] = 1;
           
        }

    }
  
let res = [];
for(key in obj){
   if(obj[key] == 1){
    res.push(key);
   }
}

return res;
    
}
console.log(unique(arr))
