// Preset values
const FROGS = 3;

for (let i=0 ; i<FROGS ; i++){
    const lane = document.createElement('li');
    lane.idName = `Lane${i+1}`;

    const laneLabel = document.createElement('span');
    lane.appendChild(laneLabel);
    
    document.querySelector('#track').appendChild(lane);
};

const stableLink = document.createElement('script');
stableLink.setAttribute(src, 'workshop\exercise-2\assets\frogStable.js');
document.querySelector('body').appendChild(stableLink);

