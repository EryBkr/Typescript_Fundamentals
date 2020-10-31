let value:number; //integer'e karşılık gelir
value=10;
//value="string"; doğru bir kullanım değil

let city:string;
city="Istanbul";
//city=10; doğru bir kullanım değil

let isTrue:boolean;
isTrue=true;

let numberArray:number[];
numberArray=[1,2,3];

let stringArray:string[];
stringArray=["value1","value2","value3"];

let numberList:Array<number>=[1,2,3];//Generic Tip


let tupleArray:[number,string]=[3,"string"];//Tuple tanımlama

enum Colors{Red,Black,Blue}
let color:Colors=Colors.Black;

let notSure:any;//Tip belirsiz ise
notSure=10;
notSure="string";
notSure=false;

function consoleWrite():void{//Diğer dillerdeki kullanımıyla aynı
    console.log("Merhaba");
}

let undefinedValue:number;//Değer atamadığımız için undefined

class Customer{}//Referans tiplerde null durumu oluşabilir.

