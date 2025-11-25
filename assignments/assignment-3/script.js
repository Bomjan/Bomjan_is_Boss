const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();
  // TODO: doing it manually

  const data = [username.value, email.value, password.value];
  data.forEach((inp) => {
    if (!inp) {
      alert("Validation Failed");
    }
  });
});

username.addEventListener("keydown", () => {
  if (username.value.length <= 3) {
    usernameError.className = "error";
    usernameError.textContent = "Minimum of 3 letters";
  } else {
    usernameError.textContent = "";
  }
});
const usernameError = document.createElement("span");

username.after(usernameError);
