
// 1: Variables & Conditionals

document.getElementById("checkAgeBtn").addEventListener("click", function() {
  let age = prompt("Enter your age:");
  age = Number(age);

  if (age >= 18) {
    document.getElementById("ageResult").textContent = "You are an adult!";
  } else if (age > 0) {
    document.getElementById("ageResult").textContent = "You are still a minor.";
  } else {
    document.getElementById("ageResult").textContent = "Please enter a valid number.";
  }
});


// 2: Functions


// Function 1: calculate total
function calculateTotal(price, quantity) {
  return price * quantity;
}

function showTotal() {
  let total = calculateTotal(100, 3); // Example: 100 x 3
  document.getElementById("totalResult").textContent = "Total is: $" + total;
}

// Function 2: toggle content
function toggleMessage() {
  let text = document.getElementById("toggleText");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}


// 3: Loops


const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

document.getElementById("listFruitsBtn").addEventListener("click", function() {
  let list = document.getElementById("fruitList");
  list.innerHTML = ""; // clear before adding

  // Example: for loop
  for (let i = 0; i < fruits.length; i++) {
    let li = document.createElement("li");
    li.textContent = fruits[i];
    list.appendChild(li);
  }
});

document.getElementById("countdownBtn").addEventListener("click", function() {
  let display = document.getElementById("countdown");
  display.textContent = "";

  // Example: while loop
  let count = 5;
  let timer = setInterval(() => {
    display.textContent = count;
    count--;

    if (count < 0) {
      clearInterval(timer);
      display.textContent = "Off!";
    }
  }, 1000);
});


//  4: DOM Manipulation


document.getElementById("changeTextBtn").addEventListener("click", function() {
  document.getElementById("changeText").textContent = "The text has been changed!";
});

document.getElementById("addItemBtn").addEventListener("click", function() {
  let list = document.getElementById("dynamicList");
  let li = document.createElement("li");
  li.textContent = "New Item " + (list.children.length + 1);
  list.appendChild(li);
});

document.getElementById("colorBtn").addEventListener("click", function() {
  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
});
