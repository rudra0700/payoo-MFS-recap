document.getElementById("add-money-btn").addEventListener("click", (event) => {
  event.preventDefault();
  const addMoney = getInputFieldValue("add-money-field");
  const pinNumber = getInputFieldValue("pin-input");

  if(isNaN(addMoney)){
    alert("failed to add money");
    return
  }

  if (pinNumber === 1234) {
    const currentBalance = getTextValue("current-balance");
    const newBalance = currentBalance + addMoney;
    document.getElementById("current-balance").innerText = newBalance;

    const p = document.createElement("p");
    p.innerText = `
     Add ${addMoney}Tk. new balance ${newBalance};
    `;
    document.getElementById("transection-container").appendChild(p);
  } else {
    alert("failed to add money");
  }
});
