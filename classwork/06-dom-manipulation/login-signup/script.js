const $ = (id) => document.getElementById(id);

$("login-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const username = $("username").value;
  const password = $("password").value;

  if (!username || !password) {
    $("login-error").textContent = "Please fill up all the fields";
    return;
  }
  let data = JSON.parse(localStorage.getItem("cred"));
  if (!data) {
    $("login-error").textContent = "Data not recorded";
  }
  if (data.username == username && data.password == password) {
    alert("Access Granted");
  }
});

$("go-to-signup").addEventListener("click", () => {
  $("register-form").style.display = "block";
  $("register-msg").style.display = "block";
  $("login-form").style.display = "none";
  $("login-msg").style.display = "none";
});
$("go-to-login").addEventListener("click", () => {
  $("register-form").style.display = "none";
  $("register-msg").style.display = "none";
  $("login-form").style.display = "block";
  $("login-msg").style.display = "block";
});

$("register-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const contact = $("contact").value;
  const pass1 = $("pass1").value;
  const pass2 = $("pass2").value;

  if (pass1 !== pass2) {
    $("register-error").textContent = "Password didn't match";
  } else {
    localStorage.setItem(
      "cred",
      JSON.stringify({ username: contact, password: pass1 })
    );
    alert("Successfully Registered, Thank you using this");
  }
});
