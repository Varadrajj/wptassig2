// function Hi(choice) {

//     function India() {
//         console.log("Namaste");
//     }
//     function US() {
//         console.log("Hello");
//     }
//     function Japanese() {
//         console.log("Konichiwwa");
//     }
//     switch (choice) {
//         case 1 : return India;break;
//         case 2 : return US;break;
//         case 3 : return Japanese;break;
//         default:console.log("Hola");
//             break;
//     }
// }

// let rv = Hi()
// console.log(typeof(rv));
// rv();

// function add(x) {
//     return function (y) {
//         return x+y;
//     }
// }
// const add1 = add(5);
// const add2 = add(10);
// const add3 = add(15);
// console.log(add1(2));
// console.log(add2(4));
// console.log(add3(6),add3(8));
// let cnt=0;
// function incrementer() {
    
//     return cnt++
// }
// console.log(incrementer(),incrementer(),incrementer());

function CounterFactory(params) {
    let cnt = 0
    function incrementer() {
        return ++cnt
    }
    return incrementer
}
let x = CounterFactory()
console.log(x(),x(),x())
cnt = 99
console.log(x());