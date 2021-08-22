/**
 * @file main.js dosyası ana dosyamızdır
 * @author AlpSu
 * @see github.com/AlpSuuu/AlpSuuu.git
*/


/**
 * man objesi oluşturma fonksiyonu
 * 
 * @constructor
 * @param {string} name - oluşturduğunuz objeye verdiğiniz ad
 * @param {string} surname - oluşturduğunuz objeye verdiğiniz soyad
 * @param {number} age - oluşturduğunuz objeye verdiğiniz yaş
 * @param {string} sex - oluşturduğunuz objeye verdiğiniz cinsiyet
 */
function man(
  name = String = void(0) , // isim
  surname = String = void(0), // soyisim
  age = Number = void(0), // yaş
  sex = String = void(0) // cinsiyet
  ) {

  this.name = name,
  this.surname = surname, // burda objemizim property lerini tanımlıyoz
  this.age = age,
  this.sex = sex

  /**
   * kişinin verileri
   * 
   * @type {Object}
   * @property {string} name - kişinin adı
   * @property {string} surname - kişinin soyadı
   * @property {number} age - kişinin yaşı
   * @property {string} name - kişinin cinsi
   */
  let ID = new Object({ // kişinin verilerinin bulunduğu bir obje
      name : name,
      surname : surname,
      age : age,
      sex : sex,
  });

  prototyper(ID , "findAndGet" , { enumerable : true , get : function(name) {
      return {
          $name : name,
          $surname : surname,
          $age : age,
          $sex : sex,
      }[name];
  }}); // oluşturduğumuz "ID" isimli kişi objemize prototip ekledik
  
  this.add = function(key , value) {
      if(key in this) return console.error(new Error("you can't add existing variable."));

      this[key] = value;

      return true;
  } // this objesine value eklemek için kullanmamız gereken fonksiyon

  this.delete = function(key) {
      let arr = ["name" , "surname" , "age" , "sex"]; 
      let val = arr.findAndGet(key)
      if(val) return console.log(new Error("you can't delete fixed variables."))

      let control = key in this , _;

      switch(control) {
          case false: return console.error(new Error("you can't delete a variable that non."))
          case true: {
              delete this[key];
              _ = "ok."
          }
      };

      return (
          _?
          true:
          false
      );
  } // this objemizden belirttiğimiz value yi sildiğimiz fonksiyon


  this.has = function(argument = String = void 0) {
      if(!argument || ["name" , "surname" , "age" , "sex"].includes(argument)) return console.log(new SyntaxError("invalid arguments."))
      let _return = Boolean
      
      if(!argument in ID) return _return(false)
      else if(!ID[argument]) return _return(false)
      else return _return(true);
  } // this objemize sahip bir value ya da key olup olmadığını kontrol ettiğimiz fonksiyon

  this.fetch = function(argument = String = void 0) {
      let o_O = void 0;

      if(!argument in ID) o_O = false
      else if(!ID[argument]) o_O = false
      else o_O = true;

      if(o_O) return ID[argument]
      else return null;
  } // This objemizden belirttiğimiz value ya da keyi getirir.

  this.gen = function* () {
      yield new Object({
          "name" : this["name"] 
      }) // 1

      yield new Object({
          "surname" : this["surname"] 
      }) // 2

      yield new Object({
          "age" : this["age"] 
      }) // 3

      yield new Object({
          "sex" : this["sex"] 
      }) // 4
  } // ID objesindeki value ve keyleri teker teker görmemizi sağlayan basit bir "generatorFunction"

  this.gen.prototype.getObj = () => this.next().value; // jeneratör fonksiyonunda objemizi getirmek için jeneratör fonksiyonumuzda next() fonksiyonunu çağırıyoruz ve ardından value değerini alıyoruz

  this.numGenerator = function* (
      num = Number = void 0,
      targ = Number = 10 // hedef sayımız , bu sayıya kadar numara "yield" ediyoruz
      ) { 

      let target = targ
      let index = 0
      
      while (index < target) { // sonsuz döngüye sokmamamız için bir sınır koyduk
          yield `${num+1}-) `;
          index++;
      }
  } // basit bir number jeneratör fonksiyonu 
  
  this.numGenerator.prototype.number = function(index = Number = null) {
      return this.next(index).value; // jeneratör fonksiyonunda next() fonksiyonunu kullanarak value değerini alıyoruz , value değeri bize yield' ettiğimiz sayıyı verecektir.
  }

  this.toString = function() { // objemizi sıralamamızı sağlayan bir fonksiyon
      let func = this.gen()

      let str = "";
      let index = 0

      let nexted = func.next();

      while (!nexted.done) {
        
          let obj = nexted.value

          if(!obj instanceof Object) break;

          var _key = Object.keys(obj);
          var _value = Object.values(obj);

          let _numGen = this.numGenerator(index)

          str += `${_numGen.number()}${_key.findAndGet(_key.length - 1)} : ${_value.findAndGet(_value.length - 1)}\n`;

          nexted = func.next()
          index++

      }
      
      return str; // str mizi döndürüyroruz
  }

  this.class = class _Class { // yeni bir sınıf oluşturuyoruz
    /**
     * oluşturduğumuz sınıf.
     * 
     * @param  {...array} args - kişi bilgileri ve argümanlarımız bir dizi şeklinde olucaktır
     */
      constructor(...args) {
          this.name = void 0
          this.surname = void 0 // sınıf için değerler veriyoruz 
          this.age = void 0 // vermiş olduğumuz void 0 değerleri normal değerlerin bulunmadığını gösterityr
          this.sex = void 0

          /** @private */ this.exp_name = void 0
      }
  }

  /**
   * sınıfımızın verilerini tanımlıyacağız
   * @param {string} args[0] - kişinin adı
   * @param {string} args[1] - kişinin soyadı
   * @param {number} args[2] - kişinin yaşı
   * @param {string} args[3] - kişinin cinsi
   */
  this.ManClass = class ManClass extends this.class { // exteds ile yukarıdaki oluşlturmuş olduğumuz sınıfın verilerini rahatlıkla çekiyoruz.
      constructor(args) {
          super({
              name : args[0] || void 0,
              surname : args[1] || void 0,
              age : args[2] || void 0,
              sex : args[3] || void 0
          })

          this.name = name
          this.surname = surname
          this.age = age
          this.sex = sex

          /** @private */ this._name = name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
      }
  }

  /**
   * basit bir sınıf oluşturma fonksiyonu
   * callback olarak bir fonksiyon girmelisiniz ki fonksiyonu çağırıp sınıfı döndürelim
   * 
   * @param {function} callback - çağırdığımız fonksiyon: callback.call();
   */
  this.createClass = function // bir sınıf oluşturma fonksiyonu
  (
      callback = Function = void 0
  ) {
      
      if(!callback) return console.error(new Error("pls enter a callback for function.")) // hatalarımız ı konsol a gönderiyorux
      if(typeof callback !== "function") return console.error(new Error("pls enter a valid callback."))
      
      let class_ =  this.ManClass
      let _class = new class_([])

      _class.name = this.name, // property ekliyoruz _Class { name : "AlpSu" , ...} gibi
      _class.surname  = this.surname,
      _class.age = this.age,
      _class.sex = this.sex
      
      callback.call(void 0 , _class , class_); // fonksiyonumuzu çağırıyoruz
  }

}

