const square = function (x) {
    return x * x;
}

const squareArrow = (x) => {
    return x * x;
}

const squareArrowShortened = (x) => x * x;

console.log(square(4));
console.log(squareArrow(8));
console.log(squareArrowShortened(12));


// challenge

const fullName = 'Luiz Cavalieri';

const getFirstName = (name) => name.split(' ')[0];

console.log(`First name: ${getFirstName(fullName)}`);
console.log(`Full name: ${fullName}`);



// Es6 arrow functions 'this' is not bound anymore

const person = {
    name: 'Luiz',
    cities: ['Sao Paulo', 'Sydney', 'Seoul'],
    getPlacesLived () {
        return this.cities.map((city) => `${this.name} has lived in ${city}!`);
    }
}
console.log(person.getPlacesLived());