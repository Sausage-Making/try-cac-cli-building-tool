import { cac } from 'cac'
const cli = cac()

cli
.option('--type [type]', 'Choose a project type')
.example('... --type HUGGAs')
.help()
.version('0.0.1')
.parse()

// const parsed = cli.parse()
// console.info(JSON.stringify(parsed, null, 2))
