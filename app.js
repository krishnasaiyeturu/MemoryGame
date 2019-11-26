function generateOTP() {
  var digits = "0123456789";
  var OTP = "";
  for (let i = 0; i < 6; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  localStorage.setItem("otp", OTP);
  document.getElementById("divID").innerHTML = OTP;
  document.getElementById("redirect").innerHTML =
    "Refreshing the page in 5 seconds...";
  setTimeout(validateOTP, 5000);
}

function validateOTP() {
  window.location.href = "verify.html";
}

function guess() {
  var item = localStorage.getItem("otp");
  var compare = document.getElementById("number").value;
  if (compare.length == 0) {
    alert("enter a number");
  } else {
    var matches = 0;
    d = [...item];
    f = [...compare];
    for (var i = 0; i < d.length; i++) {
      for (var j = 0; j < f.length; j++) {
        if (d[i] == f[j]) {
          f[j] = null;
          matches++;
          break;
        }
      }
    }
    document.getElementById("answer").innerHTML = `${matches} correct guesess `;
  }
}
