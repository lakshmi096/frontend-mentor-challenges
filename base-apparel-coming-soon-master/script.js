const form = document.getElementById("form");
const email = document.getElementById("email");
const textSuccess = document.getElementById("text");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (email.value == "" || !validateEmail(email.value)) {
    form.classList.add("form__error");
    textSuccess.innerHTML = "Please provide a valid email";
  } else {
    form.classList.remove("form__error");
    email.value = "";
    textSuccess.innerHTML = "Your response has been recorded. Thankyou!";
    textSuccess.style.visibility = "visible";
  }
});

const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
