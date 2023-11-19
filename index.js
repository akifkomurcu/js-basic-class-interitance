class Person {
    //burda nesnenin Person'u kullanınca nelerden oluşacağını bildirdik. isim ve yaş
    constructor(isim, yas) {
        this.isim = isim;
        this.yas = yas
    }

    bilgiler() {
        console.log(`Merhaba, benim adım ${this.isim} ve ben ${this.yas} yaşındayım.`)
    }
}

// Yukarıdaki örnekte, Person adlı bir sınıf tanımlıyoruz. 
// Sınıfın içinde constructor adlı bir kurucu metot bulunmaktadır. 
// Bu metot, sınıftan bir nesne oluşturulduğunda otomatik olarak çağrılır ve nesnenin başlangıç durumunu belirler

//Person'u kullanarak bir nesne oluşturalım

const person1 = new Person('akif', 24);

// artık person1 içinde 24 yaşında, ismi akif olan bir nesne var. bu nesnenin içinde ayrıca kullanabileceğin bir bilgiler fonksiyonu var.

// person1.bilgiler();

// Merhaba, benim adım akif ve ben 24 yaşındayım. yazıyor konsola


// ---------------------------------------------o----------------------------------------------------

// miras

// Sınıflar, miras almayı ve prototip tabanlı kalıtımı destekler. Aşağıda kısa bir miras örneği bulunmaktadır:

// Person sınıfını genişleten bir öğrenci sınıfı

// Bu örnekte, Student sınıfı, Person sınıfını genişletir. 
class Student extends Person {
    constructor(isim, yas, grade) {
      // Üst sınıfın kurucu metodunu çağırma
      super(isim, yas);
      //   super anahtar kelimesi, üst sınıfın kurucu metodunu çağırmak için kullanılır. 
      this.grade = grade;
    }
  
    // Yeni bir metot ekleme
    displayGrade() {
      console.log(`${this.isim} adlı öğrencinin notu: ${this.grade}`);
    }
  }
  
  // Bir öğrenci nesnesi oluşturma
  const student1 = new Student('akif', 24, 'A');
  
  // Üst sınıftan miras aldığı metotları çağırma üst sınıfın özelliklerinin alayına eriştin. hll
  student1.bilgiler(); // Merhaba, benim adım akif ve ben 24 yaşındayım. yazıyor konsola
  
  // Yeni metodu çağırma
  student1.displayGrade(); // Mehmet adlı öğrencinin notu: A yazıyor konsola

// Böylece Student sınıfı, hem kendi özelliklerini hem de üst sınıfın özelliklerini kullanabilir