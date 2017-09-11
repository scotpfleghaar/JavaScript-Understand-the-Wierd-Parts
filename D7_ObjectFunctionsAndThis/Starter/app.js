// console.log(this);

function a() {
    console.log(this);
    this.newvariable = "Hello";
}

a();

var b = function () {
    console.log(this);
}

b();

console.log(newvariable);


var c = {
    name: 'The c object',
    log: function () {
        console.log(this);

        var self = this;
        console.log(self);
        var setname = function (newname) {
            self.name = newname;
        }
        setname('updated again!')
        console.log(self);
    }
}

c.log();
console.log(name);
