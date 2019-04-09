// arguments 0bject - no longer bound with arrow functions

const add =  (a, b) => {
    //console.log(arguments)
    return a + b;
}
console.log(add(55,1))

// this keyword

const user = {
    name: 'Andrew', 
    cities: ['P', 'NY', 'D'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city + '!');
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [5, 10, 15],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((x) => x * this.multiplyBy )
    }
};

console.log(multiplier.multiply())