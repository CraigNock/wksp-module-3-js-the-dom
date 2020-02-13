

// //CLOCK

let timePull = new Date();

console.log(timePull);
let currentTime = document.querySelector('#currentTime');
currentTime.innerText = `${timePull}`;

let timeRefresh = setInterval(function() {
    timePull = new Date();
    currentTime.innerText = `${timePull}`;
}, 1000);


