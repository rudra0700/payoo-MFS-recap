function getInputFieldValue(id) {
  const inputValue = document.getElementById(id).value;
  return Number(inputValue);
}

function getTextValue(id) {
  const textValue = document.getElementById(id).innerText;
  return parseFloat(textValue);
}

function showSection(id) {
  document.getElementById("add-money-form").classList.add("hidden");
  document.getElementById("cashout-form").classList.add("hidden");
  document.getElementById("transection-form").classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");
}
