import { cac } from 'cac';

const cli = cac("sample-app");
cli.command("hello", "say hello world").action(() => {
  console.log("Hello World!");
});
const parsed = cli.parse();
// console.log(parsed);
