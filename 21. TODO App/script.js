function addItem() {
     let inputItem = document.getElementById("inputItem").value;
     let text = document.createTextNode(inputItem);
     let li = document.createElement("li");
     li.appendChild(text);
     document.getElementById("list").appendChild(li);
   }
   

