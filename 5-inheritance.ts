class Kisi{
    protected _isim;
    kaydet(){
        console.log("Kisi kaydedildi");
    }
}

class Personel extends Kisi{
    maasAl(){
        console.log("Maas Alındı");
    }
}

class Musteri extends Kisi{
    urunAl(){
        this._isim="Kisi ismi atanabilir";//private olsaydı erişemezdik
        console.log("urun alındı");
    }
}

let musteri=new Musteri();
let personel=new Personel();

musteri.kaydet();
musteri.urunAl();

personel.kaydet();
personel.maasAl();