var person = new Object();

person["firstname"] = "Scot";
person["lastname"] = "Pfleghaar";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firstname);
console.log(person.lastname);

person.address = new Object();
person.address.street = '111 main St.';
person.address.city = "New York";
person.address.state = "NY";


console.log(person.address.state);
console.log(person.address.city);
console.log(person['address']['street']);
