const config = require('./config/config') 

async function excute() {
    let conn  = await config.getConection()
    let codes = await conn.request().query(`
                                            SELECT 
                                                em.Nombre as nombre
                                            FROM HoraExtra he JOIN
                                                Empleado em ON em.IdEmpleado = he.IdEmpleado
                                            WHERE he.Fecha BETWEEN '2022-01-31' AND '2022-02-04' AND
                                                em.IdDispositivo = 55
                                                GROUP BY em.Nombre 
                                            `)
    // console.log(codes.recordset);
    for (let index = 0; index < codes.recordset.length; index++) {
        const element = codes.recordset[index];
        console.log(element.nombre);
        try {
            let result = await conn.request()
                            .input('FechaAsistencia', '2022-01-31')
                            .input('v_empleado',element.nombre)
                            .execute('sp_construccions_data') 
            
        } catch (error) {
            console.log(error);
        }
    } 
}

excute()