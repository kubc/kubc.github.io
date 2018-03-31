'use strict';

const rif = require('replace-in-file');
const fs = require('fs');
const options = {
  files: '*.html',
  from: /<t (.+) t>/g,
  to: (...args) => {
    const filename = args[1];
    return `${filename}?${fs.lstatSync(filename).mtimeMs / 1000 | 0}`;
  }
};
try {
  const changes = rif.sync(options);
  console.log(changes);
} catch (error) {
  console.error(error);
}