const Pwcourse = ["DSA Java", "Full Stack Web Development", "Data Science","C++ DSA"]
    const btn = document.getElementById("btn");
    const list = document.getElementById("list");
    let currentIndex = 0;

    btn.addEventListener("click" , addcourse);

    function addcourse(){
        if(currentIndex < Pwcourse.length){
            const newcourse = document.createElement('li');
            newcourse.textContent = Pwcourse[currentIndex];
            list.appendChild(newcourse);
            currentIndex ++;
        }else{
          alert("all course are added")   
        }
    }