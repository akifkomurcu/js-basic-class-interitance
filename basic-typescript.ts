// console.log('akif');

// console.log('naber');
let a: string;
//int
let b: number;
//c=true;
let c: boolean;
//d=1 | d="hello";
let d: any;

// d = "hello";
// console.log(d);
// d = 2;
// console.log(d);

//ARRAY
let arr: string[];
let arr1: number[];
let arr2: boolean[];
let arr3: Array<boolean>;
let arr4: Array<string>;
let arr5: Array<number> = [1, 2, 3, 4, 5, 6, 7];
//sadece string değerler gelebilir
arr = ["php", "js", "c++", "phyton", "java"];
arr1 = [1, 2, 3, 4, 5];
arr2 = [true, false];
arr3 = [false, true];
arr4 = ["akifzsche"];
console.log(arr);
console.log(...arr);
console.log(...arr1);
console.log(...arr2);
console.log(...arr3);
console.log(...arr4);
console.log(...arr5);

//FUNCTİONS
//(num1: number, num2: number): number = en sondaki number sonucun kesinlikle int olmalı anlamını taşır
function addNumbers(num1: number, num2: number): number {
    return num1 + num2;

}
console.log(addNumbers(10, 10));

//void functionlar değer dönemez

// function addNumbers1(num1: number, num2: number): void {
//     return num1 + num2;

// }
// console.log(addNumbers1(10, 10));

//CLASSLAR
//super class yani üst class oluyor bu aynı zamanda
class Person {
    //private name: string; ile dışardan erişilemez olur
    name: string;
    age: number;
    phone: string;

    constructor(name: string, age: number, phone: string) {

        this.name = name;
        this.age = age;
        this.phone = phone;

        console.log("kişi oluşturuldu");
    }
    showInfos() {
        console.log(`isim:${this.name} yaş:${this.age} phone:${this.phone}`);

    }
}
let person1 = new Person("akif komurcu", 22, "12345");

person1.showInfos();
//dışarıdan eriştik
//private name: string; ile dışardan erişilemez olur
console.log(person1.name);

//inherits
//kalıtım
//extends Person deyince bütün person özelliklerini miras aldık
class Employee extends Person {
    //ek özellil ekleyebiliriz
    salary: number;
    //burda gönderdiğim name age ve phone miras aldığımıza eşitlenecek ve değerlerini alacak
    constructor(name: string, age: number, phone: string, salary: number) {
        super(name, age, phone);
        this.salary = salary;

    }
    //salary için showinfos yeniden yazıyoruz
    //overwrite. yani üstteki class'ı kendimize göre özelleştirip yeniden yazıyoruz
    //overwriting(iptal etme)
    showInfos() {
        super.showInfos();
        console.log("maaş: " + this.salary);
    }
    changeDepartment() {

        console.log("department changed");
    }
}
//objemizi oluşturduk
let employee1 = new Employee("akif komurcu", 22, "12345", 4000);

employee1.showInfos();

employee1.changeDepartment();



