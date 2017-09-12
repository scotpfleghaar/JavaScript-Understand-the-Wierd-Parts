function makeGreeting(language) {
    return function (firstname, lastname) {
        if (language === 'en') {
            console.log('Hello, ' + firstname + ' ' + lastname);
        }

        if (language === 'es') {
            console.log('Hola, ' + firstname + ' ' + lastname);
        }
    }
}

var spanishGreeting = makeGreeting('es');
var englishGreeting = makeGreeting('en');


spanishGreeting('Sam', 'Johnson');
englishGreeting('Jose', 'Martinez');
