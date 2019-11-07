let spaceship = {
    'Fuel type': 'Turbo',
    homeplanet: 'Earth'
};

let greenEnergy = obj => {
    obj['Fuel type'] = 'avocado oil'
}

let remotelyDisabled = obj => {
    obj['diabled'] = true
}

greenEnergy(spaceship);
remotelyDisabled(spaceship);

console.log(spaceship);


