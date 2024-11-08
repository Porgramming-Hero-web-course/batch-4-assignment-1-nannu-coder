We know Javascript is a dynamic typed languge which dosen't have types beyond the primitives.Typescript is a typed language that compiles to javascript. Today I'm going to talk about typescript union and intersection types.

## union types

basically union types are used when a value can be more than a single type. Union type makes it possible to choose one of many possibilities.

```
let result = number | string;

result = 10 // OK
result = "HI" // also OK
result = false // a boolean value, not OK
```

a union type descripe a value can be one of several different types, not just two.
For example `number | string | boolean` .

## intersection type

Now I'm going to talk about the intersection type. intersection types allow us to combine multiple types into one.

suppose you have two interfaces.

```
interface BusinessPartner {
name: string;
credit: number;
}

interface Identity {
id: number;
name: string;
}

interface Contact {
email: string;
phone: string;
}
```

Now, defines two intersection types.

```
type Employee = Identity & Contact;
type Customer = BusinessPartner & Contact;
```

The Employee type contains all properties of the Identity and Contact type:

```
type Employee = Identity & Contact;

let e: Employee = {
id: 100,
name: 'John Doe',
email: 'john.doe@example.com',
phone: '(408)-897-5684'
};
```

And the Customer type contains all properties of the BusinessPartner and Contact type:

```
type Customer = BusinessPartner & Contact;

let c: Customer = {
name: 'ABC Inc.',
credit: 1000000,
email: 'sales@abcinc.com',
phone: '(408)-897-5735'
};
```

Both union and intersection types are very useful for developers. Its makes developers life easy to develope a product.
