const name1 = prompt('Enter Your Name')

function capitalizeName(name) {
     console.log(name.charAt(0).toUpperCase() + (name.slice(1).toLowerCase() === name.slice(1) ? name.slice(1) : ''))
   }
   capitalizeName(name1)