enum PaymentStatus {
  Hold,
  Finished,
  Returned,
}

// interface IPayment {
//   id: number;
//   status: PaymentStatus;
//   createdAt: Date;
//   updatedAt: Date;
// }

// interface IPaymentParams {
//   id: number;
//   status: PaymentStatus;
//   createdAt: Date;
//   updatedAt: Date;
// }

class Payment {
  id: number;
  createdAt: Date;
  updatedAt?: Date;
  status: PaymentStatus;

  constructor(id: number) {
    this.id = id;
    this.status = PaymentStatus.Hold;
    this.createdAt = new Date();
  }

  getPaymentLifeTime() {
    return new Date().getTime() - this.createdAt.getTime();
  }

  unholdPayment() {
    if (this.status === PaymentStatus.Returned) {
      throw new Error('Something went wrong');
    }
    this.status = PaymentStatus.Finished;
    this.updatedAt = new Date();
  }
}

const newTransaction = new Payment(12);
setTimeout(() => {
  console.log(newTransaction.getPaymentLifeTime());
}, 2000);

class User {
  skills: string[];

  constructor(skills: string[]) {
    this.skills = skills;
  }

  addSkills(skill: string): void;
  addSkills(skills: string[]): void;
  addSkills(skillOrSkills: string | string[]) {
    if (typeof skillOrSkills === 'string') {
      this.skills.push(skillOrSkills);
    }
    if (Array.isArray(skillOrSkills)) {
      this.skills = [...this.skills, ...skillOrSkills];
    }
  }
}

const Roman = new User(['HTML, CSS, JavaScript, TypeScript, React, NodeJS']);
// const Victor = new User('JS');
Roman.addSkills('English');
Roman.addSkills(['Soft skills', 'Hard skills']);
console.log(Roman);
export {};
