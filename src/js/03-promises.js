import Notiflix from 'notiflix';
const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);

function createPromise(position, delay) { 
    const shouldResolve = Math.random() > 0.3;
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve({position, delay})        
        } else {
          reject({position, delay})
        }
      }, delay)
    }) 
  return promise;
}

function onSubmit(evt) {
  evt.preventDefault();
  const firstDelay = Number(form.elements.delay.value);
  const stepDelay = Number(form.elements.step.value);
  const amountPromise = Number(form.elements.amount.value);
  let del = firstDelay;
  for (let i = 1; i <= amountPromise; i += 1){
    createPromise(i, del)
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
    });
    del += stepDelay;
  }
}