/**
 * oluşturduğumuz döngü fonksiyonu dizi içerisindeki elamanları, elamanların sırasını, diziyi ve dizinin sıradaki elamansız halini gösterir
 * 
 * @param {Array<string|number|object>} array - döngüye alacağımız dizimiz
 * @param {function} callback - döngünün her basamağındaki elamanı döndürdüğümüz fonksiyon
 * @returns void
 */
const loop = function(
  array = Array = void 0,
  callback = Function = void 0) { // basit bir döngü fnskyiyonu oluşturduk.

   let check = array instanceof Array // geçerli bir array olup olmaduğını "instanceof" operatörü ile kontrol edityoruz
   if(!check) return console.error(new TypeError("invalid array."))


   let index = 0;

   var arr = array;

   let removed = [];

   var length = arr.length;


   if (typeof callback !== "function") { throw(new TypeError(callback + ' is not a function')); } // hatamızı throw kullnarak atıyoruz.


   while (index < length) { // while ile döngü oluşturuyoruz

     let element = undefined;

     let control = arr.includes(arr[index]) // arrayımızın içindeki veriyi kontrol etmek için includes fonksiyonunu kullanıyoruz.

     switch (control) { // control ile belirttiğimiz değeri switch kullanarak işleme tabi tutuyoruz
         case true: { // case ile bşrlikte switch içerisindeki değeri farklı koşullarda inceleyebiliryoruz.
             
             element = arr.findAndGet(index);

            for(var val of array) {
                let indexOfVal = array.indexOf(val)
                let indexOfelement = array.indexOf(element)
                if(indexOfVal != 0 && indexOfelement < indexOfVal) removed.push(val);
            }

             removed = removed.length == 0 ? [] : removed

             callback.call(void 0 , element , index , arr , removed);

             removed = []
         };

         case false: { break }; // swwitch içerisindeki değer bize false ' u veriyorsa yapmamız gereken adımlar.
         default: { break }; // koşullar için kullandığımız case anahtar kelimeleri switch içerisindeki değer ile aynı olmadığında default kod bloğunu kullanıyoruz
     }

     index++;
   }
};

