const ZKLib = require('zklib')
const test = async () => {
 

let options  = {
    ip:'192.168.131.153',
    port: 4370,
    inport:10000,
    timeout: 4000
} 
let zkInstance = new ZKLib(options);
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