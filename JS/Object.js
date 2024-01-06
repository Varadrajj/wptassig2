let o = {fname:"Shantanu",
         lname:"Ghanwat",
         job:"Cloud",
         address:{
            area : "pmc",
            city : "pune",
            state : "maha",
            pin : "411015"
         },
         skills :["core java","spring boot","js"],
         show: function(){
            console.log(this.fname,this.lname)
         }
        }
// console.log(o.fname,o.lname,o.job)
// console.log(o.address.city)
// console.log(o.skills[2])

// console.log(o["fname"])
// console.log(o["address"]["city"])
// console.log(o["address"].pin)

o.show()
console.log(typeof(o.show));
console.log(typeof(o))
let r = JSON.stringify(o)
console.log(typeof(r))
console.log(r.fname);

let ob = JSON.parse(r)
console.log(typeof(ob),ob.fname);

let t=new Date().toDateString();
console.log(t);