
          //Перевірка правильності заповнення полів форми.
//---Початок функції---

const getId = id => document.getElementById(id);

let firstNameRegExp = /^[A-Za-z]{1,20}$/;
let lastNameRegExp = /^[A-Za-z]{1,20}$/;
let emailRegExp = /[A-Za-z0-9-._]+@[A-Za-z]+\.[A-Za-z]+/;
let passRegExp = /^\w{8,15}$/;

document.forms[0].addEventListener('input', () => {
  let testFirst = firstNameRegExp.test(getId('first_name').value);
  let testLast = lastNameRegExp.test(getId('last_name').value);
  let testEmail = emailRegExp.test(getId('email').value);
  let testPass = passRegExp.test(getId('pass').value);

  if (testFirst && testLast && testEmail && testPass && check.checked) {
    signButton.disabled = false;
    signButton.style.backgroundColor = '#0076FF';
  } else {
    signButton.disabled = true;
    signButton.style.backgroundColor = '#4DA2FB';
  }
});
//---Кінець функції---Перевірки правильності заповнення полів форми.

          //-------------
          //Стилізація інпутів при введенні даних.
          //---Початок функції---

const input = document.querySelectorAll('.input');
const modalText = document.querySelectorAll('.modal__box');
const inputX = document.querySelectorAll('.input-x');
const inputOk = document.querySelectorAll('.input-ok');

// Замість циклу for можна використати --- forEach((inputElement, i) => {}
// input.forEach((inputElement, i) => {}
//--------------------------------------------------------------------------------
for (let i = 0; i < input.length; i++) {
  input[i].addEventListener('focus', () => {
    input[i].style.boxShadow = '#B7D5F4 0 0 0.1vw 0.1vw';
  });

  input[i].addEventListener('blur', () => {
    input[i].style.boxShadow = '';
  });

  input[i].addEventListener('input', function () {
    let testValue;
    switch (this.id) {
      case 'first_name':
        testValue = firstNameRegExp.test(this.value);
        break;
      case 'last_name':
        testValue = lastNameRegExp.test(this.value);
        break;
      case 'email':
        testValue = emailRegExp.test(this.value);
        break;
      case 'pass':
        testValue = passRegExp.test(this.value);
        break;
      default:
        testValue = false;
    }

    if (testValue) {
      this.style.border = '3px solid green';
      modalText[i].style.display = 'none';
      inputX[i].style.display = 'none';
      inputOk[i].style.display = 'block';
    }
    else {
      this.style.border = '3px solid red';
      modalText[i].style.display = 'block';
      inputX[i].style.display = 'block';
      inputOk[i].style.display = 'none';
    }
  });
}
//---Кінець функції---Стилізації інпутів при введенні данич.

//-------------
          //Відкривання модального вікна.
//---Початок функції---

let check = getId('check');
let signButton = getId('sign');
let modalBlock = document.querySelector('.modal-block');

signButton.disabled = true;

signButton.addEventListener('click', () => {
  modalBlock.style.display = 'block';
  document.body.style.backgroundColor = '#7A7A7A';
})
//---Кінець функції---Відкривання модального вікна.

//-------------
          //Закривання модального вікна, повернення до форми.
//---Початок функції---

let modalBnt = getId('modal-bnt');

modalBnt.addEventListener('click', () => {
  modalBlock.style.display = 'none';
  document.body.style.backgroundColor = '';
  signButton.disabled = true;
  signButton.style.backgroundColor = '#4DA2FB';
  document.forms[0].reset();
  location.reload();
});
//---Кінець функції---Закривання модального вікна, повернення до форми.