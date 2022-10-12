// let foo = 3;
// foo = "string";
// console.log(foo);

// let bar: string = "foo";
// console.log(bar);

// const temps: readonly number[] = [30, 20, 12, 29];
// temps.push(3);
// const cords: [number, number] = [50.2444, 20.5204];
// console.log(temps, cords);

// const baz = Object.entries({ a: 2, b: 4, c: "34" });
// for (const i of baz) {
//   console.log(i);
// }

// * type
// type ArrNum = readonly number[];
// type TupleNum = [number, number];
// const temps: ArrNum = [30, 20, 12, 29];
// const cords: TupleNum = [50.2444, 20.5204];

// type reqCode = 200 | 404 | 500;
// const request: reqCode = 404;

// console.log(temps, cords, request);

// * interfaces
// interface PluginConfig {
//   selector: string;
//   perPage?: number;
//   startIndex?: number;
//   draggable?: boolean;
// }

// const config: PluginConfig = {
//   selector: "plugin",
//   perPage: 10,
//   startIndex: 1,
//   draggable: false,
// };

// // console.log(config);

// interface Employees {
//   [key: string]: number;
// }

// const employees: Employees = {
//   Axel: 50,
//   Rose: 20,
//   Victor: 31,
// };

// console.log(employees);

// * extends
// interface Body {
//   weight: number;
// }

// interface Human extends Body {
//   age: number;
// }

// const Axel: Human = {
//   weight: 20,
//   age: 30,
// };

// console.log(Axel);

// * func
// type AddNumbers = (a: number, b: number) => number;

// interface IDivideNumbers {
//   (a: number, b: number): number;
// }

// const addNumbers: AddNumbers = (a, b) => {
//   return a + b;
// };

// const divideNumbers: IDivideNumbers = (a, b) => {
//   return a / b;
// };

// console.log(addNumbers(5, 5), "addNumbers");
// console.log(divideNumbers(10, 2), "divideNumbers");

// enum PizzaSize {
//   Small = "s",
//   Medium = "m",
//   Large = "l",
// }

// type Size = PizzaSize.Small | PizzaSize.Medium | PizzaSize.Large;

// interface IPizza {
//   size: Size;
//   toppings: string[];
//   logSize?(): void;
//   addTopping?(topping: string): void;
// }

// const pizza: IPizza = {
//   size: PizzaSize.Small,
//   toppings: ["sauce", "mushrooms"],
//   logSize() {
//     console.log(this.size);
//   },
//   addTopping(topping) {
//     this.toppings.push(topping);
//   },
// };

// console.log(pizza, "pizza");

// * classes

interface Params {
  size: string;
  topping: string[];
}

interface IPizza {
  size: string;
  topping: string[];
  addTopping(topping: string): void;
}

class Pizza implements IPizza {
  public size: string;
  public topping: string[];

  constructor({ size, topping = ['cheese'] }: Params) {
    this.size = size;
    this.topping = topping;
  }

  public addTopping(topping: string) {
    this.topping.push(topping);
  }

  private logTopping() {
    console.log(this.topping);
  }
}

const newPizza: IPizza = new Pizza({ size: 'm', topping: ['cream'] });
newPizza.addTopping('pepper');

console.log(newPizza);

export {};
