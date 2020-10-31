interface Product{
    id:number;
    name:string;
    price:number;

    satınAl();
}

function save(prod:Product){
    console.log(prod.name+" kaydedildi");
}

class Telephone implements Product{
    satınAl() {
        console.log("telefon alındı");
     }
    id: number;
    name: string;
    price: number;
    
}

class Computer implements Product{
    satınAl() {
       console.log("bilgisayar alındı");
    }
    id: number;
    name: string;
    price: number;
    
}

let tel=new Telephone();
tel.id=1;
tel.name="iphone";
tel.price=5000;
tel.satınAl();
save(tel);


let computer=new Computer();
computer.id=1;
computer.name="MSI";
computer.price=5000;
computer.satınAl();
save(computer);

