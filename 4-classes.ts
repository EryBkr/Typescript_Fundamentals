class Home{

    //fields , private tanımladığımız için dışarıdan çağıramadık
   private _roomCount:number;
   private _floor:number;
   public _address:string; //dışarıdan erişilebilir

    constructor(roomCount:number){ //Yapıcı metot
        this._roomCount=roomCount;
    }

    //functions
    eatFood(){
        console.log("Do it");
    }

    //Getter and Setter
    get floor():number{ //Getter
        return this._floor;
    }

    set floor(kat:number){ //Setter
        this._floor=kat;
    }
}

let ev=new Home(10);
ev.eatFood();

ev._address="address";//public

ev.floor=10;//Set
console.log(ev.floor);//Get

