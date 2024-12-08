import iziToast from 'izitoast';

const form = document.querySelector('.form');

function callFullfilledMessage(value) {
  iziToast.success({
    message: value,
    position: 'topRight',
  });
}

function callRejectedMessage(value) {
  iziToast.error({
    message: value,
    position: 'topRight',
  });
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const target = event.target;
  const inputs = target.elements;
  const delay = inputs['delay'].value;
  const state = inputs['state'].value;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      state === 'fulfilled'
        ? resolve(`Fulfilled promise in ${delay}ms`)
        : reject(`Rejected promise in ${delay}ms`);
    }, delay);
  });
  promise.then(callFullfilledMessage).catch(callRejectedMessage);
});
