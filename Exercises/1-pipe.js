'use strict';

const pipe = (...fns) => {
  if (!fns.length) {
    throw new Error('All compose arguments should be functions');
  }
  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new Error('All compose arguments should be functions');
    }
  }
  return (arg) => fns.reduce((acc, fn) => fn(acc), arg);
};

module.exports = { pipe };
