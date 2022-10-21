let age: number = 50;
let name: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;
let callback = (a: number): number => {
  return 100 + a;
};

let anything: any = -20;
anything = 'Text';
anything = {};

let person: readonly [string, number] = ['Max', 21];

enum LoadingStatus {
  Loading = 'Page is loading',
  Ready = 'Page is ready',
}

const page = {
  status: LoadingStatus.Ready,
};

type TShowMessage = (message: string) => void;
const showMessage: TShowMessage = message => {
  console.log(message);
};

// type TCalc = (num1: number, num2: number) => number;
// function calc(num1, num2): TCalc {
//   return num1 + num2;
// }

function customError(): never {
  throw new Error('Error');
}

type TStatus = 'open' | 'close';

type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: TStatus;
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};

console.log(
  age,
  name,
  toggle,
  empty,
  notInitialize,
  callback,
  anything,
  person,
  showMessage,
  page,
  customError,
);

export {};
