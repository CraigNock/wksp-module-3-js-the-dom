
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

for (let i=0 ; i<FROGS ; i++){
    const lane = document.createElement('li');
    lane.id = `Lane-${i+1}`;

    const laneLabel = document.createElement('span');
    lane.appendChild(laneLabel);
    
    document.querySelector('#track').appendChild(lane);
};

const racers = [];

for (let i=0 ; i<FROGS ; i++){
    racers.push(frogStable[i]);

    let froggo = document.createElement('span');
    froggo.innerText = `${racers[i].name}`;
    froggo.className = 'frog';
    froggo.id = `${racers[i].name}`
    froggo.style.backgroundColor = `${racers[i].color}`
    racers[i].progress = 0;
    froggo.style.left = `${racers[i].progress}%`;
    document.querySelector(`#Lane-${i+1}`).appendChild(froggo);
};

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


racingFrog(racers[0]);
racingFrog(racers[1]);
racingFrog(racers[2]);