const timeZones = require("../data/timezones.json");

const convert = (currentTimeZone, convertToZone, currentTime) => {
//   let hours = currentTime.split(":")[0];
//   let min = currentTime.split(":")[1];
//   let currentMilisec=(hours*3600000)+(min*60000);
//   console.log(currentMilisec*5.3);
  let currentOffset = timeZones[currentTimeZone]["offset"];
  let convertOffset = timeZones[convertToZone]["offset"];
  let totalOffset = convertOffset-currentOffset;
   // convert the current time to a date object
   const date = new Date(`01/01/2000 ${currentTime}`);
   const time_diff = totalOffset * 60 * 60 * 1000;

   // add the time difference in the old time and form the date
   date.setTime(date.getTime() + time_diff);

   // convert the result back to a string in the desired format
   const converted_time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric'});
   return converted_time;



























//   console.log(totalOffset*3600000);
//   var utc = currentMilisec + (currentOffset *60*60000);
// //   var nd = new Date(utc + 3600000 * );
//   console.log(utc);
//   return utc;

  const NewTimezone = (current_time, total_offset) => {
    
    // convert the current time to a date object
    const date = new Date(`01/10/2010 ${current_time}`);
    const time_diff = total_offset * 60 * 60 * 1000;

    // add the time difference in the old time and form the date
    date.setTime(date.getTime() + time_diff);

    // convert the result back to a string in the desired format
    const converted_time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric'});
    return converted_time;
}

module.exports = NewTimezone;

  console.log(utc);
  console.log(nd.toLocaleString());
  console.log(totalOffset);
  //   var b = new Date();
  //   console.log("local  time", b.toLocaleString());
  //   console.log(hours);
  //   console.log(currentMilisec);
  //   var utc = currentMilisec + (currentOffset*60) * 60000;
  //   console.log("UTC",utc);
  //   var nd = new Date(utc + (3600000 * (-convertOffset*60)));
  //   console.log(nd);
  //   //   console.log(nd.toLocaleString());
  //   return nd;
};
module.exports = convert;
