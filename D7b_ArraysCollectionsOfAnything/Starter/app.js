var arr = [1, 2, {
    name: 'scot'
}, function (name) {
    console.log('Hello, ' + name)
}, "hello"];



console.log(arr[2].name);

arr[3](arr[2].name)
