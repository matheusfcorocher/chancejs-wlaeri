# month

## ES Module

```ts
// tree-shakeable import
import { month } from "chance";

//usage
//month({raw?:boolean, min?:number, max?:number}?, seed?)

//Example
//returns 'January'
month();
```

Return a random month. By default, returns just the full name.

Optionally specify raw to get the whole month object consisting of name,
short_name, numeric and days.

```ts
// {name: 'October', short_name: 'Oct', numeric: 10, days: 31}
month({raw: true});
```

Also, you can specify min and max to return an interval which months do you want to return.

```ts
// Returns months name between May and October
//Returns July
month({min: 5, max: 10});
```

## Class Instantiation

Alternatively, you can create an instance of a `Chance` class and call the `month` method.
This approach avoids instantiating a new PRNG instance on every function call.

```ts
// import the Chance class
import { Chance } from "chance";

const chance = new Chance("my-random-seed");


//Example
//returns 'January'
chance.month();
```
