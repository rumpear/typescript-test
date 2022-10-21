abstract class Logger {
  abstract log(message: string): void;
  printDate = () => {
    console.log(new Date().toISOString());
  };
}

class myLogger extends Logger {
  log = (message: string): void => {
    console.log(message);
  };

  logWithDate = () => {
    this.log('The time is: ');
    this.printDate();
  };
}

const foo = new myLogger();
foo.logWithDate();

export {};
