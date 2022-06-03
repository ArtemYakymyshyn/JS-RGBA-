const eyeColor = 'Green / Зелений';
console.log(eyeColor);





// Buttons in constants

const $startbutton = document.querySelector('#startButton');
const $fullStopButton = document.querySelector('#fullStopButton');
const $randomOne = document.querySelector('#randomOne');
const $randomTwo = document.querySelector('#randomTwo');
const $randomThree = document.querySelector('#randomThree')
const $clearButton = document.querySelector('#clearButton');

//

// two indicating parags in constants

const $powerIsOFFText = document.querySelector('#powerIndicator');
const $powerIsOnText = document.querySelector('#powerIsOnText');

//


// working place from html in constants
const $rgbaBox = document.querySelector('.fs-rgbacircle-wrapper');
//

// color palette by Natalien

let colors = ['#e40045', '#37da7e', '#3aa6d0', 'pink', 'brown', 'beige', 'violet', 'lightblue', 'grey', 'orange', 'yellow'];
let colorsTwo = ['red', 'green', 'blue', 'orange'];
//

// variables for work 
let interval;
const rgbaElementsWrapper = document.querySelector('.fs-rgba-circle-elements');
let lampadaColorArray = [];

const $recordElement = document.querySelector('.thl-element-1');
//

// functions for work
const colorPicker = () => {
   let random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

const colorPickerOne = () => {
   let random = Math.floor(Math.random() * colorsTwo.length);
   return colorsTwo[random];
}



const randomPickerOne = (e) => {
   const currentColor = colorPicker();
   $rgbaBox.style.background = currentColor
}

const createLampOne = (e) => {

   let $rgbaElementsLength = document.querySelectorAll('.fs-rgba-circle-element-1')
   if ($rgbaElementsLength.length < 15) {
      let lampada = document.createElement('div');
      lampada.classList.add('fs-rgba-circle-element-1');
      lampada.style.background = colorPicker()
      rgbaElementsWrapper.insertAdjacentElement('beforeend', lampada);
   } else {
      return
   }
}

const createLampTwo = (e) => {

   let $rgbaElementsLength = document.querySelectorAll('.fs-rgba-circle-element-1')
   if ($rgbaElementsLength.length < 13) {
      let lampada = document.createElement('div');
      lampada.classList.add('fs-rgba-circle-element-1');

      lampada.style.background = colorPickerOne()
      let lampadaColor = lampada.style.background;

      for (let i = 0; i < $rgbaElementsLength.length; i++) {
         let rgbaElement = $rgbaElementsLength[i];
         let rgbaElementColor = rgbaElement.getAttribute('style')
         lampadaColorArray.push(rgbaElementColor);
         lampadaColorArrayFilter = lampadaColorArray.filter(function (elem, pos, arr) {
            return pos !== arr.indexOf(elem) || pos !== arr.lastIndexOf(elem);
         });
         console.log(lampadaColorArrayFilter)
      }


      rgbaElementsWrapper.insertAdjacentElement('beforeend', lampada);

   } else {
      return
   }



};

//



$startbutton.addEventListener('click', (e) => {
   // power indicator text change (To be changed in the process!)
   $powerIsOFFText.style.display = 'none'
   $powerIsOnText.style.display = 'block'
   //
   const randomColor = colorPicker()
   $rgbaBox.style.background = randomColor
   $startbutton.setAttribute('disabled', 'true')
   $randomOne.removeAttribute('disabled');
   $randomTwo.removeAttribute('disabled');
   $randomThree.removeAttribute('disabled');
   $clearButton.removeAttribute('disabled');
   $fullStopButton.removeAttribute('disabled')
   const $shownText = document.createElement('p');
   $shownText.textContent = `Start Button has been pressed at: ${new Date().toLocaleTimeString()}`;
   $recordElement.insertAdjacentElement('beforeend', $shownText);
})

$fullStopButton.addEventListener('click', (e) => {
   // power indicator text change (was changed in progress)
   $powerIsOFFText.style.display = 'block'
   $powerIsOnText.style.display = 'none';
   //
   $rgbaBox.style.background = 'white'
   $startbutton.removeAttribute('disabled')
   $randomOne.setAttribute('disabled', 'true');
   $randomTwo.setAttribute('disabled', 'true');
   $randomThree.setAttribute('disabled', 'true')
   $clearButton.setAttribute('disabled', 'true')
   $fullStopButton.setAttribute('disabled', 'true')
   const $shownText = document.createElement('p');
   $shownText.textContent = `АЗ-5 has been pressed at: ${new Date().toLocaleTimeString()}`
   $recordElement.insertAdjacentElement('beforeend', $shownText);
   clearInterval(interval)
   rgbaElementsWrapper.innerHTML = ''
});


$randomOne.addEventListener('click', (e) => {
   rgbaElementsWrapper.innerHTML = ''
   clearInterval(interval)
   interval = setInterval(createLampOne, 300)
   $randomOne.setAttribute('disabled', 'true');
   $rgbaBox.style.background = 'white'
   $randomTwo.removeAttribute('disabled', 'true')
   $clearButton.removeAttribute('disabled')
   const $shownText = document.createElement('p');
   $shownText.textContent = `Random Color type One button has been pressed at: ${new Date().toLocaleTimeString()}`;
   $recordElement.insertAdjacentElement('beforeend', $shownText);
})

$randomTwo.addEventListener('click', (e) => {

   rgbaElementsWrapper.innerHTML = ''
   clearInterval(interval);
   interval = setInterval(createLampTwo, 300)
   $randomOne.removeAttribute('disabled', 'true');
   $randomTwo.setAttribute('disabled', 'true')
   $clearButton.removeAttribute('disabled')
   $rgbaBox.style.background = 'white'

   const $shownText = document.createElement('p');
   $shownText.textContent = `Random Color type Two button has been pressed at: ${new Date().toLocaleTimeString()}`;
   $recordElement.insertAdjacentElement('beforeend', $shownText);
});


$clearButton.addEventListener('click', (e) => {
   clearInterval(interval);
   $randomOne.removeAttribute('disabled', 'true');
   $clearButton.setAttribute('disabled', 'true')
   rgbaElementsWrapper.innerHTML = ''
   $randomTwo.removeAttribute('disabled', 'true');
   $randomThree.removeAttribute('disabled', 'true')
   const $shownText = document.createElement('p');
   $rgbaBox.style.background = colorPicker()
   $shownText.textContent = `All the lamps were stopped at: ${new Date().toLocaleTimeString()}`;
   $recordElement.insertAdjacentElement('beforeend', $shownText);
});

// client => server => database => server => client

