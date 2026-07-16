// @ts-check

import { cac } from 'cac';

const program = cac('test');

program
.option('-r, --reverse','')
.option('--sort <prop>','')
.option('-e [value]','')
.option('-E [value]','')
.option('-f <value>','');

let opts;

opts=program.parse(['','','-re']);
console.log('AUGGA',opts);

opts=program.parse(['','','-erE','bu']);
console.log('BUGGA',opts);

opts=program.parse(['','','-e', '-r']);
console.log('CUGGA',opts);

opts=program.parse(['','','-f', '-r']);
console.log('DUGGA',opts);

opts=program.parse(['','','--reverse', '--sort bu']);
console.log('EUGGA',opts);

opts=program.parse(['','','--reverse', '-e']);
console.log('FUGGA',opts);

opts=program.parse(['','','--sort', '-e']);
console.log('GUGGA',opts);
