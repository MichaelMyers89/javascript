console.log("Merhaba Fırat");
console.log(123)
console.error("Beklenmedik hata oluştu!")
console.warn("Bu Bir Uyarıdır!")

console.clear()

// DEĞİŞKENLER

var password; 
console.log(password)

password = "Fırat"
console.log(password)


yas = 25;
console.log(yas)

//  DEĞİŞKEN (var) tanımlama kuralları

// 1- Değişken isimleri rakamla başlayamaz. Rakamı string sonrasına eklenebilir.

// 2- Kullanılan komutlar değişken adı olarak belirtemeyiz!

// 3- Değişken adımız iki kelimeden oluşuyorsa boşluk bırakılamaz. 
// alt tire kullan ve ya ikinci kelimenin baş harfini büyük yazabilirsin. 

//örnek: 

var adSoyad;
adSoyad = "Fırat ACUN"
console.log(adSoyad)

// 4- Değişken isimlerinde Türkçe karakter kullanılmamalıdır. 

// SABİTLER (const)

// 1- Sabitler sonradan değiştirilemez. 

//-------------------------------------------//

// Değişken türleri

//Primitive Types

//-String- (let)

let firstName = "Fırat"

console.log(typeof firstName)

// çıktı almak istediğimizde parantez içinde değişkenin başına *typeof koyarsan o çıktının türünü verir. 

// -Number-

let age = 35;

console.log(typeof age)

// -Boolean- Doğru ya da yanlış *false true* yani mantıksal dönüşler için 

let kredi_kullanimi = false;

console.log(typeof kredi_kullanimi)

// -undefined- tanımsız 

let phone;
console.log(typeof phone)

// Reference Types : Objects
// -Array

let liste =["Fırat", "Pelin", "Ateş"]
console.log(typeof liste)


// Object Literals

let address = {
    city: "İstanbul",
    country:"Turkey",

}
console.log(typeof address)


var hesapla = function(){
    return 0;

}
console.log(typeof hesapla)

//------------------------------------------------------//

// OPERATÖRLER

// 1. Aritmetik Operatörler

let veri;

const a=20;

const b=10;

const c=5;

let d=3;

veri = a+b;
veri = d++;
veri = a*b;
veri = a-b;
veri = a/b;








// 2. Atama Operatorleri



veri = a;
veri +=a; // veri = veri + a
veri -=a; // veri = veri - a
veri *=a; // veri = veri * a

// 3. Kaşrılaştırma Operatorleri

veri = a==b; // a ve b birbirine eşit mi? diye soruyoruz.
veri = b==c;
veri = 5===5; // üç eşittir kullanıdığımızda türler ve verileri birbirnin aynı mı ona bakar.
veri =a!=b; // a b'ye eşit değildir.
veri = a!==b; // a, b'ye eşit değil midir?
veri = a>b; // a b'den büyükse
veri = b<c;  // b, c'den küçükse
veri = 5 >= 5; 
veri = b <= c;

// 4. Mantıksal Operatorler
//&& (and) ve -- ikisi de doğru olduğundan true 

veri = (a>b) && (a>c)


// || (or) veya -- b>a false olduğu halde true gelmesinin nedeni; veya kullanıldığı için içlerinden sadece birinin true olması yeterlidir.

veri = (b>a) || (a>c)

// ! (not)

veri = !(a>b)
veri = !(a<b)

console.log(veri)
console.log(typeof veri)