const form = document.getElementById("form");

const voornaam = document.getElementById("Voornaam");
const naam = document.getElementById("Naam");
const gebruikersnaam = document.getElementById("Gebruikersnaam");
const email = document.getElementById("E-mailadres");
const wachtwoord = document.getElementById("Wachtwoord");
const herhaalWachtwoord = document.getElementById("Herhaal_Wachtwoord");
const adres = document.getElementById("Adres");
const land = document.getElementById("Land");
const provincie = document.getElementById("Provincie");
const postcode = document.getElementById("Postcode");
const Hoogte = document.getElementById("Inschrijven_Nieuwsbrief");
const algemeneVoorwaarden = document.getElementById("Algemene_Voorwaarden");

const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const errors = validatieForm();
    if (errors != null) {
        errorElement.innerHTML = '<div style="background-color: #F7D7DA; color: #60252B; padding: 15px;"><h4>Yikes, errors..</h4>' + errors + '</div>';
    } else {
        errorElement.innerHTML = '<div style="background-color: #D5ECDC; color: #264D30; padding: 15px; margin-bottom: 5px;"><h4>Goed gedaan!</h4><p>Aww yeah, je werd geregustreerd.</p></div>'
        errorElement.innerHTML += '<div style="background-color: #D1EDF1; color: #154553; padding: 15px;"><h4>Betalingswijze</h4>' + validatePayment() + '</div>'
    }
});

function validatieForm() {
    const errors = [];

    const voornaamValue = voornaam.value.trim();
    const naamValue = naam.value.trim();
    const gebruikersnaamValue = gebruikersnaam.value.trim();
    const emailValue = email.value.trim();
    const wachtwoordValue = wachtwoord.value.trim();
    const herhaalWachtwoordValue = herhaalWachtwoord.value.trim();
    const adresValue = adres.value.trim();
    const landValue = land.value.trim();
    const provincieValue = provincie.value.trim();
    const postcodeValue = postcode.value.trim();

    errors.push(
        checkEmptyField(voornaamValue, "Het veld voornaam is vereist."),
        checkEmptyField(naamValue, "Het veld naam is vereist."),
        checkEmptyField(gebruikersnaamValue, "Het veld gebruikersnaam is vereist."),
        checkEmptyField(adresValue, "Het veld adres is vereist."),
        checkEmptyField(landValue, "Het veld land is vereist."),
        checkEmptyField(provincieValue, "Het veld provincie is vereist."),
        checkEmptyField(wachtwoordValue, "Het veld wachtwoord is vereist."),
        checkEmptyField(
            herhaalWachtwoordValue,
            "Het veld herhaal wachtwoord is vereist."
        ),
        checkEmptyField(emailValue, "Het veld E-mailadres is vereist."),
        checkEmptyField(postcodeValue, "Het veld postcode is vereist.")
    );

    if (validateEmail(emailValue)) {
        errors.push("E-mailadres is niet correct. <br>");
    }

    if (wachtwoordValue.length < 7) {
        errors.push("Wachtwoord is niet lang genoeg. <br>");
    }

    if (wachtwoordValue !== herhaalWachtwoordValue) {
        errors.push("Wachtwoord en herhaal wachtwoord komen niet overeen. <br>");
    }
    parseInt(postcodeValue)
    if (parseInt(postcodeValue) >= 1000 && parseInt(postcodeValue) < 10000) {
        return;
    } else {
        errors.push("De waarde van postcode moet tussen 1000 en 9999 liggen. <br>");
    }
    if (document.getElementById("Algemene_Voorwaarden").checked) {

    } else {
        errors.push("Algemene voorwaarden moeten aangeduid zijn! <br>");
    }
    return errors;
}

function checkEmptyField(veld, melding) {
    if (veld === "" || veld == "Kies een land" || veld == "Kies een provincie") {
        return melding + "<br>";
    }
}

function validateEmail(mailadres) {
    const mail = mailadres.split("@");
    const letter = mail[0].charAt(0);
    if (mail[0].length <= 0) {
        return true;
    }
    return false;
}

function checkPC(veld) {

}

function validatePayment() {
    if (document.getElementById("Banking_App").checked) {
        return "Banking app";
    } else if (document.getElementById("Overschrijving").checked) {
        return "Overschrijving";
    } else if (document.getElementById("Visa").checked) {
        return "Visa";
    } else if (document.getElementById("Paypal").checked) {
        return "Paypal";
    }
}