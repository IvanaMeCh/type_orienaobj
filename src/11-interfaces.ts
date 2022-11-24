export interface Driver {
  database: string;
  password: string;
  port: number;

  conect (): void;
  disconnect (): void;
  isConeected (name: string): boolean;
}

// const driver: Driver = {
//     database: '',
//     password: '',
//     port: 23,
// }

class PostresDriver implements Driver{
  constructor (
      public database: string,
      public password: string,
      public port: number,
  ) {

  }

  conect (): void {}
  disconnect (): void {}
  isConeected (name: string): boolean {
      return true;
  }
}
