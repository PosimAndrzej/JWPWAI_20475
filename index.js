import stripAnsi from 'strip-ansi';

console.log('stripAnsi, jest modułem, który obcina ANSI escape code z tekstu. \nPozwala to na pozbycie się formatowania tekstu.');

console.log('\u001B[4mUnicorn\u001B[0m');
//=> 'Unicorn'

console.log(stripAnsi('\u001B[4mUnicorn\u001B[0m'));
//=> 'Unicorn'

console.log('\u001B]8;;https://github.com\u0007Click\u001B]8;;\u0007');
//=> 'Click'

console.log(stripAnsi('\u001B]8;;https://github.com\u0007Click\u001B]8;;\u0007'));
//=> 'Click'

