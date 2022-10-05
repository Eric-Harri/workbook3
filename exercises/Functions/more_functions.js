function displayMailingLabel(name, address, city, state, zip) {
  console.log(name);
  console.log(address);
  console.log(city, ",", state, ",", zip);
}

displayMailingLabel(
  "Eric Harris",
  "4929 Heritage Crossing",
  "Powder Springs",
  "Georgia",
  "30127"
);

function addNumbers(num1, num2) {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
}
addNumbers(2, 2);

addNumbers(700, -22);

function displayReceipt(totalDue, amountPaid) {
  console.log(`Total Due: $${totalDue}
    Amount Paid: $${amountPaid}
    Change Due: $${Math.abs(amountPaid - totalDue)}`);
  
  if (amountPaid < totalDue) {
    console.log(`You owe $${Math.abs(amountPaid - totalDue)}`)
  }
}
displayReceipt(26, 23); 