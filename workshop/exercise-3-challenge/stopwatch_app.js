// //STOPWATCH
const stopButton = document.querySelector('#stopButton');

const watchMin = document.querySelector('#watchMin');
watchMin.innerText = '00';
const watchSec = document.querySelector('#watchSec');
watchSec.innerText = '00';

let onOff = 0
let onCount = 0
let minCount = 0
let secCount = 0

function count() {
    onOff += 1;
    console.log(onOff);
};

function countMin() {
    watchMin.innerText = `${parseInt(watchMin.innerText) + 1}`
};

function countSec() {
    watchSec.innerText = `${parseInt(watchSec.innerText) + 1}`
};

function watchStart(e) {
    // console.log('aaaaa' + onOff);
    if (onOff === 0) {
        onCount = setInterval(count,1000);
        minCount = setInterval(countMin, 60000);
        secCount = setInterval(countSec, 1000);
    } else {
        clearInterval(onCount);
        clearInterval(secCount);
        clearInterval(minCount);
        onOff = 0;
        
    };
};

stopButton.addEventListener('click', watchStart)