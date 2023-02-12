const userPassword = document.querySelector("#user-password");
const repeatPassword = document.querySelector("#repeat-password");
const message = document.querySelector(".message");
const submitButton = document.querySelector(".account-btn");
const email = document.querySelector("#user-email");

const emailInput = () => {
  if (email) {
  }
};
email.addEventListener("input", emailInput);

repeatPassword.addEventListener("input", () => {
  //userPassword.classList.remove("error");
  //repeatPassword.classList.remove("error");
  if (userPassword.value !== repeatPassword.value) {
    userPassword.classList.add("error");
    repeatPassword.classList.add("error");
    message.style.display = "block";
    return false;
  } else {
    userPassword.classList.add("valid");
    repeatPassword.classList.add("valid");
    message.style.display = "block";
    message.style.color = "green";
    message.textContent = "*Password match";
    return true;
  }
});
