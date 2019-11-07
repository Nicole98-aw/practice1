//Using setters to reassign values to object properties

const robot = {
    _model: 'NE644',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors() {
        if ( typeof this._numOfSensors === 'number'){
            return this._numOfSensors;
        } else {
            return 'Sensors are currently down';
        }
    },
    set numOfSensors(num) {
        if ( typeof num === 'number' && num >= 0){
            return this._numOfSensors = num;
        } else {
            'Pass in a number that is equal or greater than 0'
        }
    }
}

robot.numOfSensors = 100;
console.log(robot.numOfSensors);
