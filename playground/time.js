var moment = require('moment');

var createdAt = 3155760000;
var date = moment(createdAt);
// date.add(0,'year').subtract(9,'months');
console.log(date.format('MMM Do, YYYY'));
  console.log(date.format('h:mm a'));
