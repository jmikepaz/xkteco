const ZKLib = require('zklib');
 
ZK = new ZKLib({
  ip: '192.168.131.153',
  port: 4370,
  inport: 5200,
  timeout: 5000,
});
 
// connect to access control device
ZK.connect(function(err) {
  if (err) throw err;
 
  // read the time info from th device
  ZK.getTime(function(err, t) {
    // disconnect from the device
    ZK.disconnect();
 
    if (err) throw err;
 
    console.log("Device clock's time is " + t.toString());
  });
});