/**
 * belirttiğimiz bir obje ya da herhangi bir nesnenin prototipi arasında property eklememizi sağlar
 * 
 * @param {object} object - property ekleyeceğimiz prototip veya obje
 * @param {string} property - objemize eklediğimiz property ismi
 * @param {object} argObj -  gerekli seçeneklerimizi belirttiğimiz alan.
 * @returns {boolean|object}
 */
const prototyper = function prototyper  // vay be bu bir prototyper :)
  (
      object = Object = void 0, // prototip ekliyeceğimiz objemizi girdik.
      property = String = void 0, // girdiğimiz objemize ekliyeceğimiz prototip ismini belirriyoruz.
      argObj = Object = void 0, // obje biçiminde seçeneklerimizi giriyoruz
  ) {

  const hasOwn = Function.call.bind( Object.prototype.hasOwnProperty ); // hasOwnProperty fonksiyonunu çağırdık.
  const control_define = hasOwn( Object.prototype, '__defineGetter__' ); // prototiplerimizin arasında "__defineGetter__" olup olmadığını kontrol ediyoruxz.

  let setGetter = Function.call.bind( Object["prototype"]["__defineGetter__"] ); // "ge"t i tanımlıyoruz, (prototip)
  let setSetter = Function.call.bind( Object["prototype"]["__defineSetter__"] ); // "set" i tanımlıyoruz. (prototip)
  /*------------------------------------------------------------------------------------------------------*/
  let get = Function.call.bind( Object["prototype"]["__lookupGetter__"] ); // "get" i kontrol ediyoruz.
  let set = Function.call.bind( Object["prototype"]["__lookupSetter__"] ); // set i kontrol edityoruz.


  /**
   * @type {{nonDes : function , noTarget : function , notSup : string , notObj : function}}
   */
  const errObj = new Object({
      nonDes : (des) => 'Property description must be an object: ' + des,
      noTarget : (obj) => 'Object.defineProperty called on non-object: ' + obj,
      notSup : 'getters & setters can not be defined on this javascript engine',
      notObj : (__) => __ + " is not a Object"
  }); // hatalarımız, foksiyon veya string tarzında.

  /**
   * @type {{VALUE : string , GET : string , SET : string}}
   */
  const descs = new Object({
      VALUE : "val",
      GET : "get",
      SET : "set"
  }); // tanımlayacağımız açıklamlar.

  /**
   * fonksiyon veya obje kontrol functionu
   * 
   * @param {function} func - kontrol edilecek olan fonksiyon veya obje
   * @returns {boolean} - foncksiyon sonu bir boolean dönüyor true veya false
   */
  var __control__ = (func) =>  func == null || (typeof func !== 'object' && typeof func !== 'function');

  __control__(function(any) { return any; } );


  /**
   * 
   * @param {string} value - değer 
   * @param {object} object - obje
   * @returns {boolean} 
   */
  const checker = function checker
  (
      value = String = void 0, // objenin içinde aratılacak değer
      object = Object =  void 0 // belirtilen değeri sorgulayacağımız objemöiz
  ) {
      if(typeof object !== "object") { 
          throw(new TypeError( errObj[notObj](object) )) // hatayı attık gitti
      }

      return (
          new Boolean(value in object)
      );
  } // obje içindeki value 'ları kontrol etmek içn basit bir controller.
  
  if (!object || (typeof object !== 'object' && typeof object !== 'function')) {
      throw(new TypeError( errObj["noTarget"](object) )); // hatayı attık,
  }

  if (!argObj || (typeof argObj !== 'object' && typeof argObj !== 'function')) {
      throw(new TypeError( errObj["nonDes"](argObj) )); // hata yı atıyoruz console'u kirletmeyelimm.
  }

  if (checker(descs["VALUE"] , argObj)) {

      if (control_define && (get(object, property) || set(object, property))) {
          let  prop = object.__proto__;
          object.__proto__ = Object.prototype;
          //tanımladığımız kısım
          delete object[property];
          //prototipi siliyoruz.
          object[property] = argObj[ descs["VALUE"] ];
           //proto'yu tekrardan ayarlıyoruz.
          object.__proto__ = prop;

      } else object[property] = argObj[ descs["VALUE"] ];
      
  } else {
      var control1_ = checker(descs["GET"] , argObj); // controllerimiz.
      var control2_ = checker(descs["SET"] , argObj); // controllerimiz.

      if (!control_define && (control1_ || control2_)) {
          throw(new TypeError( errObj["notSup"] ));
      }// hem set hem get olamaz. yalnızca birini tanımlayabiliriz.

      if (control1_) {
          setGetter(object, property, argObj[ descs["GET"] ]); // 'get' tanımlıyoruz.
      }
      if (control2_) {
          setSetter(object, property, argObj[ descs["SET"] ]); // 'set' tanımlıyruz.
      }
  }
  return object; // objemizi döndürdük.
};

