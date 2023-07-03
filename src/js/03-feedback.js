
import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");

const LOCALSTORAGE_KEY = "feedback-form-state";

updateOutput();
form.addEventListener('input', throttle(saveMessage, 500));
form.addEventListener("submit", formSubmit);

const savedSettings = localStorage.getItem(LOCALSTORAGE_KEY);
const parsedSettings = JSON.parse(savedSettings);

function saveMessage(evt) {
  const formElements = {
        email: form.elements.email.value,
        message: form.elements.message.value,
      }
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formElements));
  updateOutput();
}

function updateOutput() {
  // const savedSettings = localStorage.getItem(LOCALSTORAGE_KEY);
  // const parsedSettings = JSON.parse(savedSettings);
  if (parsedSettings) {
    form.elements.email.value = parsedSettings.email || "";
    form.elements.message.value = parsedSettings.message || "";
  }
}

function formSubmit(evt) {
    evt.preventDefault();
    console.log({ email: form.elements.email.value, message: form.elements.message.value });
    localStorage.removeItem(LOCALSTORAGE_KEY);
    form.reset();
  }

