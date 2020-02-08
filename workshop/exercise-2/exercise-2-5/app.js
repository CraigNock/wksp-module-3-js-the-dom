
const styleLink = document.createElement('link');
styleLink.className = 'css';
styleLink.setAttribute('href', "../assets/styles.css");
styleLink.rel = 'stylesheet';
document.querySelector('head').appendChild(styleLink);

// const stableLink = document.createElement('script');
// stableLink.setAttribute(src, "../assets/frogStable.js");
// document.querySelector('body').insertAdjacentElement('beforebegin', stableLink);


// Preset values
const FROGS = 3;

//CREATES LANES
for (let i=0 ; i<FROGS ; i++){
    const lane = document.createElement('li');
    lane.id = `Lane-${i+1}`;
    // lane.innerText = `Lane#${i+1}`
    const laneLabel = document.createElement('span');
    lane.appendChild(laneLabel);
    
    document.querySelector('#track').appendChild(lane);
};


//CREATES FROGS IN LANES
const racers = [];

for (let i=0 ; i<FROGS ; i++){
    racers.push(frogStable[i]);
    // let randFrog = Math.floor(Math.random() * (10 - frogStable.length) );
    // frogStable.forEach(function(i){
    //     if(frogStable[randFrog] !== racers[randFrog] ){
    //         racers.push(randFrog);
    //     }
    // });

    let froggo = document.createElement('span');
    froggo.innerText = `${racers[i].name}`;
    froggo.className = 'frog';
    froggo.id = `${racers[i].name}`;
    froggo.style.backgroundImage = "url('./frogx50.png')"; 
    froggo.style.transform = 'rotate(90deg)'; //text unfortunately also rotated
    //keeping circle; highlights frogs
    froggo.style.backgroundColor = `${racers[i].color}`; 
    racers[i].progress = 0;
    froggo.style.left = `${racers[i].progress}%`;
    document.querySelector(`#Lane-${i+1}`).appendChild(froggo);
};


//ACTIVES RACE FOR FROG
console.log(racers);
let ranking = [];

function racingFrog(frog) {
    
    let leap = setInterval( function(){
        let hop = Math.floor(Math.random()*11)
        frog.progress += hop;
        let currentFrog = document.querySelector(`#${frog.name}`);
        currentFrog.style.left = `${frog.progress}%`;

        console.log(frog);
        if (frog.progress >= 99) {
        clearInterval(leap);
        console.log(`${frog.name} has finished the race!`);
        ranking.push(`${frog.name}`);
        };
    }, 1000);
    
};

//DISPLAYS RESULTS. 
// *copy/paste later to set up realtime progress reporting in leap interval
let resultDisplay = document.createElement('ul')
document.querySelector('body').appendChild(resultDisplay);
let resultTitle = document.createElement('li')
resultTitle.innerText = 'RESULTS:';
resultTitle.style.listStyleType = 'none';
resultTitle.style.fontWeight = '800';
resultDisplay.appendChild(resultTitle);
let first = document.createElement('li')
resultDisplay.appendChild(first);
let second = document.createElement('li')
resultDisplay.appendChild(second);
let third = document.createElement('li')
resultDisplay.appendChild(third);

//CHECKS FOR WIN CONDITION
let winCheck = setInterval(function() {
    if (ranking[(FROGS - 1)] !== undefined) {
        console.log(`${ranking[0]} IS THE WINNER!`);
        first.innerText = `${ranking[0]} IS THE WINNER!`
        console.log(`${ranking[1]} is 2nd`);
        second.innerText = `${ranking[1]} is 2nd`;
        console.log(`${ranking[2]} is 3rd`);
        third.innerText = `${ranking[2]} is 3rd`
        clearInterval(winCheck);
    };
} , 50);



//STARTING RACE FOR EACH FROG
racingFrog(racers[0]);
racingFrog(racers[1]);
racingFrog(racers[2]);