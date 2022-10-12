// * generic fn

type reverseFn = <T>(arr: T[]) => T[];

const reverseArr: reverseFn = (arr) => {
  return [...arr].reverse();
};

// console.log(reverseArr<number>([1, 2, 3, 4, 5]));
// console.log(reverseArr(["Axel", "Victor", "Pavlic"]));

const isEqual = <T, Y>(a: T, b: Y) => {
  return Object.is(a, b);
};

// console.log(isEqual(2, 2));
// console.log(isEqual(true, "true"));

const makeArr = <T, Y>(a: T, ...rest: Y[]) => {
  return [a, ...rest];
};

// console.log(makeArr(2, 2, 44, 62, 31));
// console.log(makeArr(true, "Axel", "Victor", "Pavlic"));

// * extends
interface IPerson {
  name: string;
  surname: string;
}

const addFullName = <T extends IPerson>(person: T) => {
  return {
    ...person,
    fullName: person.name + " " + person.surname,
  };
};

// console.log(addFullName({ name: "Roman", surname: "Grusha", age: 28 }));

// * generic interfaces
interface ITab<T> {
  id: string;
  position: number;
  isActive: boolean;
  content: T;
}

const Tab: ITab<string> = {
  id: "1",
  position: 0,
  isActive: true,
  content: "Active tab",
};

const oldTab: ITab<null> = {
  id: "2",
  position: 33,
  isActive: false,
  content: null,
};

// console.log(Tab, oldTab);

type TAnimationType = "playing" | "paused";
type THttpStatus = 200 | 404 | 500;

const makeState = <T>(initialState: T) => {
  let state = initialState;

  const getState = () => {
    return state;
  };
  const setState = (newState: T) => {
    return (state = newState);
  };

  return { getState, setState };
};

const animationState = makeState<TAnimationType>("playing");
console.log(animationState.getState());

const httpState = makeState<THttpStatus>(404);
console.log(httpState.getState());

export {};
