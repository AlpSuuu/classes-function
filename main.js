
function man(
    name = String = void(0) ,
    surname = String = void(0),
    age = Number = void(0),
    sex = String = void(0)) {

    this.name = name,
    this.surname = surname,
    this.age = age,
    this.sex = sex

    let ID = new Object({
        $name : name,
        $surname : surname,
        $age : age,
        $sex : sex,
    });
    
    this.has = function(argument = String = void 0) {
        if(!argument || !["$name" , "$surname" , "$age" , "$sex"].includes(argument)) return console.error(new SyntaxError("invalid arguments."));
        let _return = Boolean
        
        if(!"$name" in ID) return _return(false)
        else if(!ID["$name"]) return _return(false)
        else return _return(true);
    }

    this.gen = function* () {
        yield new Object({
            "name" : ID["$name"] 
        }) // 1

        yield new Object({
            "surname" : ID["$surname"] 
        }) // 2

        yield new Object({
            "age" : ID["$age"] 
        }) // 3

        yield new Object({
            "sex" : ID["$sex"] 
        }) // 4
    }

    this.gen.prototype.getObj = () => this.next().value;

    this.numGenerator = function* (
        num = Number = void 0,
        targ = Number = 10) {

        let target = targ
        let index = 0
        
        while (index < target) {
            yield `${num+1}-) `;
            index++;
        }
    }
    
    this.numGenerator.prototype.number = function(index = Number = null) {
        return this.next(index).value;
    }

    this.toString = function() {
        let func = this.gen()

        let str = String("");
        let index = 0

        let nexted = func.next();

        while (!nexted.done) {
          
            let obj = nexted.value
            if(!obj instanceof Object) break;

            var _key = Object.keys(obj);
            var _value = Object.values(obj);

            let _numGen = this.numGenerator(index)

            str += `${_numGen.number()}${_key[_key.length - 1]} : ${_value[_value.length - 1]}\n`;

            nexted = func.next()
            index++

        }
        
        return str;
    }

    this.class = class _Class {
        constructor(...args) {
            this.name = void 0
            this.surname = void 0
            this.age = void 0
            this.sex = void 0
        }
    }

    this.ManClass = class ManClass extends this.class {
        constructor(args) {
            super({
                name : args[0] || void 0,
                surname : args[1] || void 0,
                age : args[2 || void 0],
                sex : args[3] || void 0
            })
        }
    }

    this.createClass = function
    (
        callback = Function = void 0
    ) {
        
        if(!callback) return console.error(new Error("pls enter a callback for function."))
        if(typeof callback !== "function") return console.error(new Error("pls enter a valid callback."))
        
        let class_ =  this.ManClass
        let _class = new class_([])

        _class.name = this.name,
        _class.surname  = this.surname,
        _class.age = this.age,
        _class.sex = this.sex
        
        callback.call(void 0 , _class , class_);
    }

}


 const loop = function(
     array = Array = void 0,
     callback = Function = void 0) {

      let check = array instanceof Array
      if(!check) return console.error(new TypeError("invalid array."))
  
  
      let index = 0;

      var arr = array;
  
      var length = arr.length;
  

      if (typeof callback !== "function") { throw(new TypeError(callback + ' is not a function')); }

  
      while (index < length) {
  
        let element = undefined;

        let control = arr.includes(arr[index])

        switch (control) {
            case true: {
                element = arr[index];

                callback.call(void 0 , element , index , arr);
            };

            case false: { break };
            default: { break };
        }

        index++;
      }
};

function createman(array) {
    let control = Array.isArray(array);
    
    switch(control) {
        case true: {
            let _man = new man(void 0);

            let arr = ["name" , "surname" , "age" , "sex"];

            loop(array , (_key , index) => {
                _man[ arr[index] ] = _key;
            })

            return _man;
        };
        
        case false: return new RangeError("invalid array type.");
        default: break;
    }
}
  

const _man = createman(["AlpSu" , "Surname" , 19 , "male"])


module.exports = {
    manClass : man,
    createFunc : createman,
    example : _man,
    loop : loop
}
