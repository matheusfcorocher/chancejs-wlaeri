# pickone

## ES Module

```ts
// tree-shakeable import
import { pickOne } from "chance";

//usage
pickone({array})

//Example
//returns 'delta'
pickOne({array: ['alpha', 'bravo', 'charlie', 'delta', 'echo']})
```

Returns a random element from array.

## Class Instantiation

Alternatively, you can create an instance of a `Chance` class and call the `pickOne` method.
This approach avoids instantiating a new PRNG instance on every function call.

```ts
// import the Chance class
import { Chance } from "chance";

const chance = new Chance("my-random-seed");

// returns 'alpha'
chance.pickOne({array: ['alpha', 'bravo', 'charlie', 'delta', 'echo']});
```
