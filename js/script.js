//Buttons
const btnGenerator = document.querySelector(".btn_generator");

//Form variables
const NameInput = document.getElementById("input-name");
const kmInput = document.getElementById("input-km");
const ageSelected = document.getElementById("selected-age");

//Other variables
const priceKm = 0.21;
const discountMinors = 0.2;
const discountOver = 0.4;
const ticketSection = document.getElementById("ticket-recap");
const nameTicket = document.querySelector(".name_ticket");
let typeTicket = document.querySelector(".type_ticket");
let priceTicket = document.querySelector(".price_ticket");
let cabNumber = document.querySelector(".cab_number");
let cpCode = document.querySelector(".CP_code");
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
  cabNumber.innerHTML = Math.floor(Math.random() * 20) + 1;
  cpCode.innerHTML = Math.floor(Math.random() * 90000) + 10000;
  priceTicket.innerHTML = `${price.toFixed(2)} €`;

  ticketSection.classList.remove("d-none");
});
