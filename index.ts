import { cac } from 'cac';
// @ts-ignore
import * as process from 'node:process';

let myArgv=process.argv;
console.log('AUGGA',myArgv);
// myArgv=myArgv.slice(1);
// myArgv=['udo','horst'].concat(myArgv.slice(1));
// console.log('ZUGGA',myArgv);
const cli = cac("sample-app");
// cli.command("", "show process.argv")
// .action(() => {
//   console.log('BUGGA',process.argv);
//   console.log('YUGGA',myArgv);
// });
cli.command("hello", "say hello world")
.action(() => {
  console.log("Hello World!");
});
const parsed = cli.parse();
// const parsed = cli.parse(process.argv);
console.log(parsed);
