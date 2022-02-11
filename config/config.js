const sql = require('mssql');

const config = {
    user: 'juan.paz',
    password: 'Covid2022',
    server: '192.168.1.30',
    database: 'HorasExtras',
    domain: 'alutech',
    options: {
        encrypt: false,
        trustServerCertificate: true,
        }
}

exports.getConection = async function getConnection() {

    try {
        const pool = await sql.connect(config)
        return pool
    } catch (error) {
        console.log(error);
    } 

} 