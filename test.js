const { adjustTimezone } = require('./index');

console.log(adjustTimezone(new Date(), -550, 'SERVER_TO_CLIENT'));

console.log(adjustTimezone(new Date(), -550, 'CLIENT_TO_SERVER'));