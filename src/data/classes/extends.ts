type TPaymentStatus = 'new' | 'paid';

class Payment {
  id: number;
  status: TPaymentStatus = 'new';

  constructor(id: number) {
    this.id = id;
  }

  pay() {
    this.status = 'paid';
  }
}

const transaction = new Payment(3423);
transaction.pay();
console.log(transaction);

class PersistedPayment extends Payment {
  cost: number;
  date?: Date;

  constructor(cost: number) {
    super(cost);
    this.cost = cost;
  }

  override pay() {
    this.date = new Date();
  }
}

const newPayment = new PersistedPayment(40);
newPayment.pay();
// newPayment.id = 3;
console.log(newPayment);

class HttpError extends Error {
  code: number = 500;

  constructor(message: string, code?: number) {
    super(message);
    if (code) {
      this.code = code;
    }
  }
}

const error = new HttpError('Something went wrong');
console.log(error.message, error.code);

export {};
