document.getElementById("login-btn").addEventListener("click", (event) => {
  event.preventDefault();
  const mobileInput = document.getElementById("mobile-input").value;
  const pinInput = document.getElementById("pin-input").value;

  if (mobileInput === "10" && pinInput === "1234") {
    window.location.href = "home.html";
  } else {
    alert("wrong info");
  }
});
