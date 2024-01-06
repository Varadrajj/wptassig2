// let func = function () {
//     console.log("Hello");
// }
// func()

// let f2 = ()=>{
//     console.log("TestAgain");
// }
// f2()

function X(f1) {
    for (let i = 0; i <3; i++) {
        f1()
    } 
  
}
X(function(){
    console.log("hi");
})

X(()=>{console.log("Hey");})

function test() {
    console.log("test");
}
X(test)