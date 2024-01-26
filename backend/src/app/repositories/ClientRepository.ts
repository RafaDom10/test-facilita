import { type Client } from '../model/Client'
import { type IClientRepository } from './IClientRepository'
import { client } from '../../database'

export class ClientRepository implements IClientRepository {
  async findAll (): Promise<Client[]> {
    const { rows } = await client.query(`
      SELECT clients.*
      FROM clients
    `)
    return rows
  }

  async findById (id: string): Promise<Client> {
    const { rows } = await client.query(`
      SELECT clients.*
      FROM clients
      WHERE clients.id = $1`, [id])
    return rows[0]
  }

  async findByEmail (email: string): Promise<Client> {
    const { rows } = await client.query(`
      SELECT * FROM clients WHERE email = $1`, [email])
    return rows[0]
  }

  async create ({ name, email, phone, coordinates }: Omit<Client, 'id'>): Promise<Client> {
    const { rows } = await client.query(`
      INSERT INTO clients(name, email, phone, coordinates)
      VALUES($1, $2, $3, $4)
      RETURNING *
    `, [name, email, phone, coordinates])

    return rows[0]
  }

  async update ({ name, email, phone, coordinates }: Client, id: string): Promise<Client> {
    const { rows } = await client.query(`
      UPDATE clients
      SET name = $1, email = $2, phone = $3, coordinates = $4
      WHERE id = $5
      RETURNING *
    `, [name, email, phone, coordinates, id])

    return rows[0]
  }

  async delete (id: string): Promise<void> {
    await client.query(`
      DELETE FROM clients
      WHERE id = $1
    `, [id])
  }
}
