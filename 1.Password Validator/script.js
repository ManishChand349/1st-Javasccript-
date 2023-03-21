const pass = document.getElementById("new-password");

const passConf = document.getElementById("confirm-password");
const btn = document.getElementById("btn");

function btn1() {
  if ((pass.value.length != 0) & (passConf.value.length != 0)) {
    if ((pass.value.length >= 8) & (passConf.value.length >= 8)) {
      if (pass.value === passConf.value) {
        console.log("Password Matched");
        alert("Password Matched");
      } else {
        console.log("Password didn't match");
        alert("Password didn't match");
      }
    } else {
      alert("minimum 8 characters");
      console.log("minimum 8 characters");
    }
  } else {
    alert("Enter password");
    console.log("Enter password");
  }
}
btn.addEventListener("click", btn1);
