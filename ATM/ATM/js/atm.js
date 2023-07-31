function Person(fullName, pin, balance) {
    this.fullName = fullName;
    this.pin = pin;
    this.balance = balance;
  }
  
  const Cust1 = new Person("Hagai Gur", 5025, "1500");
  const Cust2 = new Person("Avi Cohen", 5656, "1000");
  const Cust3 = new Person("Yehuda Zvi", 2122, "1800");


function welcome() {
  var image = document.getElementById('image');
  card.style.animationName = 'example';

  content.innerHTML = '<form><h2>WELCOME, ' + Cust1.fullName + '<br> PLEASE ENTER YOUR PIN.</h2><input id="pinInput" type="number" max="9999">';

  const enterButton = document.getElementById('enter');
  enterButton.addEventListener('click', function () {
      const pinEntered = document.getElementById('pinInput').value;
      checkPin(pinEntered);
  });
}

function checkPin(pinEntered) {
  const pinEnteredNumber = parseInt(pinEntered, 10);

  // .screen p { was added in the CSS file
  if (Cust1.pin === pinEnteredNumber) {
    content.innerHTML = `<h2>ATM MENU:</h2>
    <p>Press button d to Deposit Money</p>
    <p>Press button w to Withdraw Money</p>
    <p>Press button c to Check your Balance</p>
    <p>Press button q to Quit</p>
`
  } else {
    content.innerHTML = `<p>Incorrect PIN. Please try again</p>`;
  }
}


function deposit() {
  content.innerHTML = `<h2>How much would you like to Deposit?</h2> </h2><input id="depositInput" type="number" max="9999">`;
}

const opbut1 = document.getElementById('opbut1');
opbut1.addEventListener('click', deposit);

function withdraw() {
  content.innerHTML = `<h2>How much would you like to withdraw?</h2> 
    <p>1 - 50</p>
    <p>2 - 100</p>
    <p>3 - 150</p>
    <p>4 - 300</p>
    <p>5 - Other</p>
    `;
}

const opbut2 = document.getElementById('opbut2');
opbut2.addEventListener('click', withdraw);

function showBalance() {
  content.innerHTML = '<h2>Your current balance is '+ Cust1.balance + ' NIS </h2>' ;
}

const opbut3 = document.getElementById('opbut3');
opbut3.addEventListener('click', showBalance);

function quit() {
  content.innerHTML = '<h2>Goodbye, Have a nice day</h2>' ;
}

const opbut6 = document.getElementById('opbut6');
opbut6.addEventListener('click', quit);


welcome();

checkPin(pinEntered);