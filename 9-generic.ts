function returnValue<Type>(x:Type):Type{
    return x;
}

let sayi=returnValue<number>(2);
let sehir=returnValue<string>("Istanbul");


class GenericClass<Type>{
    degisken:Type;

     fonksiyon(parameter:Type):Type {
        return parameter;
    }
}

let sınıf=new GenericClass<string>();
sınıf.degisken="Istanbul";
sınıf.fonksiyon("value");