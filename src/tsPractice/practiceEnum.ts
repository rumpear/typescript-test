// enum Status {
//   SUCCESS = 'success',
//   FAILED = 'failed',
// }

// interface IPayment {
//   sum: number;
//   from: number;
//   to: number;
// }

// interface ISuccessfulData extends IPayment {
//   databaseId: number;
// }

// interface IUnsuccessfulData {
//   errorMessage: string;
//   errorCode: number;
// }

// interface ISuccessfulRes {
//   status: Status.SUCCESS;
//   data: ISuccessfulData;
// }

// interface IUnsuccessfulRes {
//   status: Status.FAILED;
//   data: IUnsuccessfulData;
// }

// type TRes = ISuccessfulRes | IUnsuccessfulRes;
// type TGetPaymentData = (res: TRes) => number;

// const isSuccessfulRes = (res: TRes): res is ISuccessfulRes => {
//   return res.status === Status.SUCCESS;
// };

// const getPaymentData: TGetPaymentData = res => {
//   //   const { data } = res;
//   if (isSuccessfulRes(res)) {
//     return res.data.databaseId;
//   } else {
//     return res.data.errorCode;
//   }
// };

// const response = {
//   status: 'success', //!error
//   //   status: 'success' as Status.SUCCESS, //!errorFix
//   data: {
//     databaseId: 24,
//     sum: 523,
//     from: 1,
//     to: 2,
//   },
// };
// getPaymentData(response);

//  Types of property 'status' are incompatible.
//  Type 'string' is not assignable to type 'Status.FAILED'.

//* fix the error without enum

type Status = 'success' | 'failed';

const status: Record<string, Status> = {
  SUCCESS: 'success',
  FAILED: 'failed',
};

interface IPayment {
  sum: number;
  from: number;
  to: number;
}

interface ISuccessfulData extends IPayment {
  databaseId: number;
}

interface IResponse<TData> {
  status: Status;
  data: TData;
}

interface IUnsuccessfulData {
  errorMessage: string;
  errorCode: number;
}

type ISuccessfulRes = IResponse<ISuccessfulData>;
type IUnsuccessfulRes = IResponse<IUnsuccessfulData>;

type TRes = ISuccessfulRes | IUnsuccessfulRes;
type TGetPaymentData = (res: TRes) => number;

const isSuccessfulRes = (res: TRes): res is ISuccessfulRes => {
  return res.status === status.SUCCESS;
};

const getPaymentData: TGetPaymentData = res => {
  const isSuccessful = isSuccessfulRes(res);

  if (isSuccessful) {
    return res.data.databaseId;
  }
  return res.data.errorCode;
};

const response: ISuccessfulRes = {
  status: 'success',
  data: {
    databaseId: 24,
    sum: 523,
    from: 1,
    to: 2,
  },
};
getPaymentData(response);

export {};
