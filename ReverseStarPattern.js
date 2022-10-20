let n = 0; 

let string = "";

for(let i = 5; i > n; i--) { 
  for(let j = 0; j < i; j++) { 
    string += "*";
  
  }
  
  string += "\n";
}

console.log(string);