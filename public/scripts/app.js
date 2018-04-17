'use strict';

var square = function square(x) {
    return x * x;
};

var squareArrow = function squareArrow(x) {
    return x * x;
};

var squareArrowShortened = function squareArrowShortened(x) {
    return x * x;
};

console.log(square(4));
console.log(squareArrow(8));
console.log(squareArrowShortened(12));

// challenge

var fullName = 'Luiz Cavalieri';

var getFirstName = function getFirstName(name) {
    return name.split(' ')[0];
};

console.log('First name: ' + getFirstName(fullName));
console.log('Full name: ' + fullName);

// Es6 arrow functions 'this' is not bound anymore

var person = {
    name: 'Luiz',
    cities: ['Sao Paulo', 'Sydney', 'Seoul'],
    getPlacesLived: function getPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city + '!';
        });
    }
};
console.log(person.getPlacesLived());
