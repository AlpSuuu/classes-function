## classes-function
a basic class functions for public websites

## LICENSE
[MIT License](https://github.com/AlpSuuu/classes-function/blob/main/LICENSE)
## Example

```js
const functions = require("./main").default;

const { example , manClass , loop , prototyper , nexter , awaiter } = functions;

console.log(example); // basic example.

let _class = new manClass("ur_name" , "ur_username" , "ur_age" , "ur_sex");

console.log(_class); // ur created class.

const Obj = {name : "AlpSu"}

prototyper(Obj , "age" , { val : 19 });

console.log(Obj) // ur prototyped object.

let array = ["i" , "love" , "you" , "<3"];

loop(array , function(_element , _index , _array , _removed) {
  console.log(_element);
  console.log(_index);
  console.log(_array);
  console.log(_removed);
}) // ur loop function.

function* GeneratorFunction($param1 , $param2 , $param3 , $param4) {
    yield $param1;
    yield $param2;
    yield $param3;
    yield $param4;
}

let Function = GeneratorFunction(...array)

nexter(Function , (_value , _index , _done , _entries) => {
    console.log(_value);
    console.log(_index);
    console.log(_done);
    console.log(_entries);
}) // ur nexter function

function PromiseFunction(any) {
    return new Promise((res , rej) => {
        if(any) res(any)
        else rej(undefined)
    })
}

awaiter(this , void 0 , void 0 , function* () {
    let output = yield PromiseFunction("alpsuu")
    console.log(output) // 
})
```

