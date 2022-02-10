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
  console.log('Conetado');
 
  // read the time info from th device
  ZK.getAttendance(function(err, data) {
    if (err) throw err;
    console.log( data );
  });
});