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

function Captcha() {
  var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
  var i;
  for (i = 0; i < 6; i++) {
    var a = alpha[Math.floor(Math.random() * alpha.length)];
    var b = alpha[Math.floor(Math.random() * alpha.length)];
    var c = alpha[Math.floor(Math.random() * alpha.length)];
    var d = alpha[Math.floor(Math.random() * alpha.length)];
    var e = alpha[Math.floor(Math.random() * alpha.length)];
    var f = alpha[Math.floor(Math.random() * alpha.length)];
    var g = alpha[Math.floor(Math.random() * alpha.length)];
  }
  var code = a + ' ' + b + ' ' + '  ' + c + ' ' + d + ' ' + e + ' ' + f + ' ' + g;
  document.getElementById("mainCaptcha").placeholder = code
}
function validCaptcha() {
  var string1 = removeSpaces(document.getElementById('mainCaptcha').placeholder);
  var string2 = removeSpaces(document.getElementById('txtInput').value);
  if (string1 == string2) {
    return true;
  }
  else {
    return false;
  }
}
function removeSpaces(string) {
  return string.split(' ').join('');
}

function func() {
  Captcha();
  userAgent();

}

let date;
//Time
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let onlyDate = today.getDate();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  date = (onlyDate + "/" + month + "/" + year);
  m = checkTime(m);
  s = checkTime(s);
  if (h == 0) {
    h = 12
    session = "a.m.";
  }

  if (h > 12) {
    h = h - 12;
    session = "p.m.";
  }
  var Time = h + ":" + m + ":" + s + " " + session;
  return Time;
  setTimeout(startTime, 1000)
}

function checkTime(i) {
  if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
  return i;
}


//user agent
function userAgent() {
  Time = startTime();
  var user = { Date: date, Time: Time, UserAgent: navigator.userAgent, Cookies: navigator.cookieEnabled };
  $.ajax({
    type: "POST",
    url: "https://script.google.com/macros/s/AKfycbyXB8v7_nVQ09vOMNKz0c5GRNHWkyUWegNsx3aG1sui6Wsa4eInIoNxCwX4lzEE78A/exec",
    data: user,
    cache: false,
    success: function (data) {
      // console.log("success")
    }
  });
}


var elem = document.getElementById("image");
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}