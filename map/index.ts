/*
var doubles = map(numbers, function(number) {
  return number * 2;
});

*/

export function customMap(
  array: any[],
  impl: (el: any, index: number, array: any[]) => any = (el) => el,
  ctx?: any,
): any {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray[i] = impl(array[i], i, array);
  }
  return newArray;
}

const test1 = customMap([1, 2], (el) => el * 3);
const test2 = customMap([1, 2], (el, index, array) => {
  console.log(array);
  return el * index;
});
const test3 = customMap(["x"]);
console.log(test1, test2, test3);
