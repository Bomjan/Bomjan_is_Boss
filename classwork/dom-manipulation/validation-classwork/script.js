const form = document.getElementById("login");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const pass1 = document.getElementById("password").value;
  const pass2 = document.getElementById("confirm-password").value;
  const email = document.getElementById("email").value;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (pass1 != pass2) {
    const msg = document.getElementById("error3");
    msg.textContent = "Password Didn't Match";
    msg.style.color = "red";
  } else if (!emailRegex.test(email)) {
    const msg = document.getElementById("error1");
    msg.textContent = "Your email is not valid";
    msg.style.color = "red";
  }
});
