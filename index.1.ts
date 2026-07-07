import { cac } from 'cac';
import * as process from 'node:process';

console.log('SUGGA',process.argv)
const myArgv=process.argv;
const cli = cac("sample-app");
cli.command("hello", "say hello world")
.action(() => {
  console.log("Hello World!");
});
console.log('TUGGA',myArgv);
// cli.parse();
// console.log(cli.parse());
cli.addEventListener('command:*', () => {
  console.error('Invalid command: %s', cli.args.join(' '))
  process.exit(1)
})
const parsed = cli.parse(myArgv,{run:true});
// const parsed = cli.parse();
console.log(parsed);
// cli
// .parse()
// .action(() => {
//   console.log("Hello World!");
// });
