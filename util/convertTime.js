const timeZones = require("../data/timezones.json");

const convert = (currentTimeZone, convertToZone, currentTime) => {

  let currentOffset = timeZones[currentTimeZone]["offset"];
  let convertOffset = timeZones[convertToZone]["offset"];
  let totalOffset = convertOffset-currentOffset;

   // create Dummy date
   const date = new Date(`01/01/2000 ${currentTime}`);
   const time_diff = totalOffset * 60 * 60 * 1000;

   // add the time difference in the old time and f the date
   date.setTime(date.getTime() + time_diff);

   // convert the retult of above into date
   const converted_time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric'});
   return converted_time;

};
module.exports = convert;
