const userPassword = document.querySelector("#user-password");
const repeatPassword = document.querySelector("#repeat-password");
const message = document.querySelector(".message");
const passInput = document.querySelectorAll(".error");
console.log(userPassword.value);

repeatPassword.addEventListener("input", (e) => {
  if (userPassword.value === "" || repeatPassword.value === "") {
    message.style.display = "block";
    message.textContent = "Please enter password";
  } else if (userPassword.value !== repeatPassword.value) {
    userPassword.style.border = "2px solid red";
    repeatPassword.style.border = "2px solid red";
    message.style.display = "block";
  } else {
    message.style.display = "block";
    userPassword.style.border = "2px solid green";
    repeatPassword.style.border = "2px solid green";
    message.style.color = "green";
    message.textContent = "*Password match";
  }
});
