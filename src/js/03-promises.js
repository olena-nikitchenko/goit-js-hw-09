import Notiflix from 'notiflix';

const form = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}


form.addEventListener('submit', (e) => {
 e.preventDefault(); 
  const delay = parseInt(form.elements.delay.value); 
  const step = parseInt(form.elements.step.value); 
  const amount = parseInt(form.elements.amount.value); 
  for (let i = 1; i <= amount; i += 1) {
    let extendedDelay = delay + (i - 1) * step;
    createPromise(i, extendedDelay) 
      .then(({ position, delay }) => {
        // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
         Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);

      });
  }
});



  