const arr: readonly [number, string, ...boolean[]] = [3, 'item', true, false];
console.log(arr);
export {};

// * UNION
type TUnionId = string | number | boolean;
type TLogId = (id: TUnionId) => void;

const logId: TLogId = id => {
  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  } else if (typeof id === 'number') {
    console.log(id.toFixed());
  } else {
    console.log(id.valueOf());
  }
};

// logId(2.5);
// logId('hello');
// logId(true);

const logObj = (obj: { name: string } | { height: number }) => {
  if ('name' in obj) {
    console.log(obj.name);
  } else {
    console.log(obj.height);
  }
};

logObj({ name: 'Roman' });
logObj({ height: 180 });

const logMultipleTypeId = (foo: string | boolean, bar: string | number) => {
  if (foo === bar) {
    console.log(foo + bar);
  }
};

logMultipleTypeId('hello ', 'world');

// * LITERAL TYPES
// const httpMethod = 'post' || 'get';
// const fetchData = (url: string, method: 'post' | 'get') => {
//   console.log(url);
//   console.log(method);
// };

// fetchData('https', 'post');
// fetchData('https', 'something' as 'post'); // as

type httpMethod = 'post' | 'get';

const fetchData = (url: string, method: httpMethod) => {
  console.log(url);
  console.log(method);
};

fetchData('https', 'post');

//* types intersection
// type User = {
//   name: string;
//   height: number;
// };

// type Education = {
//   school: string;
//   university: string;
// };

// type UserEducation = User & Education;

// const newUser: UserEducation = {
//   name: 'Roman',
//   height: 180,
//   school: '18',
//   university: 'CHNU',
// };
// console.log(newUser);

interface User {
  name: string;
  height: number;
}

interface Education {
  school: string;
  university: string;
}

interface UserEducation extends User, Education {
  graduatedAt: string;
}

const newUser: UserEducation = {
  name: 'Roman',
  height: 180,
  school: '18',
  university: 'CHNU',
  graduatedAt: '20-10-2020',
};
// console.log(newUser);

// * unknown

const getData = () => {
  const data: string[] = [];
  try {
    return data;
  } catch (error) {
    const e = error as Error;
    console.log(e.message);
  }
};

//  * never

const createError = (message: string): never => {
  throw new Error(message);
};

type TAction = 'refund' | 'checkout';

const paymentAction = (action: TAction) => {
  switch (action) {
    case 'refund':
      break;
    case 'checkout':
      break;

    default:
      const _: never = action;
      createError('Something went wrong');
      break;
  }
};
