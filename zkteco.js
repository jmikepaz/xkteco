
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


    // Get all logs in the machine 
    // Currently, there is no filter to take data, it just takes all !!
    const logs = await zkInstance.getAttendances()
    console.log(logs)


    const attendances = await zkInstance.getAttendances((percent, total)=>{
        // this callbacks take params is the percent of data downloaded and total data need to download 
    })
    
    console.log(attendances);

 
    
    // Get the device time
    const getTime = await zkInstance.getTime();
		  console.log(getTime.toString());

    // Disconnect the machine ( don't do this when you need realtime update :))) 
    await zkInstance.disconnect()

}

test()

 