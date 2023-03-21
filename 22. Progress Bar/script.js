window.addEventListener("scroll", Scroll());

function Scroll() {
     let scrollTop = window.scrollY;
     let docHeight = document.body.clientHeight - window.innerHeight;
     let scrollPercent = (scrollTop / docHeight) * 100;
   
     let progressBar = document.getElementById("progress-bar");
     progressBar.style.width = scrollPercent + "%";
     setTimeout(function(){
      location.reload();
    }, 2000);
    
   }
