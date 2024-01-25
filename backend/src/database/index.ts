import { Client } from 'pg'

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'facilita'
})

void client.connect()

export { client }
