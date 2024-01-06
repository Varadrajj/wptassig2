// let regex = /abc/
// let s = "abc"
// let rv = s.match(regex)
// console.log(rv)

// let regex = /abc/i
// let s = "a"
// let rv = s.match(regex)
// console.log(rv)

// let regex = /[A-Z]/
// let s = "fdbdA"  //matched
//  s = "Abc" //matched
// let rv = s.match(regex)
// console.log(rv)

// let regex = /[a-sA-Z]/
// let s = "t" //not matched
// s = "tsdA" //matched
// let rv = s.match(regex)
// console.log(rv)

// let regex = /^[A-Z][a-z]*/
// let s = "India" //matched
// s = "INdia" //matched
// s = "indA"  // not matched
// let rv = s.match(regex)
// console.log(rv)

// let regex = /[A-Za-z]+[0-9]{3}/
// let s = "abc123" //matched
// s = "123asdas123" //matched
// s= "123dsafsa" //notmatched
// let rv = s.match(regex)
// console.log(rv)

let regex = /[A-Za-z]+[0-9]{3}$/
let s = "abc123" //matched
s = "123asdas123" //matched
 s= "123dsafsa" //notmatched
let rv = s.match(regex)
console.log(rv)