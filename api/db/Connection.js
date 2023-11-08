import pg from 'pg'
import 'dotenv'


const pool =new pg.Pool({
    host:'localhost',
    port:5432,
    user:'postgres',
    database:'collegebuddy',
    password:''


})


export default pool