const nameRegEx = /[A-Za-z]{2,10}/;
const zipRegEx = /[0-9]{5}(\-[0-9]{4})?/;
const emailRegEx = /^[^\._\-0-9][a-zA-Z0-9_\.-]{2,}@[a-zA-Z]{2,}\.[a-z]{2,5}/;
const phoneRegEx = /\(?\d{3}\)?[\s-\.]?\d{3}[\s-\.]?\d{4}/;

function validate(e, regEx) {
  const inputElement = e.target;
  const value = inputElement.value;
  const foundMatch = regEx.test(value);
  if (!foundMatch) {
      inputElement.classList.add('is-invalid');
      return;
  }
  inputElement.classList.remove('is-invalid');
}

document.getElementById('name').addEventListener("blur", (e) => validate(e, nameRegEx));
document.getElementById('zipcode').addEventListener("blur", e => validate(e, zipRegEx));
document.getElementById('email').addEventListener("blur", e => validate(e, emailRegEx));
document.getElementById('phone-number').addEventListener("blur", e => validate(e, phoneRegEx));
