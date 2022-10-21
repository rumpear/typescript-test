// class Admin {
//   name?: string;
//   role?: number;

//   constructor();
//   constructor(name: string);
//   constructor(role: number);
//   constructor(name: string, role: number);
//   constructor(roleOrName?: string | number, name?: string) {
//     if (typeof roleOrName === 'number') {
//       this.role = roleOrName;
//     }
//     if (typeof roleOrName === 'string') {
//       this.name = roleOrName;
//     }
//     if (typeof name === 'string') {
//       this.name = name;
//     }
//   }
// }

// const superUser = new Admin(4);
// const superUser2 = new Admin('24');
// const superUser3 = new Admin('4', 24);
// const superUser4 = new Admin();
// console.log(superUser);

export {};
