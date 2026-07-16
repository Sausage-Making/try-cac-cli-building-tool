import cac from 'cac'
const cli = cac()

cli
  .command('rm <dir>', 'Remove a dir')
  .option('-r, --recursive', 'Remove recursively')
  .action((dir, options) => {
    console.log(`remove ${dir}${options.recursive ? ' recursively' : ''}`)
  })

cli
.option('--type <type>', 'Choose a project type')
.example('... --type HUGGAs')
.version('0.0.1')

cli.help()

cli.parse()
