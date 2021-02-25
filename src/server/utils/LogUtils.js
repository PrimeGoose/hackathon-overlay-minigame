const logger = require('./logger');

function bindAndLog(promisable, thisArg) {
  return (...args) => {
    return promisable.apply(thisArg, args).catch(e => logger(e.message));
  };
}

function logOnCatch(promisable) {
  return promisable.catch(e => logger(e.message));
}

module.exports = {
  bindAndLog,
  logOnCatch
};
