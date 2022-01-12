#!/usr/bin/env node
const { program } = require('commander');

program
  .version('1.0.18')
  .command('key', 'Manage API key from https://www.nomics.com')
  .command('check', 'Check coin price information')
  .parse(process.argv);
