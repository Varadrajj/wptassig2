let a = [12,13,14]
a.push(15,16)
console.log(a);

let x = a.pop()
console.log("x=",x);
console.log(a);
a.splice(0,2)
console.log(a);
a.splice(0,1,10,20,30,40)
console.log(a);