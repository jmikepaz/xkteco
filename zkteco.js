const ZKLib = require('zklib');
 
const zkInstance = new ZKLib({
  ip: '192.168.131.153',
  port: 4370,
  inport: 5200,
  timeout: 5000,
});
async function conected() {
    
    try {
        // Create socket to machine 
        console.log(zkInstance); 
        // Get general info like logCapacity, user counts, logs count
        // It's really useful to check the status of device 
        console.log(await zkInstance.connectionType)
        zkInstance.connect(function(err) {
            if (err) throw err;
           
            // read the time info from th device
            zkInstance.getAttendance(function(err, t) {
              // disconnect from the device
              zkInstance.disconnect();
           
              if (err) throw err;
           
              console.log("Device clock's time is " +t);
            });
          });


    } catch (e) {
        console.log(e)
        if (e.code === 'EADDRINUSE') {
        }
    }
    
} 
conected()
