const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))


/* 
order of creation and resources 
1- declaring constants variables in JS.
    - https://www.javascripttutorial.net/es6/javascript-const/
2- JS querySelector
    - https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

3- adding an Event listener.
    -https://www.javatpoint.com/javascript-addeventlistener

4- arrow functions
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

*/