/**
 * tek fonksiyon ile bir objeye birden fazla property ekliyoruz
 * 
 * @type {function}
 * @param {object} obj - property eklemek iste4diğimiz objemiz. 
 * @param {object} properties - ekliyeceğimiz property'lerin özellikleri
 */
const properties = function properties // birden falza prototip eklmek için kullandığımız bir fonsksiyon
  (
      obj = Object = void 0,
      properties = Object = void 0 
  ) {

  Object.keys(properties).map(prop => {
      if(prop === "__proto__") return; // __proto__ property 'sini almıyoruz ====-> Object.keys(properties).filter(prop => prop !== "__prop__") olarak da kullanabilirsiniz.

      return {
          $Object : obj,
          $Property : prop,
          $ArgObj : properties[prop]
      };
  }).forEach(_ => prototyper(_.$Object , _.$Property , _.$ArgObj) /*__proto__ preperty' si haricindeki obje içerisindeki tüm property' leri "prototyper" fonksiyonunu kullanarak prototip olarak tanımlıyorız*/)
};

/**
 * basit bir test objesi
 * @type {{name : string|number|object}}
 */
let _obje = { name : "31" }; // objemizin ilk ve sade hali

prototyper(_obje , "func" , {val : function writeConsole(sa) { console.log(sa) }}) // objemize bir fonksiyom olan prototip tanımlıyoruz.
prototyper(_obje , "surname" , {val : "s ve J"}) // objemize normal bir prototip tanımlıyoruz.

