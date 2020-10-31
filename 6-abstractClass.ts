    abstract class KrediBase{

        constructor(){

        }

        kaydet():void{ //Tamamlanmış ,ortak metot
            console.log("kaydedildi");
        }

        abstract hesapla():void; //imza metot
    }

    class TuketiciKredisi extends KrediBase{

        constructor(){//Zorunlu bir tanım
            super();
        }

        hesapla(): void {
            console.log("tuketici kredisi hesaplandı");
        }
        
    }

    class MortgageKredi extends KrediBase{

        constructor(){//Zorunlu bir tanım
            super();
        }

        hesapla(): void {
            console.log("mortgage kredisi hesaplandı");
        }

        mortgageUygunluk():void{
            console.log("uygunsunuz");
        }
        
    }

    let tuketici=new TuketiciKredisi();
    tuketici.kaydet();
    tuketici.hesapla();


    let mortgage=new MortgageKredi();
    mortgage.kaydet();
    mortgage.hesapla();
    mortgage.mortgageUygunluk();

    let kredi:KrediBase;
    kredi=new MortgageKredi();
    kredi=new TuketiciKredisi(); //KrediBase imza olduğu için bu tanımlamaya uygundur
