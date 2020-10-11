const eye = document.getElementById("eye");
const pass = document.getElementById("password");
const btn = document.getElementById("btn");
const form = document.getElementById("form");
var note = document.querySelector(".note");
var messages = "";

//  SHOW / HIDE PASSWORD//

eye.addEventListener("click", function toggleEye() {
  var hideEye = document.getElementById("fa-eye-slash");
  var showEye = document.getElementById("fa-eye");

  if (pass.type == "password") {
    pass.setAttribute("type", "text");
    hideEye.style.display = "block";
    showEye.style.display = "none";
  } else {
    pass.setAttribute("type", "password");
    hideEye.style.display = "none";
    showEye.style.display = "block";
  }
});

//DISPLAY NOTIFICATION AND SUBMIT//

pass.onkeyup = function updateInput(e) {
  var notifications = [];
  notifications.push(symbol(e));
  notifications.push(num(e));
  notifications.push(upperCase(e));
  notifications.push(lowerCase(e));
  notifications.push(passLength(e));
  note.innerHTML = "";
  notifications.forEach((notification) => {
    if (notification == null) return;
    messages = document.createElement("div");
    messages.innerHTML = notification.message;
    note.appendChild(messages);
  });
};

function passLength(e) {
  if (pass.value.length == 0) {
    return {
      message: "Enter a Password",
    };
  } else if (pass.value.length <= 6) {
    return {
      message: "Password must be longer than 6",
    };
  }
}

function num(e) {
  if (pass.value.search(/[0-9]/) == -1) {
    return {
      message: "Password must have a number",
    };
  }
}

function upperCase(e) {
  if (pass.value.search(/[A-Z]/) == -1) {
    return {
      message: "Password must have a upperCase",
    };
  }
}

function lowerCase(e) {
  if (pass.value.search(/[a-z]/) == -1) {
    return {
      message: "Password must have a lowerCase",
    };
  }
}

function symbol(e) {
  if (pass.value.search(/[!@#$%^&*?]/) == -1) {
    return {
      message: "Password must have a symbol",
    };
  }
}

//CHANGE LOGIN / SIGN UP FORM//

function toggleForm() {
  var body = document.querySelector("body");
  body.classList.toggle("active");
}