// objemizi tekrardan kontrol ediyoruz; ====-> console.log(_obje)
// consol çıktısı ===-> { name: '31', func: [Function: writeConsole], surname: 's ve J' } şeklinde olucaktır.

/* Prototyper'ımız başarılı bir biçimde çalışyıor. */

properties(Array.prototype, { // array prototype 'ına (bir obje) birden fazla prototip ekliyoruz.
  findAndGet : { // eklemek istediğiniz prototipin ismi.
      val: function (element = void 0) { // eklemek istediğimiz prototip bir fonksiyon.
          if(typeof element == "number") return ( this[element] ? this[element] : null ) // elementimiz bir sayı ise dizimizdeki içerisindeki index'i o sayı olan elemanı döndürüyruz
          else 
          ;{
              let _return = void 0;

              _return = this.find((_key) => {
                  return ( element === _key);
              });

              return (
                  _return ?
                  _return :
                  null
              );
          };
      }
  },
  remove: { // eklemek istediğiniz prototipin ismi.
      val: function($element = void 0) {
          const length = parseInt(this.length);
          let control = void 0;

          for (let index = 0; index < length; index++) { // arrayımızın uzunluğunda bir for döngüsü oluşturuyoruz ki arraytımız içindeki elemanları teker teker göreblelim
              const _key = this[index] // dizimizdeki "index" sıralamalı elemanımızı tanımlıyoruz
              if (_key === $element) {
                  let _length = index++

                  while (index !== this.length) {
                      const _value = this[index];
                      if (_value !== $element) this[_length++] = _value;
                      index++
                  };

                  this.length = _length;
                  for (let index = _length; index < length; index++) delete this[index]; // dizimiz içindeki elemanları silmemiz için delete operatörünü kullanıyoruz
                  
                  control = true;
              };
          };

          return ( this );
      }
  }
});

prototyper(Array.prototype , "$push" , { enumerable : true , val :function (element) { return [...this , element] } }) // basit bir şekilde prototyper fonksyonumuzu kullanıyoruz
 
/**
 * man classını fonksiyon sayesinde oluşturuyoruz.
 * 
 * @param {array<string|number>} array 
 * @returns {function|class}
 */
function createman(array) { // basit bir "man" classını oluşturma fonskyonu
    let control = Array.isArray(array); // tanımladığımız "array" değişkeninin array olup olmaduğını kontrol editoruz.
    
    switch(control) {
        case true: { // birden fazla koşullu değişkenin her koşulunu temsilen "case" kullanıyoruzç. 
            let _man = new man(void 0);

            let arr = ["name" , "surname" , "age" , "sex"];

            loop(array , (_key , index) => {
                _man[ arr.findAndGet(index) ] = _key;
            })

            return _man;
        };
        
        case false: return console.log(new RangeError("invalid array type."));
        default: break;
    }
}

/**
 * @type {object}
 */
const _man = createman(["AlpSu" , "Surname" , 19 , "male"]) // örnek bir "man class"


module.exports = { // module export'umuz içindeki değerleri "undefined" olarak tanımlıyoruz
  default : { manClass : void 0, createFunc : void 0, example : void 0, loop : void 0, prototyper : void 0 },
  manClass : void 0,
  createFunc : void 0,
  example : void 0,
  loop : void 0,
  prototyper : void 0,
}

prototyper(module.exports, "__esModule", { val: true }); // prototyper fonksiyonumuzu kullanarak "module.exports" objesine "__esModule" property' si ekliyoruz. 

properties(module.exports,  { // properties fonksiyonumuzu kullanarak "module.exports" objesine birden fazla property ekliyoruz.  
  default : { // property - 1
      val: {
          manClass : man,
          createFunc : createman,
          loop: loop,
          example : _man,
          prototyper : prototyper
      }
  },
  manClass : { val: man }, // property - 2
  createFunc : { val: createman },// property - 3
  loop: { val: loop },// property - 4
  example : { val: _man },// property - 5
  prototyper : { val: prototyper },// property - 6
});
