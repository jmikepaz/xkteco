const ZKLib = require('zklib')
const test = async () => {
 
 
let zkInstance = new ZKLib('192.168.131.153', 4370, 10000, 4000);
    try {
        // Create socket to machine 
        await zkInstance.createSocket()
 
 
        // Get general info like logCapacity, user counts, logs count
        // It's really useful to check the status of device 
        console.log(await zkInstance.getInfo())
    } catch (e) {
        console.log(e)
        if (e.code === 'EADDRINUSE') {
        }
    }
 
 
    // Get users in machine 
    const users = await zkInstance.getUsers()
    console.log(users) 
}
 
test()