import { cac } from 'cac';

const cli = cac('test');
cli.command('creds set <account>', 'set').action((account) => {
  console.log('SET match', account);
});
cli.command('creds get <account>', 'get').action((account) => {
  console.log('GET match', account);
});
cli.command('creds <set_get> <account>', 'get <set|get> <account>').action((set_get,account) => {
  console.log('GET match', set_get, account);
});

cli.parse(['node', 'test', 'creds', 'get', 'foo'], { run: false });
console.log('matched name:', cli.matchedCommand?.name);
await cli.runMatchedCommand();
// cli.runMatchedCommand();
