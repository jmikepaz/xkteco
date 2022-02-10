const ZKLib = require('zklib');
 
let zkInstance = new ZKLib({
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
        console.log(await zkInstance.getInfo())
    } catch (e) {
        console.log(e)
        if (e.code === 'EADDRINUSE') {
        }
    }
    
} 
conected()
