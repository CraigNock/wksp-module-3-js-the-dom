// Preset values
const FROGS = 3;

for (let i=0 ; i<FROGS ; i++){
    const lane = document.createElement('li');
    lane.id = `Lane-${i+1}`;

    const laneLabel = document.createElement('span');
    lane.appendChild(laneLabel);
    
    document.querySelector('#track').appendChild(lane);
};

// const stableLink = document.createElement('script');
// stableLink.setAttribute(src, "../assets/frogStable.js");
// document.querySelector('body').insertAdjacentElement('beforebegin', stableLink);

const racers = [];

for (let i=0 ; i<FROGS ; i++){
    racers.push(frogStable[i]);

    let froggo = document.createElement('span');
    froggo.innerText = `${racers[i].name}`;
    froggo.className = 'frog';
    froggo.style.backgroundColor = `${racers[i].color}`
    froggo.progress = 0;
    froggo.style.marginLeft = `${froggo.progress}%`;
    document.querySelector(`#Lane-${i+1}`).appendChild(froggo);
};

const styleLink = document.createElement('link');
styleLink.className = 'css';
styleLink.setAttribute('href', "../assets/styles.css");
styleLink.rel = 'stylesheet';
document.querySelector('head').appendChild(styleLink);

console.log(racers);

