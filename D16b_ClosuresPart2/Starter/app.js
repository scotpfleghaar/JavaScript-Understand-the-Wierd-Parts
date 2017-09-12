//function buildFunctions() {
//
//    var arr = [];
//
//    for (var i = 0, j = 3; i < j; i++) {
//
//        arr.push(
//            function () {
//                console.log(i);
//            }
//        )
//    }
//
//    return arr;
//}
//
//
//
//
//var fs = buildFunctions();
//
//fs[0]();
//fs[1]();
//fs[2]();


function buildFunctions2() {

    var arr = [];

    for (var i = 0, j = 3; i < j; i++) {

        arr.push(
            (function (num) {
                return function () {
                    console.log(num);
                };
            }(i)));
    }

    return arr;
}




var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();
