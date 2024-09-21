document.getElementById("cashout-btn").addEventListener("click", (event) => {
  event.preventDefault();

  const cashoutAmount = getInputFieldValue("cashout-field");
  const pinNumber = getInputFieldValue("cashout-pin");

  if (isNaN(cashoutAmount)) {
    alert("failed to add money");
    return;
  }

  if (pinNumber === 1234) {
    const currentBalance = getTextValue("current-balance");
    if (cashoutAmount > currentBalance) {
      alert("you dont have enough balance");
      return;
    }
    const newBalance = currentBalance - cashoutAmount;
    document.getElementById("current-balance").innerText = newBalance;

    const div = document.createElement("div");
    div.classList.add("bg-yellow-400");
    div.classList.add("p-2");
    div.classList.add("text-black");
    div.innerHTML = `
       <h5>cashout</h5>
       <p>${cashoutAmount} withdraw. newbalance ${newBalance}</p>
    `;
    document.getElementById("transection-container").appendChild(div);
  } else {
    alert("failed to cashout");
  }
});
