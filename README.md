## classes-function
a basic class functions for public websites

## Example

```js
const functions = require("./main").default;

const { example , manClass , loop } = functions;

console.log(example); // basic example.

let _class = new manClass("ur_name" , "ur_username" , "ur_age" , "ur_sex");

console.log(_class); // ur created class.

let array = ["i" , "love" , "you" , "<3"];

loop(array , function(_element , _index , _array , _removed) {
  console.log(_element);
  console.log(_index);
  console.log(_array);
  console.log(_removed);
}) // ur loop function
```

