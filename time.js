
var b=new Date();
console.log("local  time",b.toLocaleString())
console.log(b.getTimezoneOffset(),b.getTime())
var utc=b.getTime()+b.getTimezoneOffset()*60000;
console.log(utc)
var nd=new Date(utc+(3600000*(-7)))
console.log(nd.toLocaleString())