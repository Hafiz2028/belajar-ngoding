//cara membuat variable
var a = 'a';
let b = 'b';
const c = 'c'

//variabel bisa menampung tipe data string (text), integer/number, array, object, boolean 

let nama = 'adi'; //string
let umur = 22; //number
let apakahBenar = true; //boolean
let uang = 5000.5 //number ada koma

//operator aritmatika

let angka1 = 10;
let angka2 = 20;
console.log(angka1+angka2);
console.log(angka1-angka2);
console.log(angka1/angka2);
console.log(angka1*angka2);
console.log(angka1%angka2);

//kondisi variabel
let penampungHasilOperatorAritmatika = angka1+angka2;
console.log(penampungHasilOperatorAritmatika);
 
penampungHasilOperatorAritmatika = angka1-angka2;
console.log(penampungHasilOperatorAritmatika);

penampungHasilOperatorAritmatika = angka1/angka2;
console.log(penampungHasilOperatorAritmatika);

penampungHasilOperatorAritmatika = angka1*angka2;
console.log(penampungHasilOperatorAritmatika);

penampungHasilOperatorAritmatika = angka1%angka2;
console.log(penampungHasilOperatorAritmatika);

//string bisa ditambah tapi tidak bisa dikurang

let firstname = 'agus';
let lastname = 'setiawan';
let fullname = firstname+' '+lastname;
console.log(fullname)
console.log(firstname+' '+lastname)

//alur pembacaan code
//membaca code dimulai dari kiri ke kanan dan atas ke bawah

let number = 20;
console.log(number + 10); //30
number=10;
console.log(number + 10); //20
number=false;
console.log(number + 10); //10
//alasan false-10 tetap 10 karena false=0 true=1
console.log(true+10);//11

//membaca error
//error harus ada dalam program
//jika dalam pekerjaan ada bug tapi tidak error, hal itu membuat programmer kesulitan dalam menentukan errornya

//con 
