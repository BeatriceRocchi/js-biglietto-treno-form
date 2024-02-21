//Buttons
const btnGenerator = document.querySelector(".btn_generator");

//Form variables
const NameInput = document.querySelector(".input-name");
const kmInput = document.querySelector(".input-km");
const ageSelected = document.querySelector(".selected-age");

//Other variables
const priceKm = 0.21;
const discountMinors = 0.2;
const discountOver = 0.4;
const nameTicket = document.querySelector(".name_ticket");
let typeTicket = document.querySelector(".type_ticket");
let priceTicket = document.querySelector(".price_ticket");
let price;
let typeMessage = "Biglietto standard";

btnGenerator.addEventListener("click", function (event) {
  event.preventDefault();

  console.log("Nome utente: ", NameInput.value);
  console.log("Km da percorrere: ", kmInput.value);
  console.log("Fascia di età: ", ageSelected.value);

  price = parseInt(kmInput.value) * priceKm;
  console.log("Prezzo intero: ", price);

  if (ageSelected.value === "userMinor") {
    price -= price * discountMinors;
    typeMessage = "Biglietto Young";
  } else if (ageSelected.value == "userOver") {
    price -= price * discountOver;
    typeMessage = "Biglietto Over";
  }

  console.log("Prezzo scontato: ", price);

  nameTicket.innerHTML = NameInput.value;
  typeTicket.innerHTML = typeMessage;
  priceTicket.innerHTML += " " + price.toFixed(2);
});
