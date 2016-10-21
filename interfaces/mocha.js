// Mocha declarations
declare function describe(desc: string, suite: Function): void;
declare function it(desc: string, test: (done?: Function) => ?Promise) : void;
// Chai declarations
declare function expect(item: any): Object;
// Add should from chai-as-promised
declare class Promise extends window.Promise {
  should: Object
};
