var moment = require('moment');
var recursiva = function () {
 
console.log(moment().format());
//console.log(moment().hours());
//console.log(moment().isoWeek());

 
  setTimeout(recursiva,1000);
}
recursiva();
