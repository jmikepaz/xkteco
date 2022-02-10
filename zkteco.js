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
        zkInstance.connect(function() {
            zkInstance.getAttendance(function(err, data) {
              zkInstance.disconnect();
          
              if (err) throw err; 
          
              console.log(data.toString());
            });
          });

    } catch (e) {
        console.log(e)
        if (e.code === 'EADDRINUSE') {
        }
    }
    
} 
conected()
