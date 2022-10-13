// * enum
enum PizzaSize {
  Small = 's',
  Medium = 'm',
  Large = 'x',
}

// console.log(PizzaSize.Medium);

enum StatusCode {
  SUCCESS = 1,
  PENDING = 2,
  REJECTED = 3,
}

const res = {
  message: 'payment was successful',
  code: StatusCode.SUCCESS,
};
console.log(res);

export {};
