const navRight = document.querySelector("nav.right");
const overlay = document.querySelector(".overlay");
const humburger = document.querySelector(".humburger");
const body = document.querySelector("body");
const navlinks = document.querySelector(".nav-links");
const lines = document.querySelectorAll(".line");

const remove = () => {
  navRight.classList.remove("open");
  overlay.classList.remove("open");
};
body.addEventListener("click", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  let clicker = document.createElement("div");
  var parentPositionLeft = clicker.getBoundingClientRect().left;
  var parentPositionTop = clicker.getBoundingClientRect().top;

  clicker.style.left = parentPositionLeft + x + "px";
  clicker.style.top = parentPositionTop + y + "px";

  clicker.className += "clicked";
  document.body.appendChild(clicker);

  setTimeout(() => {
    document.body.removeChild(clicker);
  }, 590);
});

// nav

humburger.addEventListener("click", () => {
  navRight.classList.toggle("open");
  overlay.classList.toggle("open");

  navlinks.addEventListener("click", () => {
    remove();
  });
  overlay.addEventListener("click", () => {
    remove();
  });
});

//Captcha

function Captcha(){
  var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
  var i;
  for (i=0;i<6;i++){
    var a = alpha[Math.floor(Math.random() * alpha.length)];
    var b = alpha[Math.floor(Math.random() * alpha.length)];
    var c = alpha[Math.floor(Math.random() * alpha.length)];
    var d = alpha[Math.floor(Math.random() * alpha.length)];
    var e = alpha[Math.floor(Math.random() * alpha.length)];
    var f = alpha[Math.floor(Math.random() * alpha.length)];
    var g = alpha[Math.floor(Math.random() * alpha.length)];
   }
 var code = a + ' ' + b + ' ' + '  '+ c + ' ' + d + ' ' + e + ' '+f + ' ' + g;
 document.getElementById("mainCaptcha").placeholder = code
}
function ValidCaptcha(){
   var string1 = removeSpaces(document.getElementById('mainCaptcha').placeholder);
   var string2 = removeSpaces(document.getElementById('txtInput').value);
   if (string1 == string2){
     return true ,"Message sent succesfully";
   }
   else{        
     return "Entered Captcha is wrong";
   }
}
function removeSpaces(string){
 return string.split(' ').join('');
}
