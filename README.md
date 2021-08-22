## classes-function
a basic class functions for public websites

## LICENSE
[MIT License](https://github.com/AlpSuuu/classes-function/blob/main/LICENSE)
## Example

```js
const functions = require("./main").default;

const { example , manClass , loop , prototyper } = functions;

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
```

