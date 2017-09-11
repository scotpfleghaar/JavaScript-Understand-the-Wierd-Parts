var objectLiteral = {
    firstname: 'mary',
    isProgrammer: true
};


console.log(JSON.stringify(objectLiteral));

// JSON: NOTE the double quotes.
console.log(JSON.parse('{ "firstname": "mary", "isProgrammer": true }'));
