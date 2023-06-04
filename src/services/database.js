const mysql = require('mysql2/promise')


const database = async () => {
    const connection = await mysql.createConnection({
        host: process.env.NEXT_PUBLIC_DATABASE_HOST,
        user: process.env.NEXT_PUBLIC_DATABASE_USER,
        password: process.env.NEXT_PUBLIC_DATABASE_PASS,
        database: process.env.NEXT_PUBLIC_DATABASE,
        ssl: {
            rejectUnauthorized: true
        }
    })

    return connection
}

export { database }