function countdownFor() {
    console.log("Odliczanie sylwestrowe (for):");
    for (let i = 10; i > 0; i--) {
      console.log(i);
      sleep(1000);
    }
    console.log("Happy New Year!");
  }
  
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  countdownFor();


function countdownWhile() {
    console.log("Odliczanie sylwestrowe (while):");
    let countdown = 10;
    while (countdown > 0) {
      console.log(countdown);
      countdown--;
      sleep(1000); 
    }
    console.log("Happy New Year!");
  }
  
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  countdownWhile();

  function silniaFor(n) {
    if (n < 0) {
      return "Silnia jest zdefiniowana tylko dla liczb nieujemnych.";
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  const liczba = 5;
  const wynikFor = silniaFor(liczba);
  console.log(`Silnia ${liczba}! = ${wynikFor}`);

  function checkAge() {
    const age = parseInt(prompt("Please enter your age:", "18"));
  
    if (isNaN(age) || age < 0) {
      alert("Invalid age! Please enter a valid number.");
      checkAge(); 
      return;
    }
  
    if (age >= 18) {
      console.log("User is 18 or older. Proceeding to the site...");
    } else {
      console.log("User is under 18. Redirecting to children's site...");
      window.location.href = "https://www.wikipedia.org/";
    }
  }
  
  window.onload = checkAge;


  const buttons = document.querySelectorAll('button');
  const toggleButton = document.getElementById('toggleButton');
  const elementToToggle = document.getElementById('elementToToggle');
  
  buttons.forEach(button => {
    button.addEventListener('click', () => {

      buttons.forEach(btn => {
        btn.style.backgroundColor = '';
      });
  
      button.style.backgroundColor = '#f8d7da';
  
      elementToToggle.style.display = 'none';
    });
  });
  
  toggleButton.addEventListener('click', () => {

    if (elementToToggle.style.display === 'none') {
      elementToToggle.style.display = 'block';
    } else {
      elementToToggle.style.display = 'none';
    }
  });
  
  const addItemButton = document.getElementById('addItemButton');
  const itemInput = document.getElementById('itemInput');
  const itemList = document.getElementById('itemList');
  
  addItemButton.addEventListener('click', () => {
    const newItemText = itemInput.value.trim();
  
    if (newItemText !== '') {
      const newItem = document.createElement('li');
      newItem.textContent = newItemText;
      itemList.appendChild(newItem);
      itemInput.value = '';
    } else {
      alert('Please enter a valid item.');
    }
  });


const addPersonButton = document.getElementById('addPersonButton');
const firstNameInput = document.getElementById('firstNameInput');
const lastNameInput = document.getElementById('lastNameInput');
const peopleTableBody = document.getElementById('peopleTableBody');


addPersonButton.addEventListener('click', () => {

  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();


  if (firstName === '' || lastName === '') {
    alert('Proszę wprowadzić imię i nazwisko.');
    return;
  }


  const newRow = document.createElement('tr');
  

  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = firstName;
  
  const lastNameCell = document.createElement('td');
  lastNameCell.textContent = lastName;
  

  newRow.appendChild(firstNameCell);
  newRow.appendChild(lastNameCell);
  

  peopleTableBody.appendChild(newRow);

  firstNameInput.value = '';
  lastNameInput.value = '';
});

function convertToCelsius() {
    let celsiusInput = document.getElementById("celsius").value;
    if (celsiusInput === "") {
      alert("Proszę wprowadzić temperaturę w stopniach Celsjusza.");
      return;
    }
  
    let celsius = parseFloat(celsiusInput);
    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("celsiusResult").innerHTML = celsius + " °C to " + fahrenheit.toFixed(2) + " °F";
  }
  
  function convertToFahrenheit() {
    let fahrenheitInput = document.getElementById("fahrenheit").value;
    if (fahrenheitInput === "") {
      alert("Proszę wprowadzić temperaturę w stopniach Fahrenheita.");
      return;
    }
  
    let fahrenheit = parseFloat(fahrenheitInput);
    let celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("fahrenheitResult").innerHTML = fahrenheit + " °F to " + celsius.toFixed(2) + " °C";
  }
  
  function calculateGCD() {
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
  
    if (number1 === "" || number2 === "") {
      alert("Proszę wprowadzić dwie liczby całkowite.");
      return;
    }
  

    number1 = parseInt(number1);
    number2 = parseInt(number2);
  

    let gcd = calculateGCDHelper(number1, number2);
  

    document.getElementById("result").innerHTML = "Największy Wspólny Dzielnik (" + number1 + ", " + number2 + ") = " + gcd;
  }
  
  function calculateGCDHelper(a, b) {

    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return Math.abs(a); 
  }

let result = document.getElementById("result");
let expression = "";

function appendToResult(value) {
  expression += value;
  result.value = expression;
}

function appendOperator(operator) {
  if (expression !== "" && !isNaN(expression[expression.length - 1])) {
    expression += operator;
    result.value = expression;
  }
}

function clearResult() {
  expression = "";
  result.value = "";
}

function calculateResult() {
  if (expression !== "") {
    try {
      let calculatedResult = eval(expression);
      result.value = calculatedResult;
      expression = String(calculatedResult);
    } catch (error) {
      result.value = "Error";
    }
  }
} 