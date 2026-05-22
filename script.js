let total = 0;

function addToOrder(name, price, inputId){

  let quantity = document.getElementById(inputId).value;

  if(quantity == "" || quantity <= 0){
    alert("Enter quantity");
    return;
  }

  total += price * quantity;

  let orderList = document.getElementById("orderList");

  orderList.innerHTML += `

    <div class="order-item">
      <h3>${name}</h3>
      <div class="qty">Qty: ${quantity}</div>
    </div>

  `;

  document.getElementById("total").innerHTML =
  `Total: ${total} PHP`;

  document.getElementById(inputId).value = "";
}

function payNow(){

  let payment = document.getElementById("payment").value;

  if(payment < total){
    alert("Payment is not enough");
    return;
  }

  let change = payment - total;

  alert("Payment Successful! Change: " + change + " PHP");

  document.getElementById("orderList").innerHTML = "";

  document.getElementById("total").innerHTML =
  "Total: 0 PHP";

  document.getElementById("payment").value = "";

  total = 0;
}

function searchMenu(){

  let input = document.getElementById("searchBar").value.toLowerCase();

  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {

    let foodName = card.querySelector(".food-name").innerText.toLowerCase();

    if(foodName.includes(input)){
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }

  });

}