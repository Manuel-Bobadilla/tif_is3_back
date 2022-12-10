import {createPool} from 'mysql2/promise'

export const pool = createPool({
    host: '172.17.0.1',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'contador'
})
