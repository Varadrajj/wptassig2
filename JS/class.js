class Car{
    type="Sedan"
    constructor(brand){
        this.carname = brand
    }
    present(){
        return "I have a "+ this.carname
    }
}
class Model extends Car{
    constructor(brand,mod){
        super(brand)
        this.Model = mod
    }
    show(){
        return this.present()+"its a "+this.Model
    }
}

let MyCar = new Model("Ford","Mustang")
console.log(MyCar.show())
