// const person = {
//     _firstName:'Nicky',
//     _lastName: 'Gandolfo',
//     get fullName() {
//         if(this._firstName && this._lastName) {
//             return `${this._firstName} ${this._lastName}`;
//         } else {
//             return 'Missing a first name or a last name';
//         }
//     }
// }
// person.fullName;
// console.log(person.fullName);

const car = {
    _name: 'Audi RS6',
    _color: 'silver',
    get color() {
        if (this._color = 'silver') {
            return `My Audi's color is ${this._color}`;
        } else {
            return 'Invalid input';
        }
    }
}
console.log(car.color);

