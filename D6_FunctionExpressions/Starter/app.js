greet();

function greet() {
    console.log('hi');
}

// Below comment will not run because window places variables into memory first.
// anonymousGreet();
var anonymousGreet = function () {
    console.log('hi');
}

anonymousGreet();

function log(a) {
    console.log(a);
}


log(function () {
    console.log('HI');
});
