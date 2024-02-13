let billettListe = [];

function KjopB() {
const film = document.getElementById("film").value;
const antall = document.getElementById("antall").value;
const fornavn = document.getElementById("fornavn").value;
const etternavn = document.getElementById("etternavn").value;
const telefonnr = document.getElementById("telefonnr").value;
const epost = document.getElementById("epost").value;

if (!film || !antall || !fornavn || !etternavn || !telefonnr || !epost) {
alert("Du må fylle ut alle felt for å kjøpe billett.");
return;
}

const billett = {
film,
antall,
fornavn,
etternavn,
telefonnr,
epost
};

billettListe.push(billett);
visBilletter();
nullstillInput();
}

function visBilletter() {
const billettListeElement = document.getElementById("billettListe");
billettListeElement.innerHTML = "";


//FIKS
for (let i = 0; i < billettListe.length; i++) {
const billettElement = document.createElement("li");
const billett = billettListe[i];
billettElement.textContent = `${billett.film} - ${billett.antall} billetter - ${billett.fornavn} ${billett.etternavn}`;
billettListeElement.appendChild(billettElement);

}
}

function slettB() {
billettListe = [];
visBilletter();
}
function nullstillInput() {
document.getElementById("film").value = "";
document.getElementById("antall").value = "";
document.getElementById("fornavn").value = "";
document.getElementById("etternavn").value = "";
document.getElementById("telefonnr").value = "";
document.getElementById("epost").value = "";
}
