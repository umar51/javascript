
var t1 = new Date("January 21 1994 00:00:00");
var t2 = new Date();

var timedif= t2.getTime() - t1.getTime();

console.log(t2)
console.log(t1)

console.log("in milisecond time difference =" + timedif)

var timeinday = 1000*60*60*24*365;
var timedifdays = timedif/timeinday;

console.log("in years time difference =" + timedifdays)