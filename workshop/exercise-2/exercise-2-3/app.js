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
    froggo.style.backgroundColour = `${racers[i].color}`
    document.querySelector(`#Lane-${i+1}`).appendChild(froggo);
};

console.log(racers);

