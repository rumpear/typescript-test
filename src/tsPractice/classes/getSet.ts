class User {
  _name: string;
  //   age: number;
  set name(name: string) {
    this._name = 'username ' + name;
  }
  get name() {
    return this._name;
  }

  constructor(name: string) {
    this._name = name;
  }
}

const Roman = new User('Roman');
// Roman.name = 'Who';
console.log(Roman.name);
console.log(Roman);

export {};
