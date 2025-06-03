 let numOne = 3;
let numTwo = 3; 

console.log(numOne == numTwo) //true

let js = 'JavaScript'
let py = 'Python'

console.log( js == py) //false

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff) //false

// non primitive data types -- Değiştirilebilir, modifiye edilebilir.

let nums = [1, 2, 3,]
nums[0] = 10

console.log(nums) // çıktı: [10, 2, 3]
console.log(typeof nums) 

// dizeleri, fonksiyonları ve objectleri karşılaştırmayın. değerler aynı da olsa primitive olduklarından

let nums1 = [1, 2, 3]
let nums2 = [1, 2, 3]

console.log( nums1 == nums2)

// ------------------------------ //

// Math fonksiyonuyla 10 ile 1 arasında rastgele sayı yazdırma 
// *floor ile taban sayısı belirlenir *random ile de rastgele sayı seçilir.//
const num = Math.floor(Math.random()*11)

console.log(num)

// Şimdi de 1 ile 0 arasında random bir sayı seçtirelim //
// let ile bir değişken tanımlandı ve isimlendirildi. sonrasınrda bunu 
// *Math.random fonksiyonuyla yazıdırılabilir hale geitrdik //

let randomNum = Math.random()
console.log(randomNum)
//----//
let randomRoundToFloor = randomNum *11

console.log(randomRoundToFloor)


// -STRING- Bir değişken ismini (Variable name - başlangıçta let, var kullanılır) tanımlamak için atama operatörüne
//  (assingment operatör =) ihtiyacımız vardır. sonrasın bunları çift tırnak " isim " , `aposrof` -ters tırnak işareti,
//  tek tırnak ' isim ', kullanarak STRING tanımlayabiliriz. 

// String Concatenation -- Stringleri tek bir değişkene bağlama.

let name = 'Fırat'
let surname = 'ACUN'
let age = 35
let city ='İzmir'

let fullInfo = name + ' ' + surname + ' ' + age + ' ' + city

console.log(fullInfo)