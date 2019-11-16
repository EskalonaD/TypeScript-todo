//Type Fundamentals
var animal = {
    name: 'fido',
    species: 'dog',
    age: calculateAge(2014),
    speak: function () {
        console.log('woof!');
    }
};
function calculateAge(birthYear) {
    return Date.now() - birthYear;
}
function totalLength(x, y) {
    var total = x.length + y.length;
    x.slice(0);
    if (x instanceof Array) {
        x.push(1);
    }
    if (typeof x === 'string') {
        x.substr(1);
    }
    return total;
}
// Custom Types
