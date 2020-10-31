function topla(x:number,y:number):number{ //Parametreleri number olan ve number dönen fonksiyon
    return x+y;
}

let carp=function(x:number,y:number):number{
    return x*y;
}

let cikar=function(x:number,y:number=5):number{ //Default Parameter
    return x-y;
}

var result=cikar(5);//Problem Yok

let NanControl=function(x:number,y?:number):number{//y NaN ise sonuç NaN dönecekti.
    if(y)
        return x+y;
    
    return x;
}

function inviteIn(person:string,...others:string[]):string{ //C# params gibi...
    return person+" "+others.join(" ");
}

console.log("james","john","infinity");//İstediğimiz kadar parametre verebiliyoruz