"use strict";
/*
var doubles = map(numbers, function(number) {
  return number * 2;
});

*/
exports.__esModule = true;
exports.customMap = void 0;
function customMap(array, impl) {
    if (impl === void 0) { impl = function (el) { return el; }; }
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray[i] = impl(array[i], i, array);
    }
    return newArray;
}
exports.customMap = customMap;
var test1 = customMap([1, 2], function (el) { return el * 3; });
var test2 = customMap([1, 2], function (el, index, array) {
    console.log(array);
    return el * index;
});
var test3 = customMap(["x"]);
console.log(test1, test2, test3);
