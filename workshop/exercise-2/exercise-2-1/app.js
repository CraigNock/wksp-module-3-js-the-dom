// Preset values
const FROGS = 3;

for (let i=0 ; i<FROGS ; i++){
    const lane = document.createElement('li');
    lane.id = `Lane-${i+1}`;

    const laneLabel = document.createElement('span');
    lane.appendChild(laneLabel);
    
    document.querySelector('#track').appendChild(lane);
};

// 1. Create for loop that makes use of FROGS to know how many lanes to create.

// 2. Create li  

// 3. Create span and add it to the li

// 4. Assign an id to each lane
