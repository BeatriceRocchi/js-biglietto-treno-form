//Buttons
const btnGenerator = document.querySelector(".btn_generator");
const btnReset = document.querySelector(".btn_reset");

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
let typeMessage;

btnGenerator.addEventListener("click", function (event) {
  event.preventDefault();

  if (
    NameInput.value === "" ||
    kmInput.value === "" ||
    ageSelected.value === "Seleziona la fascia d'età"
  ) {
    alert("Attenzione: per proseguire, è necessario compilare tutti i campi!");
  } else if (isNaN(kmInput.value) || kmInput.value <= 0) {
    alert(
      "Attenzione: per proseguire, è necessario inserire un numero valido all'interno del campo 'km da percorrere'"
    );
  } else {
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
    } else {
      typeMessage = "Biglietto standard";
    }

    console.log("Prezzo scontato: ", price);

    nameTicket.innerHTML = NameInput.value;
    typeTicket.innerHTML = typeMessage;
    cabNumber.innerHTML = Math.floor(Math.random() * 20) + 1;
    cpCode.innerHTML = Math.floor(Math.random() * 90000) + 10000;
    priceTicket.innerHTML = `${price.toFixed(2)} €`;

    ticketSection.classList.remove("d-none");
  }
});

btnReset.addEventListener("click", function () {
  ticketSection.classList.add("d-none");
});
