/* 
Part 3:How to implement a  promise-based API
---------------------------------------------------------Notes-----------------------------------------------------------------------------
-We will be using a setTimeout() API to implement the alarm() function
-setTimeout() API receives a callback function and delay in ms.
-When setTimeout is called , a timer is started with a delay , and when it reaches zero, it calls a  function 
- alarm() will return a Promise that is fulfilled when time reaches zero
We are going to add a Promise() constructor , that takes a function as an argument.Called an executor .
 */
/* const output = document.querySelector('#output');   //matches the div
const button = document.querySelector('#set-alarm'); */  //matches the button

/* function setAlarm (){
    setTimeout(()=>{
        output.textContent= 'Wake Up!'
    },1000)
}
button.addEventListener('click',setAlarm); */

/* function alarm(person,delay){                               //function
    return new Promise ((resolve,reject)=>{                 // creates new promise , inside the executor 
        if (delay < 0) {                                    // Checking that delay is nonnegative , and throw an error if it is.
            throw new Error('Alarm delay must not be negative');
          }
          setTimeout(() => {            //passes a callback and delay, resolve will called when the timer expires
            resolve(`Wake up, ${person}!`);
          }, delay);
    })
} */

/* const name = document.querySelector('#name');
const delay = document.querySelector('#delay');
const button = document.querySelector('#set-alarm');
const output = document.querySelector('#output');

function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      throw new Error('Alarm delay must not be negative');
    }
    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}

button.addEventListener('click', () => {
  alarm(name.value, delay.value)
    .then((message) => output.textContent = message)    //set handlers for promise fulfillment
    .catch((error) => output.textContent = `Couldn't set alarm: ${error}`);//set alarm for rejection 
}); */
/* const name = document.querySelector('#name');
const delay = document.querySelector('#delay');
const button = document.querySelector('#set-alarm');
const output = document.querySelector('#output');

function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      throw new Error('Alarm delay must not be negative');
    }
    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}

button.addEventListener('click', async () => {       //using async/wait for this promise 
  try {
    const message = await alarm(name.value, delay.value);
    output.textContent = message;
  }
  catch (error) {
    output.textContent = `Couldn't set alarm: ${error}`;
  }
}); */