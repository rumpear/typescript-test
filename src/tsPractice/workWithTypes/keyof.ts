interface IUser {
  id: number;
  name: string;
}

const userData: IUser = { id: 1, name: 'Roman' };

const groupData = [
  { group: 0, name: 'a' },
  { group: 1, name: 'b' },
  { group: 2, name: 'c' },
  { group: 3, name: 'd' },
  { group: 3, name: 'e' },
  { group: 2, name: 'f' },
  { group: 1, name: 'g' },
  { group: 1, name: 'e' },
  { group: 1, name: 'f' },
];

const getUserData = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

const groupByKey = <D, K extends keyof D>(data: D[], key: K) => {
  const keysSet = new Set();

  data.forEach(item => {
    return keysSet.add(item[key]);
  });

  const keys = Array.from(keysSet);

  const dataArr = keys.map(num => {
    return data.filter(item => {
      return item[key] === num;
    });
  });

  const dataWithKeys = dataArr.map(item => {
    const group = item[0][key];
    return { group, item };
  });

  return dataWithKeys;
};

type TKey = string | number;

interface IAcc<T> {
  [key: string]: T[];
}

interface IGroupedObj<T> {
  [x: string]: T[];
}

// interface IGroupByProp {
//   <T extends Record<TKey, any>, K extends keyof T>(
//     data: T[],
//     property: K,
//   ): IGroupedObj<T>;
// }

const groupByProp = <T extends Record<TKey, any>, K extends keyof T>(
  data: T[],
  property: K,
): IGroupedObj<T> => {
  const groupedObj = data.reduce((acc: IAcc<T>, item: T) => {
    const key: TKey = item[property];
    const currentArr = acc[key] ?? [];
    return { ...acc, [key]: [...currentArr, item] };
  }, {});
  return groupedObj;
};

// groupByProp();
console.log(groupByProp(groupData, 'group'));

export {};
