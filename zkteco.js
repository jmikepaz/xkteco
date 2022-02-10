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
  ZK.getUser(function(err, user) {
    if (err) throw err;
    console.log( user );
  });
});