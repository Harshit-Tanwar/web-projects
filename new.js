let n = 5;
let output = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n-i; j++) {
    output += " ";
  }
  for(let k = 1;k <= i;k++){
    output += "#"; 
  }
  output += " ";
  for(let l = 1;l<=i;l++){
    output += "#";
  } 
  output += "\n";
}
console.log(output);
