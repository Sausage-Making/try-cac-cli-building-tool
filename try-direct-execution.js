import { cac } from 'cac'
const cli = cac()

// cli
//   .command('<path>', 'Deploy to AWS')
//   .option('--token <token>', 'Your access token')
//   .example('deploy ./dist')

cli
// .command('<string>', 'do sumpin')
// .command('stulle [...files]', 'Build given files')
.usage('direct <path>')
.option('--type <type>', 'Choose a project type')
.example('... --type HUGGAs')
// .help((sections)=>console.log(sections))
.help()
// .version('0.0.1',customFlags)
.version('0.0.1')
.action(path=>console.log('ZUGGA',path))


console.log('HUGGA',cli.parse());

// const parsed = cli.parse()
// console.info(JSON.stringify(parsed, null, 2))
