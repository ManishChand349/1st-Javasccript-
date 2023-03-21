function countVowels(name) {
     let vowels = "aeiouAEIOU";
     let count = 0;
     for (let i = 0; i < name.length; i++) {
       if (vowels.indexOf(name[i]) !== -1) {
         count++;
       }
     }
     return count;
   }
   
   // Example usage
   let name = "Manish";
   let numVowels = countVowels(name);
   console.log("Number of vowels in " + name + " is " + numVowels);

   