let n = 6; 
let string = '';
 
//outer line
for(let i =0; i < n  ; i++){
     //printing star
     for(let j =0 ; j < n -i; j++){
          string +="*"
     }
     string +="\n"
}
console.log(string)