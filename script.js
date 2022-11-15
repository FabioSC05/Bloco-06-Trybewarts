const button = document.getElementById('get-button');
const getName = document.getElementById('input-name');
const getLastName = document.getElementById('input-lastname');
const getHouse = document.getElementById('house');
const getEmail = document.getElementById('get-email');
const getPass = document.getElementById('get-pass');
const submit = document.getElementById('submit-btn');
const check = document.getElementById('agreement');
const text = document.getElementById('textarea');
const counter = document.getElementById('counter');
const getForm = document.getElementById('evaluation-form');
const getCheckBoxs = document.getElementsByClassName('checkboxes');
const getScore = document.getElementById('score');
const getEmailForm = document.getElementById('input-email');
const getImage = document.getElementById('trybewarts-forms-logo');

function buttonFormLogin() {
  if (getEmail.value === 'tryber@teste.com' && getPass.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function putStrings(array) {
  let newArray = [];
  for (let i = 0; i < array.length - 1; i += 1) {
    newArray += `${array[i]}, `;
  }
  newArray += array[array.length - 1];
  return newArray;
}

function cathValue(array) {
  const childsCB = array;
  let response = [];
  for (let i = 1; i < childsCB.length; i += 1) {
    if (childsCB[i].firstElementChild.checked === true) {
      response.push(childsCB[i].firstElementChild.value);
    }
  }
  if (response.length > 1) {
    response = putStrings(response);
  }
  return response;
}

function send() {
  if (check.checked === true) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
}

function buttonFormSing(event) {
  event.preventDefault();
  let famiForm = '';
  let subjForm = '';
  let scoreForm = '';

  famiForm = cathValue(getCheckBoxs[0].children);
  subjForm = cathValue(getCheckBoxs[1].children);
  scoreForm = cathValue(getScore.children);

  const formResponse = `<p>Nome: ${getName.value} ${getLastName.value} </p>
  <p>Email: ${getEmailForm.value} </p><p>Casa: ${getHouse.value} </p><p>Família: ${famiForm} </p>
  <p>Matérias: ${subjForm} </p><p>Avaliação: ${scoreForm} </p><p>Observações: ${text.value} </p>`;
  const formData = document.createElement('form');
  formData.id = 'form-data';
  formData.innerHTML = formResponse;
  getImage.parentNode.insertBefore(formData, getImage);
  getForm.style.display = 'none';
}

function tecla() {
  const letras = text.value;
  counter.innerText = 500 - letras.length;
}

window.onload = function load() {
  button.addEventListener('click', buttonFormLogin);
  submit.addEventListener('click', buttonFormSing);
  check.addEventListener('click', send);
  text.addEventListener('keyup', tecla);
};
