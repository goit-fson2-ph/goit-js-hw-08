// // Add imports above this line
// import throttle from 'lodash/throttle';

// // Change code below this line
// const form = document.querySelector('.feedback-form');

// // Track input event and save field values to local storage
// form.addEventListener('input', throttle(() => {
//     const formData = {
//     email: form.elements.email.value,
//     message: form.elements.message.value,
// };
//     localStorage.setItem('feedback-form-state', JSON.stringify(formData));
// }, 500));

// // Check local storage for saved data and fill in form fields
// const savedData = localStorage.getItem('feedback-form-state');
// if (savedData) {
//     const parsedData = JSON.parse(savedData);
//     form.elements.email.value = parsedData.email;
//     form.elements.message.value = parsedData.message;
// }

// // Handle form submission
// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//   // ... existing submission logic ...

//   // Clear storage and form fields
//     localStorage.removeItem('feedback-form-state');
//     form.reset();

//   // Display the object with the email and message fields in the console
//     console.log('Form data submitted:', {
//     email: parsedData.email,
//     message: parsedData.message,
// });
// });



import throttle from 'lodash.throttle';

const inputEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');
const formEl = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

let formData = {};

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

populateForm();

function onFormSubmit(ev) {
  ev.preventDefault();

  if (textareaEl.value === '' || inputEl.value === '') {
    return alert('Заповніть всі поля');
  }

  console.log(formData);

  ev.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}
function onFormInput(ev) {
  formData[ev.target.name] = ev.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedData.email) {
    inputEl.value = savedData.email;
    formData.email = savedData.email;
  }

  if (savedData.message) {
    textareaEl.value = savedData.message;
    formData.message = savedData.message;
  }
}