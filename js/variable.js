const siteName = "Incognito Lab";
const email = "incognitolab@gmail.com";
const address = "NA";
const phone = "+852";

const siteName_elements = document.querySelectorAll("#siteName");
siteName_elements.forEach(element => {
    element.innerHTML = siteName;
});

const email_elements = document.querySelectorAll("#email");
email_elements.forEach(element => {
    element.innerHTML = email;
});

const address_elements = document.querySelectorAll("#address");
address_elements.forEach(element => {
    element.innerHTML = address;
});

const phone_elements = document.querySelectorAll("#phone");
phone_elements.forEach(element => {
    element.innerHTML = phone;
});