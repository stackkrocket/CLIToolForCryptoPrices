const { program } = require('commander');
const check = require('../commands/check.js');

program
  .command('price')
  .description('Check prices of coins')
  .option(
    '--coin <type>',
    'Add specific coin types in CSV format',
    'BTC, ETH, XRP'
  )
  .option('--currency <currency>', 'Chnage currency', 'USD')
  .action((cmd) => {
    check.price(cmd);
  });

program.parse(process.argv);
