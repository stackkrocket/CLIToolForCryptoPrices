const inquirer = require('inquirer');
let { KeyManager } = require('../lib/KeyManager.js');

const key = {
  async set() {
    const keyManager = new KeyManager();
    const input = await inquirer.prompt([
      {
        type: 'input',
        name: 'key',
        message: 'Enter API Key --- https://www.nomics.com',
        validate: function isRequired(input) {
          if (input === '') {
            return 'This value is required';
          }
          return true;
        },
      },
    ]);

    const key = keyManager.setKey(input.key);

    if (key) {
      console.log('API Key Set');
    }
  },

  show() {
    let keyManager = new KeyManager();
    const key = keyManager.getKey();

    console.log('Current API Key', key);

    return key;
  },

  remove() {
    const keyManager = new KeyManager();
    keyManager.deleteKey();
    console.log('API Key has been deleted');

    return;
  },
};

module.exports = key;
